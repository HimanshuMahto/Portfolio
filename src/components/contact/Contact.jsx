import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';
import { Reveal } from '../animations/AnimatedSection';
import './contact.css';

const CHANNELS = [
  { label: 'Email',    value: 'himanshumahto0102@gmail.com', href: 'mailto:himanshumahto0102@gmail.com' },
  { label: 'GitHub',   value: 'HimanshuMahto',               href: 'https://github.com/HimanshuMahto' },
  { label: 'LinkedIn', value: 'himanshumahto',               href: 'https://linkedin.com/in/himanshumahto' },
  { label: 'Writing',  value: 'Read on Medium',              href: 'https://medium.com/@k.himanshu2002/i-got-tired-of-chromes-bookmarks-so-i-built-kuikku-807e4317bd48' },
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
        setTimeout(() => setSent(false), 6000);
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
        <Reveal>
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let&apos;s work together</h2>
          <p className="section-subtitle">I reply to every message. Usually within a day.</p>
        </Reveal>

        <div className="contact__layout">
          <Reveal className="contact__channels">
            <dl className="contact__channel-list">
              {CHANNELS.map(({ label, value, href }) => (
                <div className="contact__channel" key={label}>
                  <dt className="contact__channel-label">{label}</dt>
                  <dd className="contact__channel-value">
                    <a
                      href={href}
                      target={href.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noreferrer"
                      className="contact__channel-link"
                    >
                      {value}
                      <ArrowUpRight size={13} />
                    </a>
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href="https://github.com/HimanshuMahto"
              target="_blank"
              rel="noreferrer"
              className="contact__github"
            >
              <GitHubIcon size={15} />
              Open to full-time roles
            </a>
          </Reveal>

          <Reveal delay={80} className="contact__form-wrap">
            <form onSubmit={handleSubmit} className="contact__form">
              <input type="hidden" name="subject" value="New message from portfolio" />
              <input type="hidden" name="from_name" value="Portfolio Contact Form" />

              <div className="contact__field">
                <label htmlFor="c-name" className="contact__label">Name</label>
                <input
                  id="c-name"
                  type="text"
                  name="name"
                  className="contact__input"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="c-email" className="contact__label">Email</label>
                <input
                  id="c-email"
                  type="email"
                  name="email"
                  className="contact__input"
                  placeholder="your@email.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="c-msg" className="contact__label">Message</label>
                <textarea
                  id="c-msg"
                  name="message"
                  className="contact__input contact__textarea"
                  placeholder="Tell me what you're working on..."
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary contact__submit" disabled={sending} aria-busy={sending}>
                {sending ? 'Sending…' : 'Send message'}
              </button>

              <p
                className={`contact__status${sent ? ' contact__status--ok' : ''}${error ? ' contact__status--error' : ''}`}
                role="status"
                aria-live="polite"
              >
                {sent && 'Message sent — I’ll get back to you soon.'}
                {error && error}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
