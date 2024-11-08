import { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface CarouselProps {
  images: StaticImageData[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden  from-green-700 to-green-600 p-6 rounded-lg  ">
      <h2 className="text-center text-white font-bold text-lg mb-4">
        PROJECT GALLERY
      </h2>
      <p className="text-center text-white italic mb-6">
        {"Exceptional Craftsmanship"}
      </p>

      {/* Carousel Images */}
      <div className="relative flex items-center justify-center h-80">
        {images.map((image, index) => {
          const isActive = index === currentIndex;
          const isNext = index === (currentIndex + 1) % images.length;
          const isPrev =
            index === (currentIndex - 1 + images.length) % images.length;

          return (
            <div
              key={index}
              className={`absolute transition-transform duration-500 ease-in-out ${
                isActive
                  ? "transform scale-100 z-20"
                  : isNext
                  ? "transform scale-75 blur-sm z-10 translate-x-16 rotate-y-15"
                  : isPrev
                  ? "transform scale-75 blur-sm z-10 -translate-x-16 -rotate-y-15"
                  : "opacity-0"
              }`}
              style={{
                width: isActive ? "100%" : "80%",
                height: "100%",
                opacity: isActive ? 1 : 0.5,
              }}
            >
              <Image
                src={image}
                alt={`Project Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          );
        })}

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full hover:bg-opacity-75 z-30"
        >
          &#10094;
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full hover:bg-opacity-75 z-30"
        >
          &#10095;
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
