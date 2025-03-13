import clsx from 'clsx';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate from '@docusaurus/Translate';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles["heroBanner"])}>
      <div className='container'>
        <div className='row'>
          <div className='col col--6'>
            <div className={styles["hero__box"]}>
              <p className={clsx(styles["hero__header"], styles["text--left"])}>
                <Translate id="homepage.header">
                  portal do programador
                </Translate>
              </p>
              <p className={clsx(styles["hero__subtitle"], styles["hero__subtitle--primary"])}>
                <Translate id="homepage.headerTitle">
                  Documentação técnica
                </Translate>
              </p>
              <p className={clsx(styles["hero__subtitle"], styles["hero__subtitle--secondary"])}>
                <Translate id="homepage.headerDescription">
                  Aqui encontra todos os recursos necessários para integrar e otimizar os serviços de pagamento da PayPay.
                </Translate>
              </p>
            </div>
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
