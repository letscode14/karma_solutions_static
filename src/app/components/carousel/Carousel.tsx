import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "../../../../firebase/firebase-config";

interface CarouselProps {
  images: StaticImageData[];
}

const Carousel: React.FC<CarouselProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  const fetchImages = async () => {
    try {
      const q = query(collection(db, "karmaWorks"), limit(15));

      const querySnapshot = await getDocs(q);
      const fetchedImages: string[] = [];

      querySnapshot.forEach((doc) => {
        console.log(doc.data().url);

        const imageUrl = doc.data().url;
        if (imageUrl) {
          fetchedImages.push(imageUrl);
        }
      });

      // Limit to 8 images
      setImages(fetchedImages.slice(0, 8));
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

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
    <div className="relative w-full max-w-6xl h-auto  overflow-hidden  from-green-700 to-green-600 lg:p-6  xs:mt-4 rounded-lg  ">
      {/* Carousel Images */}
      <div className="relative flex items-center justify-center xl:h-full md:h-[340px] xs:h-[300px] 2xl:h-[500px]">
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
        {images.slice(0, 3).map((_, index) => (
          <button
            key={index}
            className={`lg:w-3 lg:h-3 xs:w-2 xs:h-2 rounded-full ${
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
