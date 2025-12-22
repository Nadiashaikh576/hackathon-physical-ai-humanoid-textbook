import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from './NavigationCard.module.css';

const NavigationCard = ({ title, description, icon, link, type = 'default', className }) => {
  const cardClass = clsx(
    styles.navigationCard,
    styles[`type${type.charAt(0).toUpperCase() + type.slice(1)}`],
    className
  );

  return (
    <Link to={useBaseUrl(link)} className={styles.link}>
      <div className={cardClass}>
        <div className={styles.iconContainer}>
          <div className={styles.icon}>{icon}</div>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default NavigationCard;