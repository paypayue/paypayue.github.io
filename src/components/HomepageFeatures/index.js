import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import IconGuias from '@site/static/img/icon-guias.svg'
import IconApi from '@site/static/img/icon-api.svg'
import IconIntegracoes from '@site/static/img/icon-integracoes.svg'
import IconLink from '@site/static/img/icon-link.svg'

export default function HomepageFeatures() {
  const {
    siteConfig: {customFields}
  } = useDocusaurusContext();

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--12')}>
            <div className={styles["features__title"]}>
              <Translate id="homepage.featuresTitle">
                Sobre esta documentação
              </Translate>
            </div>
            <div className={styles["features__subtitle"]}>
              <Translate id="homepage.featuresSubtitle">
                O portal do programador da PayPay expande a documentação de referência regular com documentação contextual, guias para desenvolvedores e tudo o que os utilizadores da API necessitam.
              </Translate>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className={styles["features__card"]}>
              <div className={styles["features__card-circleBg"]}>
                <IconGuias className={styles["features__card-icon"]} />
              </div>
              <div className="text--left">
                <p className={styles["features__card-title"]}>
                  <Translate id="homepage.guias">Guias</Translate>
                </p>
                <p className={styles["features__card-description"]}>
                  <Translate id="homepage.guiasDescription">
                    Este guia descreve os requisitos e passos necessários para a integração com a PayPay para os clientes que pretendam integrar os nossos serviços de pagamento diretamente nas suas aplicações.
                  </Translate>
                </p>
                <Link className={styles["features__card-link"]} to='/docs/guides/intro'>
                  <Translate id="homepage.featuresButton">Saber mais</Translate>
                  <div className={styles["features__card-link-icon"]}>
                    <IconLink/>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className={styles["features__card"]}>
              <div className={styles["features__card-circleBg"]}>
                <IconApi className={styles["features__card-icon"]} />
              </div>
              <div className="text--left">
                <p className={styles["features__card-title"]}>
                  <Translate id="homepage.api">Especificação API</Translate>
                </p>
                <p className={styles["features__card-description"]}>
                  <Translate id="homepage.apiDescription">
                    A PayPay suporta integrações com o seu software de gestão através da nossa API. Aqui encontrará detalhes técnicos para facilitar a integração.
                  </Translate>
                </p>
                <Link className={styles["features__card-link"]} href={customFields.docsApi}>
                  <Translate id="homepage.featuresButton">Saber mais</Translate>
                  <div className={styles["features__card-link-icon"]}>
                    <IconLink/>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className={styles["features__card"]}>
              <div className={styles["features__card-circleBg"]}>
                <IconIntegracoes className={styles["features__card-icon"]} />
              </div>
              <div className="text--left">
                <p className={styles["features__card-title"]}>
                  <Translate id="homepage.integracoes">Integrações</Translate>
                </p>
                <p className={styles["features__card-description"]}>
                  <Translate id="homepage.integracoesDescription">
                    A PayPay disponibiliza diversas integrações e plugins gratuitos que permitem unir os serviços de pagamento, por Multibanco, Cartão de Crédito/Débito e MB WAY, com lojas de e-commerce e softwares de faturação.
                  </Translate>
                </p>
                <Link className={styles["features__card-link"]} to='/docs/integrations/intro'>
                  <Translate id="homepage.featuresButton">Saber mais</Translate>
                  <div className={styles["features__card-link-icon"]}>
                    <IconLink/>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
