import React from 'react';
import clsx from 'clsx';
import styles from './ExerciseBlock.module.css';

const ExerciseBlock = ({ title, children, difficulty = 'medium', className }) => {
  const exerciseClass = clsx(
    styles.exerciseBlock,
    styles[`difficulty${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`],
    className
  );

  return (
    <div className={exerciseClass}>
      <div className={styles.header}>
        <h4 className={styles.title}>
          <span className={styles.icon}>📝</span>
          {title}
        </h4>
        <span className={clsx(styles.difficultyBadge, styles[`badge${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`])}>
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </span>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default ExerciseBlock;