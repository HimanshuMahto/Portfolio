import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { FadeUp } from '../animations/AnimatedSection';
import './blog.css';

const Blog = () => {
  return (
    <section className="blog section" id="blog">
      <div className="container">
        <FadeUp>
          <span className="section-label">Blog</span>
          <h2 className="section-title">Writing & Thoughts</h2>
          <p className="section-subtitle">Latest from my blog</p>
        </FadeUp>

        <FadeUp delay={0.15}>
        <div className="blog__teaser">
          <a
            href="https://medium.com/@k.himanshu2002/i-got-tired-of-chromes-bookmarks-so-i-built-kuikku-807e4317bd48"
            target="_blank"
            rel="noopener noreferrer"
            className="blog__teaser-card"
          >
            <div className="blog__teaser-accent" />
            <div className="blog__teaser-meta">
              <span className="blog__teaser-tag">Product</span>
              <span className="blog__teaser-dot">·</span>
              <span>Dec 2025</span>
              <span className="blog__teaser-dot">·</span>
              <span>6 min read</span>
            </div>
            <h3 className="blog__teaser-title">
              I Got Tired of Chrome's Bookmarks — So I Built Kuikku
            </h3>
            <p className="blog__teaser-desc">
              A deep dive into why I built a privacy-first Chrome extension for quick note-taking
              and bookmarking, the tech decisions behind it, and what I learned shipping a real product.
            </p>
            <span className="blog__teaser-link">
              Read on Medium <ArrowUpRight size={14} />
            </span>
          </a>
        </div>
        </FadeUp>

        <FadeUp delay={0.25}>
        <div className="blog__footer">
          <Link to="/blog" className="btn btn-outline">
            View all articles <ArrowRight size={16} />
          </Link>
        </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Blog;
