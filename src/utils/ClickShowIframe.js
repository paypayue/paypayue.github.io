import OpenIframe from "./OpenIframe";

const ClickShowIframe = ({typeMenu = 'tag', idMenuOption, idOption = null}) => {
    let menuOptionType = (typeMenu !== 'model') ? 'sidebar-tag/' : 'sidebar-models';
    let menuOptionHash = (typeMenu !== 'model') ? '#tag/' : '#model/';

    let firstTargetId =(typeMenu !== 'model') ? menuOptionType + idMenuOption : menuOptionType;
    let firstTargetHash = menuOptionHash + idMenuOption;

    let secondTargetId =(typeMenu !== 'model') ? menuOptionType + idOption : menuOptionType;
    let secondTargetHash = menuOptionHash + idMenuOption;

    let iframePanel = document.getElementById('iframePanel');
    let previousOptionIsOpen = iframePanel.contentDocument.querySelectorAll('li.sidebar-group-item ul');

    if (previousOptionIsOpen.length > 0) {
        previousOptionIsOpen.forEach((element) => element.parentNode.querySelector('button').click());
    }

    window.setTimeout(() => {
        iframePanel.contentDocument.getElementById(firstTargetId).querySelector('button').click();
    }, 700);
    iframePanel.contentWindow.location.hash = firstTargetHash;

    window.setTimeout(() => {
        iframePanel.contentDocument.getElementById(secondTargetId).querySelector('a.sidebar-heading-link').click();
    }, 1000);
    iframePanel.contentWindow.location.hash = secondTargetHash;

    OpenIframe();
};

export default ClickShowIframe;
