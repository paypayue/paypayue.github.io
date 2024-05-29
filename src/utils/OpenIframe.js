const OpenIframe = () => {
    if ( !document.getElementById('open-panel').classList.contains('hidden') ){
        document.getElementById("slideout").classList.add("out");
        document.getElementById("open-panel").classList.add("hidden");
        document.getElementById("close-panel").classList.remove("hidden");

        let iframePanelContent = document.getElementById("iframePanel").contentDocument;

        if (iframePanelContent.querySelector("nav")) {
            window.setTimeout(() => {
                iframePanelContent.querySelector("nav").remove();
                iframePanelContent.getElementById("slideout").remove();
            }, 850);
        }
    }
}

export default OpenIframe;
