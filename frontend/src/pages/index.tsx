import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ModuleCard from '@site/src/components/ModuleCard';
import ProgressIndicator from '@site/src/components/ProgressIndicator';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Learning - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Teaching ROS 2 as the core middleware connecting AI intelligence to humanoid robot bodies">
      <HomepageHeader />
      <main>
        <section className={styles.modulesSection}>
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <h2 className={styles.sectionTitle}>Learning Modules</h2>
                <p className={styles.sectionDescription}>
                  Explore our comprehensive curriculum designed to teach you how to build AI-native humanoid robots.
                </p>

                <div className="row">
                  <div className="col col--3">
                    <ModuleCard
                      title="Module 1: The ROS 2 Nervous System"
                      description="Learn how ROS 2 functions as the communication backbone for humanoid robots"
                      icon="🔗"
                      link="/docs/module-1_ros2-nervous-system/intro"
                      number={1}
                    />
                  </div>
                  <div className="col col--3">
                    <ModuleCard
                      title="Module 2: The Digital Twin Brain"
                      description="Explore simulation technologies for humanoid robot development"
                      icon="🧪"
                      link="/docs/module-2_digital-twin-sim/intro"
                      number={2}
                    />
                  </div>
                  <div className="col col--3">
                    <ModuleCard
                      title="Module 3: The AI-Robot Brain"
                      description="Understand how NVIDIA Isaac technologies power robot intelligence"
                      icon="🧠"
                      link="/docs/module-3-isaac-robot-brain/intro"
                      number={3}
                    />
                  </div>
                  <div className="col col--3">
                    <ModuleCard
                      title="Module 4: Vision-Language-Action Intelligence"
                      description="Explore how language, vision, and action are unified in humanoid robots"
                      icon="👁️"
                      link="/docs/module-4-vla-humanoid-intelligence/intro"
                      number={4}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={clsx(styles.progressSection, styles.sectionBg)}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <h2 className={styles.sectionTitle}>Your Learning Progress</h2>
                <p className={styles.sectionDescription}>
                  Track your advancement through the AI-Native robotics curriculum.
                </p>

                <ProgressIndicator
                  percentage={40}
                  label="Overall Progress"
                />

                <div className={styles.progressCards}>
                  <div className="card">
                    <div className="card__header">
                      <h3>Module 1: ROS 2 Nervous System</h3>
                    </div>
                    <div className="card__body">
                      <ProgressIndicator
                        percentage={100}
                        label="Completed"
                      />
                    </div>
                  </div>

                  <div className="card">
                    <div className="card__header">
                      <h3>Module 2: Digital Twin Brain</h3>
                    </div>
                    <div className="card__body">
                      <ProgressIndicator
                        percentage={75}
                        label="In Progress"
                      />
                    </div>
                  </div>

                  <div className="card">
                    <div className="card__header">
                      <h3>Module 3: AI-Robot Brain</h3>
                    </div>
                    <div className="card__body">
                      <ProgressIndicator
                        percentage={25}
                        label="In Progress"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.featuresSection}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <div className="text--center padding-horiz--md">
                  <h3>Hands-on Learning</h3>
                  <p>Practical exercises and projects to reinforce theoretical concepts.</p>
                </div>
              </div>
              <div className="col col--4">
                <div className="text--center padding-horiz--md">
                  <h3>Industry Standard Tools</h3>
                  <p>Work with the same technologies used in professional robotics development.</p>
                </div>
              </div>
              <div className="col col--4">
                <div className="text--center padding-horiz--md">
                  <h3>Expert Guidance</h3>
                  <p>Learn from best practices and real-world implementation patterns.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
