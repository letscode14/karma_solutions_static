import React from "react";
import ImageGallery from "../components/imageGallary/ImageGallary";
import Logo from "../../../public/11zon_cropped.png";
import Image from "next/image";

export default function page() {
  return (
    <div className="xs:p-1 lg:p-3 xl:p-4">
      <div className="flex items-center mb-3">
        <Image className="me-3 md:w-16 sm:w-[60px] xs:w-12" alt="landscaping services and security services in Kerala" src={Logo} />
        <div className="font-bold xs:text-xl sm:text-2xl md:text-3xl lg:text-2xl 3xl:text-4xl 2xl:text-3xl xl:text-3l">
          Karma <span className="text-secText">Solutions</span>
        </div>
      </div>
      <ImageGallery />
    </div>
  );
}
