import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [captchaToken, setCaptchaToken] = useState(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');
  const recaptchaRef = useRef(null);

  // Uses Vercel / .env environment variable, or Google's official development test key as fallback
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
    if (status === 'error') {
      setStatus('idle');
      setStatusMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setStatusMessage('Please fill out all fields before submitting.');
      return;
    }

    if (!captchaToken) {
      setStatus('error');
      setStatusMessage('Please check the "I\'m not a robot" box before sending.');
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    // If EmailJS keys have not yet been configured with real credentials (preview/development mode)
    if (!publicKey || publicKey === 'your_public_key' || !serviceId || serviceId === 'your_service_id') {
      setTimeout(() => {
        setStatus('success');
        setStatusMessage(
          'Message received! (Development Mode: reCAPTCHA v2 verified. To deliver directly to soaif0912@gmail.com, configure your EmailJS keys in Vercel / .env)'
        );
        setFormData({ name: '', email: '', message: '' });
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
      }, 1000);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'soaif0912@gmail.com',
        message: formData.message,
        'g-recaptcha-response': captchaToken
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus('success');
      setStatusMessage('Thank you! Your message has been sent directly to soaif0912@gmail.com.');
      setFormData({ name: '', email: '', message: '' });
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setStatusMessage(
        err?.text || 'Failed to send message. Please verify your EmailJS configuration or try again.'
      );
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    }
  };

  return (
    <section id="contact" className="animate-on-scroll">
      <div className="container contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Have a project in mind or want to collaborate? Send a message.
        </p>

        <div className="glass-panel contact-card">
          {status === 'success' ? (
            <div className="contact-success-box">
              <CheckCircle size={54} className="contact-success-icon" />
              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem', color: '#fff' }}>
                Message Sent Successfully!
              </h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', lineHeight: 1.6 }}>
                {statusMessage}
              </p>
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginTop: '1.75rem' }}
                onClick={() => setStatus('idle')}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              {status === 'error' && (
                <div className="contact-alert contact-alert-error" role="alert">
                  <AlertCircle size={20} />
                  <span>{statusMessage}</span>
                </div>
              )}

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Soaif Mondal"
                    className="contact-input"
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="contact-input"
                    disabled={status === 'submitting'}
                  />
                </div>
              </div>

              <div className="contact-form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, ideas, or timeline..."
                  className="contact-input contact-textarea"
                  disabled={status === 'submitting'}
                />
              </div>

              {/* Google reCAPTCHA v2 Checkbox Widget */}
              <div className="contact-recaptcha-wrapper">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={siteKey}
                  onChange={handleCaptchaChange}
                  onExpired={() => setCaptchaToken(null)}
                  theme="dark"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary contact-submit-btn"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={20} className="spinner-icon" /> Sending Message...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
