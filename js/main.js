    // THEME SWITCHER (hidden, kept for future use)
    let currentMode = 'dark';
    let currentColor = 'violet';

    function applyTheme() {
      document.documentElement.setAttribute('data-theme', currentMode === 'dark' ? currentColor : currentColor + '-light');
      localStorage.setItem('portfolio-mode', currentMode);
      localStorage.setItem('portfolio-color', currentColor);
    }

    function setMode(mode) { currentMode = mode; applyTheme(); }
    function setColor(color) { currentColor = color.replace('-light', ''); applyTheme(); }

    (function () {
      currentMode = localStorage.getItem('portfolio-mode') || 'dark';
      currentColor = localStorage.getItem('portfolio-color') || 'violet';
      applyTheme();
    })();


    // SCROLL PROGRESS
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      document.getElementById('progressBar').style.width = (scroll / total * 100) + '%';

      // Nav sticky
      document.getElementById('nav').classList.toggle('scrolled', scroll > 40);
    });

    // REVEAL ON SCROLL
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));

    // HERO ANIMATIONS ON LOAD
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => document.getElementById('heroTag').classList.add('visible'), 100);
      setTimeout(() => document.getElementById('heroName').classList.add('visible'), 300);
      setTimeout(() => document.getElementById('heroMeta').classList.add('visible'), 700);
      setTimeout(() => document.getElementById('heroActions').classList.add('visible'), 900);
      setTimeout(() => document.getElementById('heroScroll').classList.add('visible'), 1100);
    });
