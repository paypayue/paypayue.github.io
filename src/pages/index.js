import clsx from 'clsx';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate from '@docusaurus/Translate';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <div className='row'>
          <div className='col col--6'>
            <p className='hero__subtitle hero__subtitle--primary'>
              <Translate id="homepage.headerDescription">
                Bem vindo!
              </Translate>
            </p>
            <p className='hero__subtitle hero__subtitle--secondary'>Aqui pode aceder à área de desenvolvimento do PayPay</p>
          </div>
          <div className='col col--6'>
            <div className='hero__logo'></div>
          </div>
        </div>
      </div>
    </header>

    // ver integracao link hidden
  );
}

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
