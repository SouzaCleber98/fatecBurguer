import { useRef, useEffect } from "react";

function Carousel({ images }) {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const items = Array.from(carousel.children);
    const itemCount = items.length;
    if (itemCount === 0) return;

    // 1. Clonar items para scroll infinito
    const cloneStart = items.map((item) => item.cloneNode(true));
    const cloneEnd = items.map((item) => item.cloneNode(true));

    cloneStart.forEach((clone) => carousel.insertBefore(clone, carousel.firstChild));
    cloneEnd.forEach((clone) => carousel.appendChild(clone));

    const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(carousel).gap || 0);
    const totalWidth = itemWidth * itemCount;

    // 2. Scroll inicial
    carousel.scrollLeft = totalWidth;

    // 3. Drag & touch
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let moved = false;
    const dragSpeed = 1.2;

    const preventSelect = (on) => {
      document.body.style.userSelect = on ? "none" : "";
      document.body.style.webkitUserSelect = on ? "none" : "";
    };

    const handleMouseDown = (e) => {
      if (e.button !== 0) return;
      isDown = true;
      moved = false;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
      carousel.classList.add("is-dragging");
      preventSelect(true);
      carousel.style.cursor = "grabbing";
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * dragSpeed;
      if (Math.abs(walk) > 2) moved = true;
      carousel.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      if (!isDown) return;
      isDown = false;
      carousel.classList.remove("is-dragging");
      preventSelect(false);
      carousel.style.cursor = "";
      setTimeout(() => (moved = false), 50);
    };

    const handleClick = (e) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // Touch
    const handleTouchStart = (e) => {
      moved = false;
      isDown = true;
      startX = e.touches[0].pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
      carousel.classList.add("is-dragging");
    };

    const handleTouchMove = (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - carousel.offsetLeft;
      const walk = (x - startX) * (dragSpeed * 0.9);
      if (Math.abs(walk) > 2) moved = true;
      carousel.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      isDown = false;
      carousel.classList.remove("is-dragging");
      setTimeout(() => (moved = false), 50);
    };

    // Scroll infinito
    const handleScroll = () => {
      if (carousel.scrollLeft <= itemWidth * 0.5) {
        carousel.scrollLeft += totalWidth;
      } else if (carousel.scrollLeft >= totalWidth * 2 + itemWidth * 0.5) {
        carousel.scrollLeft -= totalWidth;
      }
    };

    // Adiciona listeners
    carousel.addEventListener("mousedown", handleMouseDown);
    carousel.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    carousel.addEventListener("click", handleClick, true);

    carousel.addEventListener("touchstart", handleTouchStart, { passive: true });
    carousel.addEventListener("touchmove", handleTouchMove, { passive: true });
    carousel.addEventListener("touchend", handleTouchEnd);

    carousel.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      carousel.removeEventListener("mousedown", handleMouseDown);
      carousel.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      carousel.removeEventListener("click", handleClick, true);

      carousel.removeEventListener("touchstart", handleTouchStart);
      carousel.removeEventListener("touchmove", handleTouchMove);
      carousel.removeEventListener("touchend", handleTouchEnd);

      carousel.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={carouselRef} className="carousel">
      {images.map((src, index) => (
        <div key={index} className="carousel-item">
          <img src={src} alt={`Imagem ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Carousel;
