import OpenIframe from "./OpenIframe";

const ClickShowIframe = (menuOption, option = null) => {
    let iframePanel = document.getElementById('iframePanel');
    let previousOptionIsOpen = iframePanel.contentDocument.querySelectorAll('li.sidebar-group-item ul');

    if (previousOptionIsOpen.length > 0) {
        previousOptionIsOpen.forEach((element) => element.parentNode.querySelector('button').click());
    }

    window.setTimeout(() => {
        iframePanel.contentDocument.getElementById('sidebar-tag/' + menuOption).querySelector('button').click();
    }, 700);
    iframePanel.contentWindow.location.hash = '#tag/' + menuOption;

    window.setTimeout(() => {
        iframePanel.contentDocument.getElementById('sidebar-tag/' + option).querySelector('a.sidebar-heading-link').click();
    }, 1000);
    iframePanel.contentWindow.location.hash = '#tag/' + option;

    OpenIframe();
};

export default ClickShowIframe;
