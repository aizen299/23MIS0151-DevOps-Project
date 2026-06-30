// ABC Technologies — shared site behavior

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }

  // Mark active nav link
  const here = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === here) a.classList.add('active');
  });

  // Contact form — static demo submit
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = document.querySelector('.form-note.success');
      form.reset();
      if (note) {
        note.style.display = 'block';
        setTimeout(() => (note.style.display = 'none'), 5000);
      }
    });
  }

  // Gallery lightbox
  const tiles = document.querySelectorAll('.gallery-tile');
  const lightbox = document.getElementById('lightbox');
  if (tiles.length && lightbox) {
    const lbContent = lightbox.querySelector('.lightbox-inner');
    tiles.forEach(tile => {
      tile.addEventListener('click', () => {
        const svgHTML = tile.querySelector('svg').outerHTML;
        const caption = tile.querySelector('.gallery-cap')?.textContent || '';
        lbContent.innerHTML = svgHTML + `<div class="lightbox-body"><h3>${caption}</h3></div>`;
        lightbox.classList.add('open');
      });
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        lightbox.classList.remove('open');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') lightbox.classList.remove('open');
    });
  }
});
