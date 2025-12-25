import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './about.module.css';

function AboutHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">About the AI-Native Book</h1>
        <p className="hero__subtitle">Physical AI & Humanoid Robotics</p>
      </div>
    </header>
  );
}

export default function About() {
  return (
    <Layout title="About" description="About the AI-Native Book project">
      <AboutHeader />
      <main>
        <section className={styles.aboutSection}>
          <div className="container padding-horiz--md">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <h2>Our Mission</h2>
                <p>
                  The AI-Native Book project is dedicated to teaching the fundamentals of connecting AI intelligence 
                  to humanoid robot bodies. We focus on creating comprehensive educational resources that bridge the 
                  gap between artificial intelligence and physical robotics.
                </p>
                
                <h2>What We Cover</h2>
                <p>
                  Our curriculum encompasses several critical areas of humanoid robotics:
                </p>
                <ul>
                  <li><strong>ROS 2 Fundamentals</strong> - The nervous system of robotic applications</li>
                  <li><strong>Digital Twins</strong> - Simulation environments using Gazebo and Unity</li>
                  <li><strong>AI-Robot Brains</strong> - NVIDIA Isaac for perception and navigation</li>
                  <li><strong>Vision-Language-Action Systems</strong> - Complete autonomous humanoid intelligence</li>
                </ul>
                
                <h2>Our Approach</h2>
                <p>
                  We believe in a hands-on, practical approach to learning. Our materials combine theoretical 
                  understanding with practical implementation, preparing students and developers for real-world 
                  challenges in humanoid robotics.
                </p>
                
                <h2>Target Audience</h2>
                <p>
                  This resource is designed for AI students, robotics engineers, and developers entering the 
                  field of humanoid robotics. Whether you're a beginner or looking to expand your knowledge, 
                  our structured modules will guide you through the essential concepts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}