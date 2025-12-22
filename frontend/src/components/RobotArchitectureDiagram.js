import React from 'react';
import clsx from 'clsx';
import styles from './RobotArchitectureDiagram.module.css';

const RobotArchitectureDiagram = ({ title, children, type = 'vla', className }) => {
  const diagramClass = clsx(
    styles.architectureDiagram,
    styles[type],
    className
  );

  return (
    <div className={diagramClass}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.content}>
        {children}
      </div>
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={clsx(styles.legendColor, styles.input)}></div>
          <span>Input</span>
        </div>
        <div className={styles.legendItem}>
          <div className={clsx(styles.legendColor, styles.processing)}></div>
          <span>Processing</span>
        </div>
        <div className={styles.legendItem}>
          <div className={clsx(styles.legendColor, styles.output)}></div>
          <span>Output</span>
        </div>
      </div>
    </div>
  );
};

export default RobotArchitectureDiagram;