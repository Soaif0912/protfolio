import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.logoInfo}>
          <h3 style={styles.logo}>Portfolio</h3>
          <p style={styles.tagline}>Building digital experiences.</p>
        </div>

        <div style={styles.socials}>
          <a href="https://www.linkedin.com/in/soaif-ikbal-mondal-3aa195232/" target='_blank' style={styles.socialLink}>LinkedIn</a>
          <a href="https://github.com/Soaif0912" target='_blank' style={styles.socialLink}>GitHub</a>

        </div>
      </div>
      <div style={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Soaif Ikbal Mondal. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#0b1120',
    paddingTop: '4rem',
    borderTop: '1px solid var(--card-border)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '2rem',
    marginBottom: '3rem',
  },
  logoInfo: {
    flex: '1',
  },
  logo: {
    color: '#fff',
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  tagline: {
    color: '#94a3b8',
  },
  socials: {
    display: 'flex',
    gap: '1.5rem',
  },
  socialLink: {
    color: '#94a3b8',
    transition: 'color 0.3s ease',
  },
  copyright: {
    textAlign: 'center',
    padding: '1.5rem',
    borderTop: '1px solid var(--card-border)',
    color: '#64748b',
    fontSize: '0.9rem',
  }
};

export default Footer;
