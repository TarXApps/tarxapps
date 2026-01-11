/**
 * TARIQ MOHMAD SHIEKH - PORTFOLIO
 * Vanilla JavaScript (No Frameworks)
 */

(function() {
  'use strict';

  // ----------------------------------------
  // Smooth Scroll
  // ----------------------------------------
  function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ----------------------------------------
  // Open External Links
  // ----------------------------------------
  function openExternalLink(url) {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  // ----------------------------------------
  // Initialize Event Listeners
  // ----------------------------------------
  function init() {
    // Hero scroll button
    const heroScrollBtn = document.querySelector('.hero-scroll-btn');
    if (heroScrollBtn) {
      heroScrollBtn.addEventListener('click', function() {
        scrollToElement('#about');
      });
    }

    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', scrollToTop);
    }

    // Project cards (clickable)
    const projectCards = document.querySelectorAll('.project-card[data-url]');
    projectCards.forEach(function(card) {
      card.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        openExternalLink(url);
      });
    });

    // AI Project cards
    const aiProjectCards = document.querySelectorAll('.ai-project-card[data-url]');
    aiProjectCards.forEach(function(card) {
      card.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        openExternalLink(url);
      });
    });

    // Video cards
    const videoCards = document.querySelectorAll('.video-card[data-video-id]');
    videoCards.forEach(function(card) {
      card.addEventListener('click', function() {
        const videoId = this.getAttribute('data-video-id');
        openExternalLink('https://www.youtube.com/watch?v=' + videoId);
      });
    });

    // Contact email button
    const contactBtn = document.querySelector('.contact-btn');
    if (contactBtn) {
      contactBtn.addEventListener('click', function(e) {
        // Allow default mailto behavior
      });
    }

    // Footer nav links (smooth scroll)
    const footerNavLinks = document.querySelectorAll('.footer-nav a[href^="#"]');
    footerNavLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        scrollToElement(target);
      });
    });

    // Add intersection observer for fade-in animations
    initScrollAnimations();
  }

  // ----------------------------------------
  // Scroll Animations with Intersection Observer
  // ----------------------------------------
  function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) return;

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(function(el) {
      observer.observe(el);
    });
  }

  // ----------------------------------------
  // DOM Ready
  // ----------------------------------------
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
