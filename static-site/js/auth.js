/**
 * AUTH PAGES - Login & Signup
 * Vanilla JavaScript with Supabase
 */

(function() {
  'use strict';

  // Supabase Configuration
  const SUPABASE_URL = 'https://juwbtgnrgwjzemthavjv.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1d2J0Z25yZ3dqemVtdGhhdmp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwMDQ4NDUsImV4cCI6MjA4NDU4MDg0NX0.LlZyUegbPFaMpqh6m4HZ11_xW5KIee6dy5Zi7Y-_XXY';

  // Initialize Supabase client
  const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  // ----------------------------------------
  // Utility Functions
  // ----------------------------------------
  function showError(elementId, message) {
    const el = document.getElementById(elementId);
    if (el) {
      el.textContent = message;
    }
  }

  function clearErrors() {
    document.querySelectorAll('.form-error').forEach(el => el.textContent = '');
    const globalError = document.getElementById('globalError');
    if (globalError) {
      globalError.textContent = '';
      globalError.classList.remove('show');
    }
  }

  function showGlobalError(message) {
    const globalError = document.getElementById('globalError');
    if (globalError) {
      globalError.textContent = message;
      globalError.classList.add('show');
    }
  }

  function setLoading(isLoading) {
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');

    if (isLoading) {
      submitBtn.disabled = true;
      btnText.style.display = 'none';
      btnLoading.style.display = 'flex';
    } else {
      submitBtn.disabled = false;
      btnText.style.display = 'block';
      btnLoading.style.display = 'none';
    }
  }

  // ----------------------------------------
  // Login Form Handler
  // ----------------------------------------
  async function handleLogin(e) {
    e.preventDefault();
    clearErrors();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Validation
    if (!email) {
      showError('emailError', 'Email is required');
      return;
    }
    if (!password) {
      showError('passwordError', 'Password is required');
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      });

      if (error) {
        showGlobalError(error.message || 'Failed to sign in');
        setLoading(false);
        return;
      }

      // Redirect to admin dashboard
      window.location.href = 'admin.html';
    } catch (err) {
      showGlobalError('An unexpected error occurred');
      setLoading(false);
    }
  }

  // ----------------------------------------
  // Signup Form Handler
  // ----------------------------------------
  async function handleSignup(e) {
    e.preventDefault();
    clearErrors();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validation
    if (!email) {
      showError('emailError', 'Email is required');
      return;
    }
    if (!password) {
      showError('passwordError', 'Password is required');
      return;
    }
    if (password.length < 6) {
      showError('passwordError', 'Password must be at least 6 characters');
      return;
    }
    if (password !== confirmPassword) {
      showError('confirmPasswordError', 'Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
      });

      if (error) {
        showGlobalError(error.message || 'Failed to create account');
        setLoading(false);
        return;
      }

      // Redirect to login page with success message
      window.location.href = 'login.html?signup=success';
    } catch (err) {
      showGlobalError('An unexpected error occurred');
      setLoading(false);
    }
  }

  // ----------------------------------------
  // Check Auth State
  // ----------------------------------------
  async function checkAuthState() {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (session) {
      // Already logged in, redirect to admin
      window.location.href = 'admin.html';
    }
  }

  // ----------------------------------------
  // Initialize
  // ----------------------------------------
  function init() {
    // Check if user is already logged in
    checkAuthState();

    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', handleLogin);
    }

    // Signup form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
      signupForm.addEventListener('submit', handleSignup);
    }

    // Show success message if redirected from signup
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('signup') === 'success') {
      const globalError = document.getElementById('globalError');
      if (globalError) {
        globalError.style.background = 'hsla(142, 76%, 36%, 0.1)';
        globalError.style.borderColor = 'hsla(142, 76%, 36%, 0.3)';
        globalError.style.color = 'hsl(142, 76%, 50%)';
        globalError.textContent = 'Account created successfully! Please sign in.';
        globalError.classList.add('show');
      }
    }
  }

  // DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
