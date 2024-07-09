import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function HomepageFeatures() {
  const {
    siteConfig: {customFields}
  } = useDocusaurusContext();

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src='img/guias.png' className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">
                <Translate id="homepage.guias">Guias</Translate>
              </Heading>
              <p>
                <Translate id="homepage.guiasDescription">
                  Consulte os recursos e passos necessários de forma a integrar serviços de pagamento diretamente na sua aplicação.
                </Translate>
              </p>
            </div>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to='/docs/guides/intro'>
                <Translate id="homepage.guiasButton">Consultar Guias</Translate>
              </Link>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src='img/API.png' className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">
                <Translate id="homepage.api">Especificação API</Translate>
              </Heading>
              <p>
                <Translate id="homepage.apiDescription">
                  Integre a sua aplicação com a nossa API
                </Translate>
              </p>
            </div>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                href={customFields.docsApi}>
                <Translate id="homepage.apiButton">Consultar Especificação API</Translate>
              </Link>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src='img/plugin.png' className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">
                <Translate id="homepage.integracoes">Integrações</Translate>
              </Heading>
              <p>
                <Translate id="homepage.integracoesDescription">
                  Conheça os nossos softwares e plugins gratuitos que permitem unir rapidamente os serviços de pagamento na sua loja de e-commerce/software de faturação.
                </Translate>
              </p>
            </div>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to='/integrations'>
                <Translate id="homepage.integracoesButton">Consultar Integrações</Translate>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
