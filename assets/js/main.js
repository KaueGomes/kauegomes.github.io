document.addEventListener('DOMContentLoaded', function() {
  const THEME_KEY = 'theme-mode';
  const body = document.body;
  const themeSelect = document.getElementById('theme-select');

  function setTheme(mode) {
    body.classList.remove('light-mode', 'dark-mode', 'sephia-mode');
    body.classList.add(mode + '-mode');
    localStorage.setItem(THEME_KEY, mode);
    if (themeSelect) themeSelect.value = mode;
  }

  let saved = localStorage.getItem(THEME_KEY);
  if (!saved) {
    saved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  setTheme(saved);

  if (themeSelect) {
    themeSelect.value = saved;
    themeSelect.addEventListener('change', function() {
      setTheme(this.value);
    });
  }

  const menuIcon = document.getElementById('menu-icon');
  const sidebarContent = document.querySelector('.sidebar-content');
  const sidebar = document.getElementById('sidebar');

  if (menuIcon && sidebarContent && sidebar) {
    menuIcon.addEventListener('click', function() {
      sidebarContent.classList.toggle('active');
      sidebar.classList.toggle('active');
    });
  }
});