import React from "react";
import Carousel from "../carousel/Carousel";
import image1 from "../../../../public/image1.jpg";

export default function ProjectGalary() {
  const images = [
    image1, // Replace with actual image paths
    image1,
    image1,
  ];

  return (
    <div
      className="flex justify-center items-center h-fit"
      style={{
        background: "linear-gradient(to bottom, #688103, #161B01)",
      }}
    >
      <Carousel images={images} />
    </div>
  );
}
