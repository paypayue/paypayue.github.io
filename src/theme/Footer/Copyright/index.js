import React from 'react';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function FooterCopyright({copyright}) {
  const {
      siteConfig: {customFields, i18n}
  } = useDocusaurusContext();

  return (
    <div className="footer__copyright">
      {copyright}
      {customFields.footerCopyrightLinks && customFields.footerCopyrightLinks.map(({i18nId, title, link}, idx) => (
        <>
          <span class="footer__link-separator">|</span>
          <a href={link+i18n.currentLocale} target="_blank" rel="noopener noreferrer" class="footer__link-copyright">
            <Translate id={i18nId}>{title}</Translate>
          </a>
        </>
      ))}
    </div>
  );
}
