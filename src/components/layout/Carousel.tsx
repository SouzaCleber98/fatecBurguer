import { Carousel as BootstrapCarousel } from 'react-bootstrap';

// ---------- Types ----------
type CarouselProps = {
  images: string[];
};
//----------------------------------

function Carousel({ images }: CarouselProps) {
  return (
    <BootstrapCarousel
      className="mx-auto my-3 rounded-4 overflow-hidden shadow-lg carousel-size"
      fade
    >
      {images.map((src, index) => (
        <BootstrapCarousel.Item key={index}>
          <img
            className="d-block object-fit-cover w-100 h-100"
            src={src}
            alt={`Slide ${index + 1}`}
          />
        </BootstrapCarousel.Item>
      ))}
    </BootstrapCarousel>
  );
}

export default Carousel;
