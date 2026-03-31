import React, { useState, useEffect } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { FadeUp } from '../animations/AnimatedSection';
import './contact.css';

const BOOT_LINES = [
  { delay: 0,    text: '$ whoami',                       type: 'cmd' },
  { delay: 300,  text: 'himanshu — software developer',  type: 'out' },
  { delay: 600,  text: '$ cat contact.txt',              type: 'cmd' },
  { delay: 900,  text: 'email    himanshumahto0102@gmail.com', type: 'out' },
  { delay: 1100, text: 'github   github.com/HimanshuMahto',   type: 'out' },
  { delay: 1300, text: 'linkedin linkedin.com/in/himanshumahto', type: 'out' },
  { delay: 1600, text: '$ status',                       type: 'cmd' },
  { delay: 1900, text: '● open to new opportunities',    type: 'success' },
  { delay: 2200, text: '$ send_message --interactive',   type: 'cmd' },
  { delay: 2500, text: '# fill in the form →',          type: 'comment' },
];

const Contact = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => setVisibleLines(n => Math.max(n, i + 1)), line.delay);
    });
  }, []);

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
        <FadeUp>
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let&apos;s work together</h2>
          <p className="section-subtitle">Have a project or opportunity? I&apos;d love to hear from you.</p>
        </FadeUp>

        <FadeUp delay={0.15}>
          {/* Terminal window */}
          <div className="term">
            {/* Title bar */}
            <div className="term__bar">
              <span className="term__dot" style={{ background: '#ff5f57' }} />
              <span className="term__dot" style={{ background: '#febc2e' }} />
              <span className="term__dot" style={{ background: '#28c840' }} />
              <span className="term__title">himanshu@portfolio: ~/contact</span>
            </div>

            <div className="term__body">
              {/* Left pane — boot output */}
              <div className="term__left">
                {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
                  <div key={i} className={`term__line term__line--${line.type}`}>
                    {line.text}
                  </div>
                ))}
                {visibleLines < BOOT_LINES.length && (
                  <span className="term__cursor">█</span>
                )}
              </div>

              {/* Divider */}
              <div className="term__divider" />

              {/* Right pane — interactive form */}
              <div className="term__right">
                <div className="term__form-header">
                  <span className="term__line term__line--comment"># send_message --interactive</span>
                </div>

                {sent ? (
                  <div className="term__sent">
                    <CheckCircle size={18} />
                    <div>
                      <div className="term__line term__line--success">✓ message sent successfully</div>
                      <div className="term__line term__line--out">I'll get back to you soon.</div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="term__form">
                    <input type="hidden" name="subject" value="New message from portfolio" />
                    <input type="hidden" name="from_name" value="Portfolio Contact Form" />

                    <div className="term__field">
                      <label htmlFor="t-name" className="term__prompt">
                        <span className="term__prompt-arrow">❯</span> name
                        <span className="term__prompt-colon">:</span>
                      </label>
                      <input
                        id="t-name"
                        type="text"
                        name="name"
                        className="term__input"
                        placeholder="Your name"
                        autoComplete="off"
                        required
                      />
                    </div>

                    <div className="term__field">
                      <label htmlFor="t-email" className="term__prompt">
                        <span className="term__prompt-arrow">❯</span> email
                        <span className="term__prompt-colon">:</span>
                      </label>
                      <input
                        id="t-email"
                        type="email"
                        name="email"
                        className="term__input"
                        placeholder="your@email.com"
                        autoComplete="off"
                        required
                      />
                    </div>

                    <div className="term__field term__field--textarea">
                      <label htmlFor="t-msg" className="term__prompt">
                        <span className="term__prompt-arrow">❯</span> message
                        <span className="term__prompt-colon">:</span>
                      </label>
                      <textarea
                        id="t-msg"
                        name="message"
                        className="term__input term__textarea"
                        placeholder="Tell me about your project..."
                        rows={5}
                        required
                      />
                    </div>

                    {error && (
                      <div className="term__line term__line--error">⚠ {error}</div>
                    )}

                    <button
                      type="submit"
                      className="term__submit"
                      disabled={sending}
                    >
                      <span className="term__prompt-arrow">❯</span>
                      {sending ? 'sending...' : (
                        <><Send size={13} /> run send_message</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Contact;
