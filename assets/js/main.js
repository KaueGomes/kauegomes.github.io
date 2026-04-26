// ============================================================
// Garagem C-137 — main.js
// Responsável por: tema (light/dark/sephia), menu mobile,
// enhancement de blocos de código (header + copy button).
// ============================================================

(function themeToggle() {
  const THEME_KEY = 'theme-mode';
  const body = document.body;

  function setTheme(mode) {
    body.classList.remove('light-mode', 'dark-mode', 'sephia-mode');
    body.classList.add(mode + '-mode');
    localStorage.setItem(THEME_KEY, mode);
    // Sincroniza todos os selects de tema na página
    document.querySelectorAll('#theme-select').forEach(function (sel) {
      sel.value = mode;
    });
  }

  function init() {
    let saved = localStorage.getItem(THEME_KEY);
    if (!saved) {
      saved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    setTheme(saved);

    document.querySelectorAll('#theme-select').forEach(function (sel) {
      sel.value = saved;
      sel.addEventListener('change', function () { setTheme(this.value); });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

(function enhanceCodeBlocks() {
  function init() {
    const blocks = document.querySelectorAll('figure.highlight');
    blocks.forEach(function (block) {
      if (block.querySelector('.code-header')) return;
      const code = block.querySelector('code');
      const langClass = Array.from((code && code.classList) || []).find(function (c) { return c.indexOf('language-') === 0; });
      const lang = ((code && code.dataset && code.dataset.lang) || (langClass ? langClass.replace('language-', '') : 'text')).toLowerCase();

      const header = document.createElement('div');
      header.className = 'code-header';

      const label = document.createElement('span');
      label.className = 'code-lang';
      label.textContent = lang;

      const btn = document.createElement('button');
      btn.className = 'code-copy-btn';
      btn.type = 'button';
      btn.title = 'Copiar código';
      btn.setAttribute('aria-label', 'Copiar código');
      btn.innerHTML = '<i class="fa-regular fa-clipboard"></i>';

      header.append(label, btn);
      block.insertBefore(header, block.firstChild);

      btn.addEventListener('click', async function () {
        const text = code ? code.innerText : '';
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(text);
          } else {
            const ta = document.createElement('textarea');
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            ta.remove();
          }
          const icon = btn.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-regular', 'fa-clipboard');
            icon.classList.add('fa-solid', 'fa-check');
          }
          btn.classList.add('copied');
          setTimeout(function () {
            if (icon) {
              icon.classList.remove('fa-solid', 'fa-check');
              icon.classList.add('fa-regular', 'fa-clipboard');
            }
            btn.classList.remove('copied');
          }, 1200);
        } catch (_) { /* ignore */ }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

(function mobileMenu() {
  function init() {
    const btn = document.getElementById('hamburger');
    const nav = document.getElementById('site-nav');
    if (!btn || !nav) return;

    function openMenu() {
      nav.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
      btn.querySelector('i').classList.replace('fa-bars', 'fa-xmark');
      document.documentElement.style.overflow = 'hidden';
    }

    function closeMenu() {
      nav.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
      const icon = btn.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
      document.documentElement.style.overflow = '';
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (nav.classList.contains('active')) closeMenu();
      else openMenu();
    });

    // Fechar ao clicar fora
    document.addEventListener('click', function (e) {
      if (!nav.classList.contains('active')) return;
      if (!nav.contains(e.target) && e.target !== btn && !btn.contains(e.target)) {
        closeMenu();
      }
    });

    // Fechar com Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    // Fechar ao redimensionar para desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
