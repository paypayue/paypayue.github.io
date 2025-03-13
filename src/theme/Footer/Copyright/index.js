import React from 'react';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function FooterCopyright({copyright}) {
  const {
      siteConfig: {customFields},
      i18n: {currentLocale}
  } = useDocusaurusContext();

  return (
    <div className="footer__copyright">
      {copyright}
      {customFields.footerCopyrightLinks && customFields.footerCopyrightLinks.map(({i18nId, title, link}, idx) => (
        <React.Fragment key={idx}>
          <span className="footer__link-separator">|</span>
          <a href={link+'/'+currentLocale} target="_blank" rel="noopener noreferrer" className="footer__link-copyright">
            <Translate id={i18nId}>{title}</Translate>
          </a>
        </React.Fragment>
      ))}
    </div>
  );
}
