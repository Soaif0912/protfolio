import React from 'react';

const Feedbacks = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, TechStart',
      text: 'An exceptional freelancer. Delivered our Flutter app ahead of schedule with flawless execution. Highly recommended!',
      rating: '⭐⭐⭐⭐⭐'
    },
    {
      name: 'Jane Smith',
      role: 'Marketing Director',
      text: 'The new React website is stunning and perfectly optimized. Our conversion rates have skyrocketed since the launch.',
      rating: '⭐⭐⭐⭐⭐'
    },
    {
      name: 'Mike Johnson',
      role: 'Founder, E-Shop',
      text: 'Integrated our backend systems seamlessly. Great communication and solid problem-solving skills throughout the project.',
      rating: '⭐⭐⭐⭐⭐'
    }
  ];

  return (
    <section id="feedbacks" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Client Feedback</h2>
        <div style={styles.grid}>
          {testimonials.map((item, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.rating}>{item.rating}</div>
              <p style={styles.text}>"{item.text}"</p>
              <div style={styles.author}>
                <div style={styles.avatar}></div>
                <div>
                  <h4 style={styles.name}>{item.name}</h4>
                  <p style={styles.role}>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--bg-color)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: 'var(--card-bg)',
    padding: '2rem',
    borderRadius: '16px',
    border: '1px solid var(--card-border)',
    display: 'flex',
    flexDirection: 'column',
  },
  rating: {
    marginBottom: '1rem',
    fontSize: '1.2rem',
  },
  text: {
    color: '#cbd5e1',
    fontStyle: 'italic',
    lineHeight: '1.6',
    flexGrow: '1',
    marginBottom: '2rem',
  },
  author: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    borderTop: '1px solid var(--card-border)',
    paddingTop: '1rem',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'var(--accent-color)',
    opacity: '0.8',
  },
  name: {
    color: '#fff',
    fontSize: '1rem',
  },
  role: {
    color: '#94a3b8',
    fontSize: '0.8rem',
  }
};

export default Feedbacks;
