import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gardenCutterImg from "../../../../public/gardener-with-weedwacker-cutting-grass-garden.jpg";
import repairImage from "../../../../public/man-cutting-grass-with-lawn-mover-back-yard-male-black-apron-guy-repairs.jpg";
import securityImg from "../../../../public/1718342817.webp";

export default function About() {
  const [isVisible, setIsVisible] = useState({
    section1: false,
    section2: false,
    section3: false,
  });
  const sectionRefs = {
    section1: useRef<HTMLDivElement | null>(null),
    section2: useRef<HTMLDivElement | null>(null),
    section3: useRef<HTMLDivElement | null>(null),
  };

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const sectionName = entry.target.getAttribute("data-section");
        if (entry.isIntersecting && sectionName) {
          setIsVisible((prev) => ({ ...prev, [sectionName]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        backgroundImage: "url('/fresh-park-nature-beautiful-backgrounds.jpg')",
      }}
      className="h-[70%] flex justify-end bg-blue-400 relative bg-cover bg-center"
    >
      <div className="w-[35%] pe-12">
        <div className="w-full mt-3 flex justify-end">
          <Image
            className="transition-opacity duration-700"
            alt="Gardener with weedwacker"
            src={gardenCutterImg}
            height={200}
            priority
            placeholder="blur"
          />
        </div>
        <div className="w-full mt-3 flex justify-start">
          <Image
            className="transition-opacity duration-700"
            alt="Security Personnel"
            src={securityImg}
            height={200}
            priority
            placeholder="blur"
          />
        </div>
        <div className="w-full mt-3 flex justify-end">
          <Image
            className="transition-opacity duration-700"
            alt="Repairman with lawn mower"
            src={repairImage}
            height={200}
            priority
            placeholder="blur"
          />
        </div>
      </div>
      <div
        className="absolute inset-0 flex px-32"
        style={{
          background:
            "linear-gradient(to right, rgba(104, 129, 3, 1), rgba(104, 129, 3, 1) 50%, rgba(104, 129, 3, 0.7))",
        }}
      >
        <div className="z-10 text-white w-full px-6 font-bold grid grid-flow-col justify-stretch">
          <div className="w-[1px] h-[20%] bg-white relative flex flex-col justify-between items-center">
            <div
              className="flex top-[100%] absolute left-[-24px] w-[700px]"
              data-section="section1"
              ref={sectionRefs.section1}
            >
              <div className="border w-12 h-12 flex items-center justify-center rounded-full">
                <FontAwesomeIcon icon={faQuestion} className="text-[22px]" />
              </div>
              <div
                className={`ms-4 transition-all duration-1000 ${
                  isVisible.section1
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="text-3xl font-light uppercase">Who Are We?</div>
                <div className="text-3xl uppercase w-[600px]">
                  CRAFTING BEAUTIFUL LANDSCAPES & ENSURING SECURE SPACES - YOUR
                  TRUSTED PARTNER IN PROPERTY MANAGEMENT
                </div>
                <div className="opacity-90 mt-1 font-serif w-[600px] text-lg font-light">
                  At our company, we specialize in creating and maintaining
                  beautiful, secure environments for homes, resorts, and
                  commercial properties. Our landscaping experts transform
                  outdoor areas into vibrant and inviting landscapes, offering
                  services such as garden design, tree trimming, lawn
                  maintenance, and sustainable planting solutions.
                </div>
              </div>
            </div>
          </div>

          <div className="w-[1px] h-[60%] bg-white relative flex flex-col justify-between items-center">
            <div
              className="flex top-[25%] absolute left-[-24px] w-[700px]"
              data-section="section2"
              ref={sectionRefs.section2}
            >
              <div className="bg-white border w-12 h-12 flex items-center justify-center rounded-full">
                <FontAwesomeIcon
                  icon={faBuilding}
                  className="text-[22px] text-black"
                />
              </div>
              <div
                className={`ms-4 transition-all duration-1000 ${
                  isVisible.section2
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="text-3xl font-light uppercase">Company</div>
                <div className="text-3xl uppercase w-[600px]">History</div>
                <div className="opacity-90 mt-1 font-serif w-[600px] text-lg font-light">
                  With over 35 years of experience, we specialize in
                  constructing gardens, landscaping, and maintenance services.
                  We offer tree cutting, interlocking, and more, transforming
                  outdoor spaces with precision. Serving 500+ satisfied
                  customers across India, our expertise ensures exceptional
                  results. Trust us to enhance the beauty and functionality of
                  your environment!
                </div>
              </div>
            </div>

            <div
              className="flex top-[100%] absolute left-[-24px] w-[700px]"
              data-section="section3"
              ref={sectionRefs.section3}
            >
              <div className="bg-white border w-12 h-12 flex items-center justify-center rounded-full">
                <FontAwesomeIcon
                  icon={faConnectdevelop}
                  className="text-[22px] text-black"
                />
              </div>
              <div
                className={`ms-4 transition-all duration-1000 ${
                  isVisible.section3
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="text-3xl uppercase w-[600px]">
                  Specialization
                </div>
                <div className="opacity-90 mt-1 font-serif w-[600px] text-lg font-light">
                  We specialize in constructing beautiful gardens and
                  landscaping solutions. Our services include expert maintenance
                  and tree cutting. We also offer interlocking services for
                  enhanced outdoor appeal. Transform your outdoor space with our
                  dedicated team!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
