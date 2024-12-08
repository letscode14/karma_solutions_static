"use client";
import Image from "next/image";
import React from "react";
import { useMenu } from "../context/MenuContext";
import { Loading2 } from "../components/loading/Loading";

const ImageViewer = () => {
  const { imgUrl, setImageUrl } = useMenu();
  return (
    <div className="w-screen p-4 relative h-screen flex items-center justify-center bg-gray-100">
      <div>
        {/* Image */}
        {imgUrl ? (
          <Image
            src={imgUrl}
            alt="Lawn maintaince landscaping services and security services in Kerala"
            layout="intrinsic"
            width={800} // Replace with your image's width
            height={500} // Replace with your image's height
            className="rounded-lg shadow-lg"
          />
        ) : (
          <Loading2 />
        )}

        {/* Close Button */}
      </div>
      <button
        onClick={() => {
          window.history.back();
          setImageUrl("");
        }}
        className="absolute top-4 right-4 bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-black/90"
      >
        ✕
      </button>
    </div>
  );
};

export default ImageViewer;
