/**
 * TARIQ MOHMAD SHIEKH - PORTFOLIO
 * Vanilla JavaScript (No Frameworks)
 */

(function() {
  'use strict';

  // ----------------------------------------
  // Supabase Configuration
  // ----------------------------------------
  const SUPABASE_URL = 'https://juwbtgnrgwjzemthavjv.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1d2J0Z25yZ3dqemVtdGhhdmp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwMDQ4NDUsImV4cCI6MjA4NDU4MDg0NX0.LlZyUegbPFaMpqh6m4HZ11_xW5KIee6dy5Zi7Y-_XXY';

  // ----------------------------------------
  // Navigation
  // ----------------------------------------
  function initNavigation() {
    const nav = document.getElementById('mainNav');
    const navLogo = document.getElementById('navLogo');
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.nav-link, .nav-mobile-link');
    const menuIcon = navToggle ? navToggle.querySelector('.menu-icon') : null;
    const closeIcon = navToggle ? navToggle.querySelector('.close-icon') : null;

    // Scroll detection for nav background
    function handleScroll() {
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Logo click - scroll to top
    if (navLogo) {
      navLogo.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Mobile menu toggle
    if (navToggle && mobileMenu) {
      navToggle.addEventListener('click', function() {
        const isOpen = mobileMenu.classList.contains('open');
        mobileMenu.classList.toggle('open');
        if (menuIcon && closeIcon) {
          menuIcon.style.display = isOpen ? 'block' : 'none';
          closeIcon.style.display = isOpen ? 'none' : 'block';
        }
      });
    }

    // Nav link clicks - smooth scroll
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu
        if (mobileMenu) {
          mobileMenu.classList.remove('open');
          if (menuIcon && closeIcon) {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
          }
        }
      });
    });
  }

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
  // Captcha
  // ----------------------------------------
  let captchaAnswer = 0;

  function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    captchaAnswer = num1 + num2;
    
    const captchaQuestion = document.getElementById('captchaQuestion');
    if (captchaQuestion) {
      captchaQuestion.textContent = num1 + ' + ' + num2 + ' = ?';
    }
    
    const captchaInput = document.getElementById('captcha');
    if (captchaInput) {
      captchaInput.value = '';
    }
  }

  // ----------------------------------------
  // Contact Form
  // ----------------------------------------
  function initContactForm() {
    const form = document.getElementById('contactForm');
    const refreshCaptchaBtn = document.getElementById('refreshCaptcha');
    
    // Generate initial captcha
    generateCaptcha();
    
    // Refresh captcha button
    if (refreshCaptchaBtn) {
      refreshCaptchaBtn.addEventListener('click', generateCaptcha);
    }
    
    if (form) {
      form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Clear previous errors
        document.querySelectorAll('.form-error').forEach(function(el) {
          el.textContent = '';
        });
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const service = document.getElementById('service').value;
        const captchaValue = document.getElementById('captcha').value;
        
        let hasError = false;
        
        // Validate name
        if (name.length < 2) {
          document.getElementById('nameError').textContent = 'Name must be at least 2 characters';
          hasError = true;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          document.getElementById('emailError').textContent = 'Please enter a valid email address';
          hasError = true;
        }
        
        // Validate service
        if (!service) {
          document.getElementById('serviceError').textContent = 'Please select a service';
          hasError = true;
        }
        
        // Validate captcha
        if (parseInt(captchaValue) !== captchaAnswer) {
          document.getElementById('captchaError').textContent = 'Incorrect answer. Please try again.';
          generateCaptcha();
          hasError = true;
        }
        
        if (hasError) return;
        
        // Disable submit button
        const submitBtn = document.getElementById('submitBtn');
        const submitText = document.getElementById('submitText');
        submitBtn.disabled = true;
        submitText.textContent = 'Sending...';
        
        try {
          // Submit to Supabase
          const response = await fetch(SUPABASE_URL + '/rest/v1/contact_submissions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'apikey': SUPABASE_ANON_KEY,
              'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
              'Prefer': 'return=minimal'
            },
            body: JSON.stringify({
              name: name,
              email: email,
              service: service
            })
          });
          
          if (!response.ok) {
            throw new Error('Failed to submit');
          }
          
          // Success
          alert('Message sent! Thank you for reaching out. I\'ll get back to you soon.');
          form.reset();
          generateCaptcha();
          
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('Failed to send message. Please try again or email directly.');
        } finally {
          submitBtn.disabled = false;
          submitText.textContent = 'Send Message';
        }
      });
    }
  }

  // ----------------------------------------
  // Initialize Event Listeners
  // ----------------------------------------
  function init() {
    // Initialize navigation
    initNavigation();
    
    // Initialize contact form
    initContactForm();
    
    // Hero scroll button
    const heroScrollBtn = document.querySelector('.hero-scroll-btn');
    if (heroScrollBtn) {
      heroScrollBtn.addEventListener('click', function() {
        scrollToElement('#about');
      });
    }

    // Back to top button (supports both class names)
    const backToTopBtn = document.querySelector('.back-to-top-btn, .back-to-top');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', scrollToTop);
    }

    // Dynamic footer year
    const footerYear = document.getElementById('footerYear');
    if (footerYear) {
      footerYear.textContent = new Date().getFullYear();
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
