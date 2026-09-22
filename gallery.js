document.addEventListener('DOMContentLoaded', function () {
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><img alt="">';
  document.body.appendChild(overlay);
  var img = overlay.querySelector('img');

  document.querySelectorAll('.gallery-item img').forEach(function (el) {
    el.addEventListener('click', function () {
      img.src = el.getAttribute('src');
      img.alt = el.getAttribute('alt') || '';
      overlay.classList.add('open');
    });
  });

  function closeLightbox() {
    overlay.classList.remove('open');
    img.src = '';
  }
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeLightbox();
  });
  overlay.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
});
