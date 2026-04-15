#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Scans all MDX files for <Translate> component IDs and reports which ones are
    missing from each locale's code.json.

.DESCRIPTION
    Searches docs/ (and i18n/**/current/ for locale-specific MDX files) for
    <Translate id="...">default text</Translate> patterns, then cross-checks
    each i18n/<locale>/code.json to identify missing entries.

.PARAMETER Root
    Path to the workspace root. Defaults to the current directory.

.OUTPUTS
    JSON object with:
      - foundIds: { id -> defaultPtText }
      - missing:  { locale -> { id -> defaultPtText } }

.EXAMPLE
    .\find-missing-translations.ps1 | ConvertFrom-Json
#>
param(
    [string]$Root = (Get-Location).Path
)

# ── 1. Collect all MDX files ────────────────────────────────────────────────
$searchPaths = @(
    (Join-Path $Root "docs"),
    (Join-Path $Root "i18n")
)

$mdxFiles = foreach ($path in $searchPaths) {
    if (Test-Path $path) {
        Get-ChildItem -Path $path -Recurse -Filter "*.mdx" -File
    }
}

# ── 2. Extract <Translate id="...">text</Translate> occurrences ─────────────
# Matches both single-line and multiline content (non-greedy)
$translatePattern = '(?s)<Translate\s+id="([^"]+)"[^>]*>(.*?)<\/Translate>'
$found = [ordered]@{}

foreach ($file in $mdxFiles) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $matchCollection = [regex]::Matches($content, $translatePattern)
    foreach ($m in $matchCollection) {
        $id          = $m.Groups[1].Value
        $defaultText = ($m.Groups[2].Value -replace '\s+', ' ').Trim()
        if (-not $found.Contains($id)) {
            $found[$id] = $defaultText
        }
    }
}

Write-Host "Found $($found.Count) unique Translate IDs across MDX files." -ForegroundColor Cyan

# ── 3. Check each locale's code.json ────────────────────────────────────────
$locales  = @("pt", "en", "es")
$missing  = [ordered]@{}

foreach ($locale in $locales) {
    $jsonPath = Join-Path $Root "i18n\$locale\code.json"
    if (-not (Test-Path $jsonPath)) {
        Write-Warning "code.json not found for locale '$locale' at: $jsonPath"
        $missing[$locale] = $found   # treat all as missing
        continue
    }

    $raw          = Get-Content $jsonPath -Raw -Encoding UTF8
    $parsed       = $raw | ConvertFrom-Json
    $existingKeys = $parsed.PSObject.Properties.Name

    $localeMissing = [ordered]@{}
    foreach ($id in $found.Keys) {
        if ($existingKeys -notcontains $id) {
            $localeMissing[$id] = $found[$id]
        }
    }

    $missing[$locale] = $localeMissing

    $color = if ($localeMissing.Count -eq 0) { "Green" } else { "Yellow" }
    Write-Host "  [$locale] $($localeMissing.Count) missing IDs" -ForegroundColor $color
}

# ── 4. Output structured result as JSON ─────────────────────────────────────
$result = [ordered]@{
    foundIds = $found
    missing  = $missing
}

$result | ConvertTo-Json -Depth 5 -Compress:$false
