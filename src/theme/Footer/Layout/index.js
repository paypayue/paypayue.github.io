import React from 'react';
import clsx from 'clsx';
export default function FooterLayout({style, links, logo, copyright}) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
        <div className="container">
          <div className="row">
            <div className='col col--10 reset-pd'>
              {(logo || copyright) && (
                <div className="footer__bottom">
                  {logo && <div className="margin-bottom--sm">{logo}</div>}
                  {copyright}
                </div>
              )}
            </div>
            <div className='col col--2 reset-pd'>
              {links}
            </div>
          </div>
        </div>
    </footer>
  );
}
