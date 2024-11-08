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
    <div className="  relative h-[650px] flex justify-center">
      <div
        ref={sectionRef}
        className={`${
          isVisible ? "gap-0 opacity-100" : "gap-24 opacity-30"
        } grid absolute top-[-30px] grid-cols-3 shadow-xl max-w-7xl  transition-all duration-1000`}
      >
        <div className="bg-white h-[300px] p-8 flex flex-col items-center justify-center text-center shadow-md">
          <Image alt="" src={lawnIcon} className="w-16" />
          <h3 className="text-2xl font-semibold mb-2">Lawn Service</h3>
          <p className="text-gray-600">
            We are experts in trimming and mowing, providing professional and
            precise landscaping services to maintain and enhance gardens and
            lawns efficiently.
          </p>
        </div>

        <div
          style={{
            backgroundImage: "url('/image1.jpg')",
          }}
          className=" h-[300px] bg-cover bg-center relative p-8 flex flex-col items-center justify-center text-center text-white shadow-md"
        >
          <div className="absolute inset-0 bg-black opacity-70 flex items-center "></div>
          <h3 className="text-2xl font-semibold mb-2 z-10">
            All types of Landscaping and Designing
          </h3>
          <p className="z-10">
            We provide complete solutions for outdoor landscaping and design to
            enhance the beauty of any space.
          </p>
        </div>

        <div className="bg-green-500 h-[300px] bg-[#9ABC2B] p-8 flex flex-col items-center justify-center text-center text-white shadow-md">
          <FontAwesomeIcon className="h-12 mb-1" icon={faLeaf} />
          <h3 className="text-2xl font-semibold mb-2">
            Fertilization and Weed Control
          </h3>
          <p>
            Encouraging healthy and vibrant landscapes by applying the needed
            fertilizers for growth and controlling unwanted plants.
          </p>
        </div>

        <div
          style={{
            backgroundImage: "url('/maintenance.jpg')",
          }}
          className=" h-[300px] bg-cover bg-center relative p-8 flex flex-col items-center justify-center text-center text-white shadow-md"
        >
          <div className="absolute inset-0 bg-black opacity-70 flex items-center "></div>
          <FontAwesomeIcon className="h-12 mb-1 z-10" icon={faWrench} />
          <h3 className="text-2xl font-semibold mb-2 z-10">
            Maintenance & Repair
          </h3>
          <p className="z-10">
            Maintenance and repair services for irrigation systems, ensuring
            efficient water management for your landscape.
          </p>
        </div>

        <div className="bg-gray-800 h-[300px] p-8 flex flex-col items-center justify-center text-center text-white shadow-md">
          <h3 className="text-xl font-semibold mb-2">Security Personnel</h3>
          <p>
            Provide professional security services, offering trained personnel
            to ensure safety and protection for residential, commercial, and
            event settings.
          </p>
        </div>
        <div
          style={{
            backgroundImage: "url('/1718342817.webp')",
          }}
          className=" h-[300px] bg-cover bg-center relative p-8 flex flex-col items-center justify-center text-center text-white shadow-md"
        >
          <div className="absolute inset-0 bg-black opacity-70 flex items-center "></div>
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
