import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './notfound.css';

const LINES = [
  { id: 'cmd1',    content: '$ cd /page-not-found',                          cls: 'nf-prompt'  },
  { id: 'err',     content: 'bash: /page-not-found: No such file or directory', cls: 'nf-error'   },
  { id: 'cmd2',    content: '$ ls ../',                                       cls: 'nf-prompt'  },
  { id: 'dirs',    content: 'home/   about/   work/   contact/',              cls: 'nf-dir'     },
  { id: 'suggest', content: '# hint: one of those might be what you need.',   cls: 'nf-suggest' },
];

const DELAY_BETWEEN = 480; // ms between lines
const CURSOR_AFTER  = LINES.length; // show cursor after all lines

const NotFound = () => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= LINES.length) return;
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), DELAY_BETWEEN);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  return (
    <div className="nf-wrapper">
      <div className="nf-terminal" role="region" aria-label="404 terminal">
        {/* Mac-style title bar */}
        <div className="nf-titlebar">
          <span className="nf-dot nf-dot-red"    aria-hidden="true" />
          <span className="nf-dot nf-dot-yellow" aria-hidden="true" />
          <span className="nf-dot nf-dot-green"  aria-hidden="true" />
          <span className="nf-title">bash — 404 not found</span>
        </div>

        {/* Terminal body */}
        <div className="nf-body">
          {LINES.map((line, i) => (
            <span
              key={line.id}
              className={`nf-line ${line.cls} ${i < visibleCount ? 'visible' : ''}`}
            >
              {line.content}
            </span>
          ))}

          {/* Blinking cursor — appears after all lines */}
          <span
            className={`nf-line nf-muted ${visibleCount >= CURSOR_AFTER ? 'visible' : ''}`}
          >
            {'$ '}
            <span className={`nf-cursor ${visibleCount >= CURSOR_AFTER ? 'visible' : ''}`} aria-hidden="true" />
          </span>

          {/* Navigate home button */}
          <div className={`nf-btn-row ${visibleCount >= CURSOR_AFTER ? 'visible' : ''}`}>
            <button
              className="nf-btn"
              onClick={() => navigate('/')}
              aria-label="Go back to home page"
            >
              $ cd ~/
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
