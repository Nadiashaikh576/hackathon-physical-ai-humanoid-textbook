import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from './ModuleCard.module.css';

const ModuleCard = ({ title, description, icon, link, number, className }) => {
  const cardClass = clsx(
    styles.moduleCard,
    styles[`moduleCard${number}`],
    className
  );

  return (
    <Link to={useBaseUrl(link)} className={styles.link}>
      <div className={cardClass}>
        <div className={styles.cardHeader}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>{icon}</div>
          </div>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.cardBody}>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ModuleCard;