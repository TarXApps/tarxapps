/**
 * ADMIN DASHBOARD
 * Vanilla JavaScript with Supabase
 */

(function() {
  'use strict';

  // Supabase Configuration
  const SUPABASE_URL = 'https://juwbtgnrgwjzemthavjv.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1d2J0Z25yZ3dqemVtdGhhdmp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwMDQ4NDUsImV4cCI6MjA4NDU4MDg0NX0.LlZyUegbPFaMpqh6m4HZ11_xW5KIee6dy5Zi7Y-_XXY';

  // Initialize Supabase client
  const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  // State
  let currentUser = null;
  let submissions = [];

  // ----------------------------------------
  // DOM Elements
  // ----------------------------------------
  const loadingState = document.getElementById('loadingState');
  const accessDenied = document.getElementById('accessDenied');
  const adminDashboard = document.getElementById('adminDashboard');
  const userEmailEl = document.getElementById('userEmail');
  const logoutBtn = document.getElementById('logoutBtn');
  const refreshBtn = document.getElementById('refreshBtn');
  const tableLoading = document.getElementById('tableLoading');
  const emptyState = document.getElementById('emptyState');
  const tableWrapper = document.getElementById('tableWrapper');
  const submissionsTableBody = document.getElementById('submissionsTableBody');
  const totalSubmissionsEl = document.getElementById('totalSubmissions');
  const todaySubmissionsEl = document.getElementById('todaySubmissions');
  const weekSubmissionsEl = document.getElementById('weekSubmissions');

  // ----------------------------------------
  // Utility Functions
  // ----------------------------------------
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  function isToday(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }

  function isThisWeek(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    return date >= weekAgo && date <= today;
  }

  // ----------------------------------------
  // Check Admin Access
  // ----------------------------------------
  async function checkAdminAccess(userId) {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId)
        .eq('role', 'admin')
        .maybeSingle();

      if (error) {
        console.error('Error checking admin role:', error);
        return false;
      }

      return !!data;
    } catch (err) {
      console.error('Error:', err);
      return false;
    }
  }

  // ----------------------------------------
  // Fetch Submissions
  // ----------------------------------------
  async function fetchSubmissions() {
    tableLoading.style.display = 'flex';
    emptyState.style.display = 'none';
    tableWrapper.style.display = 'none';

    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching submissions:', error);
        return;
      }

      submissions = data || [];
      renderSubmissions();
      updateStats();
    } catch (err) {
      console.error('Error:', err);
    }
  }

  // ----------------------------------------
  // Render Submissions Table
  // ----------------------------------------
  function renderSubmissions() {
    tableLoading.style.display = 'none';

    if (submissions.length === 0) {
      emptyState.style.display = 'flex';
      tableWrapper.style.display = 'none';
      return;
    }

    emptyState.style.display = 'none';
    tableWrapper.style.display = 'block';

    submissionsTableBody.innerHTML = submissions.map(function(sub) {
      const isNew = isToday(sub.created_at);
      return `
        <tr>
          <td>${escapeHtml(sub.name)}</td>
          <td>${escapeHtml(sub.email)}</td>
          <td>${escapeHtml(sub.service)}</td>
          <td>${formatDate(sub.created_at)}</td>
          <td>
            <span class="status-badge ${isNew ? 'status-badge-new' : 'status-badge-reviewed'}">
              ${isNew ? 'New' : 'Reviewed'}
            </span>
          </td>
        </tr>
      `;
    }).join('');
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // ----------------------------------------
  // Update Stats
  // ----------------------------------------
  function updateStats() {
    totalSubmissionsEl.textContent = submissions.length;
    
    const todayCount = submissions.filter(function(sub) {
      return isToday(sub.created_at);
    }).length;
    todaySubmissionsEl.textContent = todayCount;

    const weekCount = submissions.filter(function(sub) {
      return isThisWeek(sub.created_at);
    }).length;
    weekSubmissionsEl.textContent = weekCount;
  }

  // ----------------------------------------
  // Logout
  // ----------------------------------------
  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = 'login.html';
  }

  // ----------------------------------------
  // Initialize
  // ----------------------------------------
  async function init() {
    try {
      // Check session
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        // Not logged in, redirect to login
        window.location.href = 'login.html';
        return;
      }

      currentUser = session.user;

      // Check admin access
      const isAdmin = await checkAdminAccess(currentUser.id);

      loadingState.style.display = 'none';

      if (!isAdmin) {
        accessDenied.style.display = 'flex';
        return;
      }

      // Show dashboard
      adminDashboard.style.display = 'flex';
      userEmailEl.textContent = currentUser.email;

      // Fetch submissions
      await fetchSubmissions();

      // Event listeners
      logoutBtn.addEventListener('click', handleLogout);
      refreshBtn.addEventListener('click', fetchSubmissions);

    } catch (err) {
      console.error('Initialization error:', err);
      window.location.href = 'login.html';
    }
  }

  // DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
