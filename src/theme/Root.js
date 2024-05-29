import React, { useEffect } from "react";
import OpenIframe from "../../src/utils/OpenIframe.js";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Root({children}) {
    const {
        siteConfig: {customFields}
    } = useDocusaurusContext();

    const handleClose = () => {
        document.getElementById("slideout").classList.remove("out");
        document.getElementById("open-panel").classList.remove("hidden");
        document.getElementById("close-panel").classList.add("hidden");
    };

    useEffect(() => {
        document.addEventListener('click', function (event) {
            window.setTimeout(() => {
                document.body.classList.remove('dark-mode');
                if (document.getElementsByClassName('scalar-api-reference').length){
                    document.querySelector('.navbar__item.dropdown').classList.add('hidden');
                }
            }, 1000);
            if (event.target.matches('.navbar__brand img') || event.target.matches('.navbar__brand b')) {
                document.getElementById('slideout').style.display = '';
            }
            return;
        }, false);
    }, []);

    return (
        <>
            <div className="panel" id="slideout">
                <div id="open-panel" className="open-panel-btn" onClick={OpenIframe}>API</div>
                <div className="panel-content" id="panel-content">
                    <div id="close-panel" className="close-panel-btn hidden" onClick={handleClose}>
                        <svg width="20" height="20" aria-hidden="true" className="expandButtonIcon_BlDH"><g fill="#7a7a7a"><path d="M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"></path><path d="M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"></path></g></svg>
                    </div>
                    <iframe id="iframePanel" src={customFields.docsApi}></iframe>
                </div>
            </div>
            {children}
        </>
    );
}
