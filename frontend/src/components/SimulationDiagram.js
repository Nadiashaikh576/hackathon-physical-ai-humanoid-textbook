import React from 'react';
import clsx from 'clsx';
import styles from './SimulationDiagram.module.css';

// A reusable component for displaying simulation diagrams
const SimulationDiagram = ({ title, description, children, type = 'general', className }) => {
  const diagramClass = clsx(
    styles.simulationDiagram,
    styles[type],
    className
  );

  return (
    <div className={diagramClass}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.content}>
        {children}
      </div>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default SimulationDiagram;