import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'ReactJS',
    Svg: require('../../static/img/react.svg').default,
    description: <>Sharing about ReactJS</>,
  },
  {
    title: 'JavaScript and Typescript',
    Svg: require('../../static/img/javascript.svg').default,
    description: <>Sharing about the language JavaScript to build website…</>,
  },
  {
    title: "Developer's life",
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: <>More about the life of a developer.</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
