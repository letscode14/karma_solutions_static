import React from "react";
import Carousel from "../carousel/Carousel";
import image1 from "../../../../public/image1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function ProjectGalary() {
  const router = useRouter();

  const images = [
    image1, // Replace with actual image paths
    image1,
    image1,
  ];

  return (
    <div
      className=" h-fit 3xl:px-28 2xl:px-20 xl:px-16 lg:px-10 lg:block 
      md:px-12 
      sm:px-8 
      xs:px-4  w-full"
      style={{
        background: "linear-gradient(to bottom, #688103, #161B01)",
      }}
    >
      <div className=" pt-4">
        <h2 className="text-center text-white font-bold xl:text-3xl xs:text-xl md:text-2xl ">
          PROJECT GALLERY
        </h2>
        <p className="text-center text-white italic ">
          {"Exceptional Craftsmanship"}
        </p>
      </div>
      <div className="xl:flex lg:block">
        <Carousel images={images} />
        <div className="text-white xl:w-[70%] 2xl:w-[60%] lg:w-full xl:mb-0 xs:pb-5 pt-6">
          <div className=" text-white text-4xl ">
            Our Landscaping Creations: Beauty in Every Detail
          </div>
          <div className="mt-3 text-lg tracking-wider">
            Our team of expert landscapers combines creativity with precision to
            design landscapes that reflect your vision, whether it's for a
            residential garden, a resort, or a commercial space. With a keen eye
            for detail and a passion for nature, we provide innovative
            landscaping solutions that include garden design, tree trimming,
            lawn maintenance, irrigation systems, and much more. Browse through
            our portfolio to see the magic we bring to every project, creating
            inviting environments that leave a lasting impression.
          </div>
          <div
            onClick={() => router.push("/image-gallery")}
            className="uppercase text-lg mt-4  
          w-fit hover:text-white font-normal cursor-pointer text-white  hover:bg-secText hover:px-5 
          py-1 rounded-full transition-all duration-300"
          >
            view All work <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
}
