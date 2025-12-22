import React from 'react';
import clsx from 'clsx';
import styles from './ProgressIndicator.module.css';

const ProgressIndicator = ({ percentage, label, className }) => {
  const progressClass = clsx(
    styles.progressIndicator,
    className
  );

  return (
    <div className={progressClass}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className={styles.percentage}>{percentage}%</span>
    </div>
  );
};

export default ProgressIndicator;