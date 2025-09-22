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
});
  // --------- Enhancements: code blocks header + copy ---------
  (function enhanceCodeBlocks(){
    const blocks = document.querySelectorAll('figure.highlight');
    blocks.forEach(block => {
      if (block.querySelector('.code-header')) return;
      const code = block.querySelector('code');
      const langClass = Array.from(code?.classList || []).find(c => c.startsWith('language-'));
      const lang = (code?.dataset.lang || (langClass ? langClass.replace('language-','') : 'text')).toLowerCase();

      const header = document.createElement('div');
      header.className = 'code-header';

      const label = document.createElement('span');
      label.className = 'code-lang';
      label.textContent = lang;

      const btn = document.createElement('button');
      btn.className = 'code-copy-btn';
      btn.type = 'button';
      btn.title = 'Copiar código';
      btn.setAttribute('aria-label','Copiar código');
      btn.innerHTML = '<i class="fa-regular fa-clipboard"></i>';

      header.append(label, btn);
      block.insertBefore(header, block.firstChild);

      const copyText = () => (code ? code.innerText : '');
      btn.addEventListener('click', async () => {
        const text = copyText();
        try {
          if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(text);
          } else {
            const ta = document.createElement('textarea');
            ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
          }
          const icon = btn.querySelector('i');
          if (icon) { icon.classList.remove('fa-regular','fa-clipboard'); icon.classList.add('fa-solid','fa-check'); }
          btn.classList.add('copied');
          setTimeout(() => { if (icon) { icon.classList.remove('fa-solid','fa-check'); icon.classList.add('fa-regular','fa-clipboard'); } btn.classList.remove('copied'); }, 1200);
        } catch (_) {}
      });
    });
  })();
(function(){
  function qs(sel, root=document){ return root.querySelector(sel); }
  function on(el, ev, fn){ el && el.addEventListener(ev, fn, {passive:true}); }

  function openMenu(sidebar, content, button){
    sidebar?.classList.add('active');
    content?.classList.add('active');
    if (button) button.setAttribute('aria-expanded', 'true');
    document.documentElement.style.overflow = 'hidden';
  }
  function closeMenu(sidebar, content, button){
    sidebar?.classList.remove('active');
    content?.classList.remove('active');
    if (button) button.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
  }

  function initMobileMenu(){
    const btn = qs('.menu-icon');
    const sidebar = qs('.sidebar');
    const content = qs('.sidebar-content');
    if (!btn || !sidebar || !content) return;

    btn.setAttribute('role', 'button');
    btn.setAttribute('tabindex', '0');
    btn.setAttribute('aria-label', 'Abrir menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'sidebar-content');
    content.id = content.id || 'sidebar-content';

    const toggle = (e)=>{
      e?.stopPropagation?.();
      const isOpen = sidebar.classList.contains('active');
      isOpen ? closeMenu(sidebar, content, btn) : openMenu(sidebar, content, btn);
    };

    on(btn, 'click', toggle);
    on(btn, 'keydown', (e)=>{ if(e.key==='Enter' || e.key===' ') { e.preventDefault(); toggle(e);} });

    // Clique fora fecha
    on(document, 'click', (e)=>{
      if (!sidebar.classList.contains('active')) return;
      if (content.contains(e.target) || e.target === btn) return;
      closeMenu(sidebar, content, btn);
    });

    // Escape fecha
    on(document, 'keydown', (e)=>{ if(e.key==='Escape') closeMenu(sidebar, content, btn); });

    // Fechar ao mudar para landscape
    const mq = window.matchMedia('(orientation: landscape)');
    const onChange = ()=>{ if (mq.matches) closeMenu(sidebar, content, btn); };
    if (mq.addEventListener) mq.addEventListener('change', onChange); else mq.addListener(onChange);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
  } else {
    initMobileMenu();
  }
})();






