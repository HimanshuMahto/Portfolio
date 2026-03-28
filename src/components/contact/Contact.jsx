import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Linkedin } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';
import { FadeUp, FadeLeft, FadeRight } from '../animations/AnimatedSection';
import './contact.css';

const CONTACT_LINKS = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'himanshumahto0102@gmail.com',
    href: 'mailto:himanshumahto0102@gmail.com',
  },
  {
    icon: <GitHubIcon size={20} />,
    label: 'GitHub',
    value: 'github.com/HimanshuMahto',
    href: 'https://github.com/HimanshuMahto',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/himanshumahto',
    href: 'https://linkedin.com/in/himanshumahto',
  },
];

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    const formData = new FormData(e.target);
    formData.append('access_key', '644110cd-b006-4798-bd85-f7dcd7d379dd');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setSent(true);
        setSending(false);
        e.target.reset();
        setTimeout(() => setSent(false), 5000);
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (err) {
      setSending(false);
      setError(err.message || 'Failed to send. Please email me directly.');
      setTimeout(() => setError(''), 6000);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <FadeUp>
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let&apos;s work together</h2>
          <p className="section-subtitle">Have a project or opportunity? I&apos;d love to hear from you.</p>
        </FadeUp>

        <div className="contact__layout">
          <FadeLeft delay={0.15} className="contact__info">
            <p className="contact__blurb">
              I&apos;m currently open to new opportunities — whether it&apos;s a full-time role, freelance project, or just a good conversation about tech.
            </p>

            <div className="contact__links">
              {CONTACT_LINKS.map(({ icon, label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="contact__link-card">
                  <div className="contact__link-icon">{icon}</div>
                  <div>
                    <p className="contact__link-label">{label}</p>
                    <p className="contact__link-value">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </FadeLeft>

          <FadeRight delay={0.25} className="contact__form-wrap">
          <form onSubmit={handleSubmit} className="contact__form">
            <input type="hidden" name="subject" value="New message from portfolio" />
            <input type="hidden" name="from_name" value="Portfolio Contact Form" />

            <div className="contact__field">
              <label htmlFor="name" className="contact__label">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                className="contact__input"
                placeholder="Your name"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="email" className="contact__label">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className="contact__input"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message" className="contact__label">Message</label>
              <textarea
                id="message"
                name="message"
                className="contact__input contact__textarea"
                placeholder="Tell me about your project..."
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary contact__submit"
              disabled={sending || sent}
            >
              {sent ? (
                <><MessageSquare size={16} /> Message sent!</>
              ) : sending ? (
                'Sending...'
              ) : (
                <><Send size={16} /> Send message</>
              )}
            </button>

            {error && (
              <p className="contact__error">
                ⚠ {error}
              </p>
            )}
          </form>
          </FadeRight>
        </div>
      </div>
    </section>
  );
};

export default Contact;
