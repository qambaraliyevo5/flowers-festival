import { useState, useEffect } from "react";
import { images } from "../assets/js/caruselData";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Avtomatik aylanish
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // har 3 sekundda
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  // Oldingi rasmga o'tish
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Keyingi rasmga o'tish
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Dot orqali rasmga o'tish
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="my-10">
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Asosiy carousel container */}
        <div className="relative h-96 overflow-hidden rounded-lg">
          {/* Rasmlar wrapper */}
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full h-full flex-shrink-0">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Chap/o'ng tugmalar */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            onClick={nextSlide}
          >
            &#10095;
          </button>

          {/* Dots navigatsiyasi */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* Play/Pause tugmasi */}
          <button
            className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm hover:bg-black/70 transition-colors"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          >
            {isAutoPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
