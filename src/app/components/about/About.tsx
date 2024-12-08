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
    section4: false,
    section5: false,
    section6: false,
    section7: false,
    section8: false,
  });
  const sectionRefs = {
    section1: useRef<HTMLDivElement | null>(null),
    section2: useRef<HTMLDivElement | null>(null),
    section3: useRef<HTMLDivElement | null>(null),
    section4: useRef<HTMLDivElement | null>(null),
    section5: useRef<HTMLDivElement | null>(null),
    section6: useRef<HTMLDivElement | null>(null),
    section7: useRef<HTMLDivElement | null>(null),
    section8: useRef<HTMLDivElement | null>(null),
  };

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const sectionName = entry.target.getAttribute("data-section");
        console.log(sectionName);

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
    <div className="relative xl:h-[600px]   lg:h-[780px] md:h-[780px] sm:h-[700px] xs:h-[900px] flex justify-end bg-blue-400 overflow-hidden">
      <Image
        src="https://res.cloudinary.com/dcoy7olo9/image/upload/v1731139074/fresh-park-nature-beautiful-backgrounds_1_vie9yx.jpg"
        alt="landscaping services and security services in Kerala"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />
      <div className="  md:pe-12">
        <div className="w-full mt-3 flex justify-start">
          <Image
            className="transition-opacity duration-700 z-10"
            alt="landscaping services and security services in kochi"
            src={securityImg}
            height={200}
            priority
            placeholder="blur"
          />
        </div>
        <div className="w-full mt-3 max-w-60   flex justify-end">
          <Image
            className="transition opacity  duration-700 z-10"
            alt="Gardening services and security services in Kerala"
            src={gardenCutterImg}
            priority
            placeholder="blur"
          />
        </div>

        <div className="w-full mt-3 flex justify-end">
          <Image
            className="transition-opacity duration-700  z-10"
            alt="landscaping services and security services in Kerala"
            src={repairImage}
            height={200}
            priority
            placeholder="blur"
          />
        </div>
      </div>
      <div
        className="absolute inset-0 flex z-20   3xl:px-28 2xl:px-20 xl:px-16 lg:px-16 
        md:px-12 
        sm:px-4
        
        "
        style={{
          background:
            "linear-gradient(to right, rgba(104, 129, 3, 1), rgba(104, 129, 3, 1) 50%, rgba(104, 129, 3, 0.7))",
        }}
      >
        {/**************************** */}
        <div className="text-white font-bold sm:hidden px-2  py-10 grid gap-y-3">
          <div
            className="  sm:left-[-24px] xs:left-[-18px]  w-fit "
            data-section="section6"
            ref={sectionRefs.section6}
          >
            <div className="text-center mb-1 w-full flex justify-center">
              <div className="border  sm:w-12 sm:h-12 xs:h-9 xs:w-9 bg-[#688103] flex  items-center justify-center rounded-full">
                <FontAwesomeIcon
                  icon={faQuestion}
                  className="sm:text-[22px] xs:text-[18px]"
                />
              </div>
            </div>

            <div
              className={`3xl:w-[600px] 2xl:w-[520px] xl:w-[430px] lg:w-[700px] md:w-[500px] sm:w-[400px] xs:w-full sm:ms-4  transition-all duration-1000 ${
                isVisible.section6
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className=" 3xl:text-3xl 2xl:text-3xl xl:text-2xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg  font-light uppercase">
                Who Are We?
              </div>
              <div className="3x:text-3xl 2xl:text-3xl xl:text-2xl lg:text-3xl   md:text-2xl sm:text-xl xs:text-lg uppercase ">
                CRAFTING BEAUTIFUL LANDSCAPES & ENSURING SECURE SPACES - YOUR
                TRUSTED PARTNER IN PROPERTY MANAGEMENT
              </div>
              <div className="opacity-90 mt-1   font-serif 3xl:text-lg 2xl:text-lg xl:text-base lg:text-lg md:text-base sm:text-sm xs:text-sm font-light">
                At our company, we specialize in creating and maintaining
                beautiful, secure environments for homes, resorts, and
                commercial properties. Our landscaping experts transform outdoor
                areas into vibrant and inviting landscapes, offering services
                such as garden design, tree trimming, lawn maintenance, and
                sustainable planting solutions.
              </div>
            </div>
          </div>
          <div
            className="   w-fit"
            data-section="section7"
            ref={sectionRefs.section7}
          >
            <div className="text-center mb-1 w-full flex justify-center">
              <div className="bg-white border sm:w-12 sm:h-12 xs:h-9 xs:w-9 flex items-center justify-center rounded-full">
                <FontAwesomeIcon
                  icon={faBuilding}
                  className="sm:text-[22px] xs:text-[18px] text-black"
                />
              </div>
            </div>
            <div
              className={`3xl:w-[600px] 2xl:w-[520px] xl:w-[430px] lg:w-[700px] md:w-[500px] sm:w-[400px] xs:w-full sm:ms-4  transition-all duration-1000 ${
                isVisible.section7
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="3xl:text-3xl 2xl:text-3xl xl:text-2xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg font-light uppercase">
                Company
              </div>
              <div className="3xl:text-3xl 2xl:text-3xl xl:text-2xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg uppercase ">
                History
              </div>
              <div className="opacity-90 sm:mt-1 xs:mt-0 font-serif  3xl:text-lg 2xl:text-lg xl:text-base lg:text-lg md:text-base sm:text-sm xs:text-sm font-light">
                With over 35 years of experience, we specialize in constructing
                gardens, landscaping, and maintenance services. We offer tree
                cutting, interlocking, and more, transforming outdoor spaces
                with precision. Serving 500+ satisfied customers across India,
                our expertise ensures exceptional results. Trust us to enhance
                the beauty and functionality of your environment!
              </div>
            </div>
          </div>

          <div
            className="     w-fit"
            data-section="section8"
            ref={sectionRefs.section8}
          >
            <div className="text-center mb-1 w-full flex justify-center">
              <div className="bg-white border  sm:w-12 sm:h-12 xs:h-9 xs:w-9  flex items-center justify-center rounded-full">
                <FontAwesomeIcon
                  icon={faConnectdevelop}
                  className="sm:text-[22px] xs:text-[18px] text-black"
                />
              </div>
            </div>
            <div
              className={`3xl:w-[600px] 2xl:w-[520px] xl:w-[430px] lg:w-[700px] md:w-[500px] sm:w-[400px] xs:w-full sm:ms-4  transition-all duration-1000 ${
                isVisible.section8
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="3xl:text-3xl 2xl:text-3xl xl:text-2xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg uppercase ">
                Specialization
              </div>
              <div
                className="opacity-90 sm:mt-1 xs:mt-0 font-serif  3xl:text-lg 2xl:text-lg md:text-base  xl:text-base lg:text-lg 
                sm:text-sm xs:text-sm font-light"
              >
                We specialize in constructing beautiful gardens and landscaping
                solutions. Our services include expert maintenance and tree
                cutting. We also offer interlocking services for enhanced
                outdoor appeal. Transform your outdoor space with our dedicated
                team!
              </div>
            </div>
          </div>
        </div>
        {/*************************************** */}
        <div className="xs:hidden z-10 text-white w-full px-6 font-bold sm:grid xl:grid-flow-col  justify-stretch">
          <div className="  w-[1px] xl:h-[20%] lg:h-[70%] md:h-[73%] sm:h-[73%] xs:h-[75%] bg-white relative sm:flex flex-col justify-between items-center">
            <div
              className="flex xl:top-[100%] xs:top-[5%] absolute sm:left-[-24px] xs:left-[-18px]  w-fit "
              data-section="section1"
              ref={sectionRefs.section1}
            >
              <div className="border sm:w-12 sm:h-12 xs:h-9 xs:w-9 bg-[#688103] flex items-center justify-center rounded-full">
                <FontAwesomeIcon
                  icon={faQuestion}
                  className="sm:text-[22px] xs:text-[18px]"
                />
              </div>
              <div
                className={`3xl:w-[600px] 2xl:w-[520px] xl:w-[430px] lg:w-[700px] md:w-[500px] sm:w-[400px] xs:w-[300px] sm:ms-4 xs:ms-2 transition-all duration-1000 ${
                  isVisible.section1
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="3xl:text-3xl 2xl:text-3xl xl:text-2xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg  font-light uppercase">
                  Who Are We?
                </div>
                <div className="3x:text-3xl 2xl:text-3xl xl:text-2xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg uppercase ">
                  CRAFTING BEAUTIFUL LANDSCAPES & ENSURING SECURE SPACES - YOUR
                  TRUSTED PARTNER IN PROPERTY MANAGEMENT
                </div>
                <div className="opacity-90 mt-1 font-serif 3xl:text-lg 2xl:text-lg xl:text-base lg:text-lg md:text-base sm:text-sm xs:text-sm font-light">
                  At Karma Solutions, we specialize in landscaping works and
                  security services to create and maintain safe, beautiful
                  environments for homes, resorts, and commercial properties.
                  Our services include expert garden maintenance, tree trimming,
                  lawn care, irrigation repair, and comprehensive security
                  solutions tailored to your needs.
                </div>
              </div>
            </div>
            <div
              className="xs:flex xl:hidden  md:top-[56%] md:top-[58%] sm:top-[60%] xs:top-[60%] absolute xs:left-[-18px] w-fit"
              data-section="section4"
              ref={sectionRefs.section4}
            >
              <div className="bg-white border sm:w-12 sm:h-12 xs:h-9 xs:w-9 flex items-center justify-center rounded-full">
                <FontAwesomeIcon
                  icon={faBuilding}
                  className="sm:text-[22px] xs:text-[18px] text-black"
                />
              </div>
              <div
                className={`3xl:w-[600px] 2xl:w-[520px] xl:w-[430px] lg:w-[700px] md:w-[500px] sm:w-[400px] xs:w-[300px] sm:ms-4 xs:ms-2 transition-all duration-1000 ${
                  isVisible.section4
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="3xl:text-3xl 2xl:text-3xl xl:text-2xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg font-light uppercase">
                  Company
                </div>
                <div className="3xl:text-3xl 2xl:text-3xl xl:text-2xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg uppercase ">
                  History
                </div>
                <div className="opacity-90 sm:mt-1 xs:mt-0 font-serif  3xl:text-lg 2xl:text-lg xl:text-base lg:text-lg md:text-base sm:text-sm xs:text-sm font-light">
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
              className="xs:flex xl:hidden   top-[100%] absolute sm:left-[-24px] xs:left-[-18px] w-fit"
              data-section="section5"
              ref={sectionRefs.section5}
            >
              <div className="bg-white border  sm:w-12 sm:h-12 xs:h-9 xs:w-9  flex items-center justify-center rounded-full">
                <FontAwesomeIcon
                  icon={faConnectdevelop}
                  className="sm:text-[22px] xs:text-[18px] text-black"
                />
              </div>
              <div
                className={`3xl:w-[600px] 2xl:w-[520px] xl:w-[430px] lg:w-[700px] md:w-[500px] sm:w-[400px] xs:w-[300px] sm:ms-4 xs:ms-2 transition-all duration-1000 ${
                  isVisible.section5
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="3xl:text-3xl 2xl:text-3xl xl:text-2xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg uppercase ">
                  Specialization
                </div>
                <div
                  className="opacity-90 sm:mt-1 xs:mt-0 font-serif  3xl:text-lg 2xl:text-lg md:text-base  xl:text-base lg:text-lg 
                sm:text-sm xs:text-sm font-light"
                >
                  We specialize in constructing beautiful gardens and
                  landscaping solutions. Our services include expert maintenance
                  and tree cutting. We also offer interlocking services for
                  enhanced outdoor appeal. Transform your outdoor space with our
                  dedicated team!
                </div>
              </div>
            </div>
          </div>

          <div className="w-[1px] h-[60%] lg:hidden md:hidden sm:hidden xs:hidden bg-white relative xl:flex flex-col justify-between items-center">
            <div
              className="flex top-[25%] absolute left-[-24px] w-fit"
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
                className={`3xl:w-[600px] 2xl:w-[520px] xl:w-[430px] lg:w-[700px] ms-4 transition-all duration-1000 ${
                  isVisible.section2
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="3xl:text-3xl 2xl:text-3xl xl:text-2xl font-light uppercase">
                  Company
                </div>
                <div className="3xl:text-3xl 2xl:text-3xl xl:text-2xl uppercase ">
                  History
                </div>
                <div className="opacity-90 mt-1 font-serif  3xl:text-lg 2xl:text-lg xl:text-base font-light">
                  With over 35 years of experience, we specialize in
                  Constructing Gardens, Landscaping, and maintenance services.
                  We offer tree cutting, interlocking, and more, transforming
                  outdoor spaces with precision. Serving 500+ satisfied
                  customers across India, our expertise ensures exceptional
                  results. Trust us to enhance the beauty and functionality of
                  your environment!
                </div>
              </div>
            </div>

            <div
              className="flex top-[100%] absolute left-[-24px] w-fit"
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
                className={`3xl:w-[600px] 2xl:w-[520px] xl:w-[430px] lg:w-[700px] ms-4 transition-all duration-1000 ${
                  isVisible.section3
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="3xl:text-3xl 2xl:text-3xl xl:text-2xl uppercase ">
                  Specialization
                </div>
                <div className="opacity-90 mt-1 font-serif  3xl:text-lg 2xl:text-lg xl:text-base font-light">
                  We specialize in constructing beautiful gardens and
                  Landscaping solutions. Our services include expert maintenance
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
