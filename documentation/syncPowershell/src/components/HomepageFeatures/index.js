import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Powershell Sync Profile was designed from the ground up to be easily 
        used to get your powershell profiles synchronized
      </>
    ),
  },
  {
    title: 'Windows/MAC/Linux',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Powershell Sync Profile will let you upload and download fast the profile , no matter if Windows/MAC/Linux
      </>
    ),
  },
  {
    title: 'Powered by .NET Core / Powershell / Docusaurus',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The site is made with .NET Core . The Help with Docusaurus . 
        
        You can use powershell to synchronize the profile.
        
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (

    <div  className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" display={"none"} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
