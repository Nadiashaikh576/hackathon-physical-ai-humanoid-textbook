import React, { useState } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './contact.module.css';

function ContactHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Contact Us</h1>
        <p className="hero__subtitle">Get in touch with the AI-Native Book team</p>
      </div>
    </header>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a backend
    alert('Thank you for your message! In a real application, this would be sent to our team.');
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Layout title="Contact" description="Contact the AI-Native Book team">
      <ContactHeader />
      <main>
        <section className={styles.contactSection}>
          <div className="container padding-horiz--md">
            <div className="row">
              <div className="col col--6 col--offset-3">
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="form-control"
                    />
                  </div>
                  
                  <button type="submit" className={clsx('button button--primary button--lg', styles.submitButton)}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}