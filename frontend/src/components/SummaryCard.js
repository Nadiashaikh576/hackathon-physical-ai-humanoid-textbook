import React from 'react';
import clsx from 'clsx';
import styles from './SummaryCard.module.css';

const SummaryCard = ({ title, children, type = 'default', className }) => {
  const cardClass = clsx(
    styles.summaryCard,
    styles[`type${type.charAt(0).toUpperCase() + type.slice(1)}`],
    className
  );

  return (
    <div className={cardClass}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default SummaryCard;