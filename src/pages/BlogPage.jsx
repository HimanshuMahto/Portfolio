import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from 'lucide-react';
import '../components/blog/blog.css';

const ARTICLES = [
  {
    id: 1,
    title: "I Got Tired of Chrome's Bookmarks — So I Built Kuikku",
    date: 'Dec 2025',
    description:
      "A deep dive into why I built a privacy-first Chrome extension for quick note-taking and bookmarking, the tech decisions behind it, and what I learned shipping a real product.",
    link: 'https://medium.com/@k.himanshu2002/i-got-tired-of-chromes-bookmarks-so-i-built-kuikku-807e4317bd48',
    tag: 'Product',
    readTime: '6 min read',
    excerpt:
      "Chrome's native bookmarks felt broken for how I actually use the web. I didn't want folders. I didn't want a sidebar. I wanted something fast — open toolbar, type a note, done. So I built Kuikku: a privacy-first Chrome extension that stores everything locally, supports real-time search, and stays out of your way.",
  },
];

const BlogPage = () => {
  return (
    <div className="blogpage">
      <nav className="blogpage__nav">
        <Link to="/" className="blogpage__back">
          <ArrowLeft size={18} />
          <span>Back to portfolio</span>
        </Link>
      </nav>

      <div className="blogpage__container">
        <div className="blogpage__hero">
          <span className="blogpage__label">Blog</span>
          <h1 className="blogpage__title">Writing & Thoughts</h1>
          <p className="blogpage__subtitle">
            I write about things I build, lessons I learn, and ideas that interest me.
          </p>
        </div>

        <div className="blogpage__articles">
          {ARTICLES.map((article) => (
            <a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blogpage__card"
            >
              <div className="blogpage__card-accent" />

              <div className="blogpage__card-header">
                <span className="blogpage__tag">{article.tag}</span>
                <div className="blogpage__meta">
                  <span className="blogpage__meta-item">
                    <Calendar size={13} />
                    {article.date}
                  </span>
                  <span className="blogpage__meta-item">
                    <Clock size={13} />
                    {article.readTime}
                  </span>
                </div>
              </div>

              <h2 className="blogpage__card-title">{article.title}</h2>
              <p className="blogpage__card-excerpt">{article.excerpt}</p>

              <span className="blogpage__read-link">
                Read on Medium <ArrowUpRight size={15} />
              </span>
            </a>
          ))}
        </div>

        <div className="blogpage__more">
          <div className="blogpage__more-card">
            <span className="blogpage__more-icon">✍️</span>
            <h3>More articles coming soon</h3>
            <p>I'm working on new posts about Android development, system design, and developer tools.</p>
            <a
              href="https://medium.com/@k.himanshu2002"
              target="_blank"
              rel="noopener noreferrer"
              className="blogpage__medium-link"
            >
              Follow me on Medium <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      <footer className="blogpage__footer">
        <p>
          <Link to="/">← himanshu.dev</Link>
        </p>
      </footer>
    </div>
  );
};

export default BlogPage;
