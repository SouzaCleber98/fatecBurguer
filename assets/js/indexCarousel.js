window.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
    const items = Array.from(carousel.children);
    const itemCount = items.length;

    if (itemCount === 0) return;

    // 1. Clonar items
    const cloneStart = items.map(item => item.cloneNode(true));
    const cloneEnd = items.map(item => item.cloneNode(true));

    cloneStart.forEach(clone => carousel.insertBefore(clone, carousel.firstChild));
    cloneEnd.forEach(clone => carousel.appendChild(clone));

    const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(carousel).gap);
    const startScroll = itemWidth * itemCount;

    // 2. Set scroll inicial no carrossel “original”
    carousel.scrollLeft = startScroll;

    // 3. Drag-to-scroll
    let isDown = false;
    let startX, scrollLeft, moved;
    const dragSpeed = 1.2;

    const preventSelect = (on) => {
      document.body.style.userSelect = on ? 'none' : '';
      document.body.style.webkitUserSelect = on ? 'none' : '';
    };

    carousel.addEventListener('mousedown', e => {
      if (e.button !== 0) return;
      isDown = true;
      moved = false;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
      carousel.classList.add('is-dragging');
      preventSelect(true);
      carousel.style.cursor = 'grabbing';
    });

    window.addEventListener('mouseup', () => {
      if (!isDown) return;
      isDown = false;
      carousel.classList.remove('is-dragging');
      preventSelect(false);
      carousel.style.cursor = '';
      setTimeout(() => moved = false, 50);
    });

    carousel.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * dragSpeed;
      if (Math.abs(walk) > 2) moved = true;
      carousel.scrollLeft = scrollLeft - walk;
    });

    carousel.addEventListener('click', e => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);

    // 4. Touch
    carousel.addEventListener('touchstart', e => {
      moved = false;
      isDown = true;
      startX = e.touches[0].pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
      carousel.classList.add('is-dragging');
    }, { passive: true });

    carousel.addEventListener('touchmove', e => {
      if (!isDown) return;
      const x = e.touches[0].pageX - carousel.offsetLeft;
      const walk = (x - startX) * (dragSpeed * 0.9);
      if (Math.abs(walk) > 2) moved = true;
      carousel.scrollLeft = scrollLeft - walk;
    }, { passive: true });

    carousel.addEventListener('touchend', () => {
      isDown = false;
      carousel.classList.remove('is-dragging');
      setTimeout(() => moved = false, 50);
    });

    // 5. Scroll infinito
    carousel.addEventListener('scroll', () => {
      const totalWidth = itemWidth * itemCount;

      if (carousel.scrollLeft <= itemWidth * 0.5) {
        // chegou no começo dos clones → teleporta para original
        carousel.scrollLeft += totalWidth;
      } else if (carousel.scrollLeft >= totalWidth * 2 + itemWidth * 0.5) {
        // chegou no final dos clones → teleporta para original
        carousel.scrollLeft -= totalWidth;
      }
    });

  });
});
