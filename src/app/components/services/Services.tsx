import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import lawnIcon from "../../../../public/icons/gardener_9647215.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faShieldHalved,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="relative lg:h-[650px] md:h-[930px] xs:h-[1810px] z-20 flex justify-center">
      <div
        ref={sectionRef}
        className={`${
          isVisible ? "gap-0 opacity-100" : "gap-24 opacity-0"
        } grid absolute top-[-30px] lg:grid-cols-3 md:grid-cols-2 shadow-xl max-w-7xl transition-all duration-1000 ease-in-out`}
      >
        <div
          className={`bg-white h-[300px] p-8 flex flex-col items-center justify-center text-center shadow-md transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          } transition-all duration-1000 ease-in-out`}
        >
          <Image
            alt="Lawn Service landscaping services and security services in Kerala"
            src={lawnIcon}
            className="w-16"
            priority // Faster load for primary icon image
          />
          <h3 className="text-2xl font-semibold mb-2">Lawn Service</h3>
          <p className="text-gray-600">
            We are experts in trimming and mowing, providing professional and
            precise landscaping services to maintain and enhance gardens and
            lawns efficiently.
          </p>
        </div>

        {/* Use Image component and style the div */}
        <div
          className={`relative h-[300px] bg-center bg-cover p-8 flex flex-col items-center justify-center text-center shadow-md text-white transition-all duration-1000 ease-in-out transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <Image
            src="/image1.jpg"
            alt="Landscaping Service  landscaping services and security services in Kerala"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            className="rounded-md"
          />
          <div className="absolute inset-0 bg-black opacity-70 flex items-center"></div>
          <h3 className="text-2xl font-semibold mb-2 z-10">
            All types of Landscaping and Designing
          </h3>
          <p className="z-10">
            We provide complete solutions for outdoor landscaping and design to
            enhance the beauty of any space.
          </p>
        </div>

        {/* Fertilization Service */}
        <div
          className={`bg-green-500 h-[300px] p-8 flex flex-col items-center justify-center text-center text-white shadow-md transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          } transition-all duration-1000 ease-in-out`}
        >
          <FontAwesomeIcon className="h-12 mb-1" icon={faLeaf} />
          <h3 className="text-2xl font-semibold mb-2">
            Fertilization and Weed Control
          </h3>
          <p>
            Encouraging healthy and vibrant landscapes by applying the needed
            fertilizers for growth and controlling unwanted plants.
          </p>
        </div>

        {/* Maintenance Service */}
        <div
          className={`relative h-[300px] bg-center bg-cover p-8 flex flex-col items-center justify-center text-center text-white shadow-md transition-all duration-1000 ease-in-out transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <Image
            src="/maintenance.jpg"
            alt="Maintenance Service landscaping services and security services in Kerala"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            className="rounded-md"
          />
          <div className="absolute inset-0 bg-black opacity-70 flex items-center"></div>
          <FontAwesomeIcon className="h-12 mb-1 z-10" icon={faWrench} />
          <h3 className="text-2xl font-semibold mb-2 z-10">
            Maintenance & Repair
          </h3>
          <p className="z-10">
            Maintenance and repair services for irrigation systems, ensuring
            efficient water management for your landscape.
          </p>
        </div>

        {/* Security Service */}
        <div
          className={`bg-gray-800 h-[300px] p-8 flex flex-col items-center justify-center text-center text-white shadow-md transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          } transition-all duration-1000 ease-in-out`}
        >
          <h3 className="text-2xl font-semibold mb-2 z-10">Best in Quality</h3>
          <p>
            we pride ourselves on delivering the highest quality services to
            meet and exceed your expectations. With over 20 years of experience,
            we specialize in landscaping and security solutions tailored to your
            unique needs
          </p>
        </div>

        {/* Final Security Personnel card with a background image */}
        <div
          className={`relative h-[300px] bg-center bg-cover p-8 flex flex-col items-center justify-center text-center text-white shadow-md transition-all duration-1000 ease-in-out transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <Image
            src="/1718342817.webp"
            alt="Security Service landscaping services and security services in Kerala"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            className="rounded-md"
          />
          <div className="absolute inset-0 bg-black opacity-70 flex items-center"></div>
          <FontAwesomeIcon className="z-10 h-12 mb-1" icon={faShieldHalved} />
          <h3 className="text-2xl font-semibold mb-2 z-10">
            Security Personnel
          </h3>
          <p className="z-10">
            Provide professional security services, offering trained personnel
            to ensure safety and protection for residential, commercial, and
            event settings.
          </p>
        </div>
      </div>
    </div>
  );
}
