import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  prod_img: string;
  url: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Panda Touch',
    prod_img: require('@site/static/img/prod-img/panda_touch.png').default,
    url: 'docs/panda-series-intro',
    description: (
      <>
        An alternative or a replacement screen for the Bambu P1P and Bambu P1S.
      </>
    ),
  },
  // {
  //   title: 'Focus on What Matters',
  //   prod_img: require('@site/static/img/docusaurus.png').default,
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Powered by React',
  //   prod_img: require('@site/static/img/docusaurus.png').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({title, prod_img, url, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={url}>
          <img src={prod_img} width="65%" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
