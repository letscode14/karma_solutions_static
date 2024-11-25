"use client";
import Image from "next/image";
import { Loading2 } from "../loading/Loading";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase/firebase-config";

const ImageGallery = () => {
  const [images, setImages] = useState<string[]>([]);

  const fetchImages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "karmaWorks"));
      const fetchedImages: string[] = [];

      querySnapshot.forEach((doc) => {
        console.log(doc.data().url);

        const imageUrl = doc.data().url;
        if (imageUrl) {
          fetchedImages.push(imageUrl);
        }
      });

      // Limit to 8 images
      setImages(fetchedImages);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <>
      {images.length > 0 ? (
        <div className="lg:p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md group"
            >
              <div className="relative w-full pb-[75%] md:pb-[56.25%] lg:pb-[66.66%]">
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  layout="fill" // Use layout="fill" to make the image responsive and cover the area
                  objectFit="cover" // Ensures the image covers the container without distortion
                  className="transition-transform duration-300 group-hover:scale-110 rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <Loading2 />
        </div>
      )}
    </>
  );
};

export default ImageGallery;
