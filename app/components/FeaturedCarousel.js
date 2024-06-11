'use client';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function FeaturedCarousel() {
  return (
    <Carousel 
    showThumbs={true} 
    dynamicHeight={true} 
    emulateTouch={true} 
    autoPlay={true} 
    interval={5000} // 5 seconds
    infiniteLoop={true} // Ensures the carousel loops indefinitely
    stopOnHover={true} // Pauses the auto-scroll when hovered over
  >
     <div className="carousel-image-wrapper">
        <img src="/picture1.jpg" alt="Event 1" />
        <p className="legend">Event 1</p>
      </div>
      <div className="carousel-image-wrapper">
        <img src="/picture2.jpg" alt="Event 2" />
        <p className="legend">Event 2</p>
      </div>
      <div className="carousel-image-wrapper">
        <img src="/picture3.jpg" alt="Event 3" />
        <p className="legend">Event 3</p>
      </div>
    </Carousel>
  );
}
