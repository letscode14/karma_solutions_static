"use client";
import Image from "next/image";
import React from "react";
import { useMenu } from "../context/MenuContext";
import { Loading2 } from "../components/loading/Loading";

const ImageViewer = () => {
  const { imgUrl } = useMenu();
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="relative">
        {/* Image */}
        {imgUrl ? (
          <Image
            src={imgUrl}
            alt={"hey"}
            className="max-w-full max-h-screen rounded-lg shadow-lg"
          />
        ) : (
          <Loading2 />
        )}

        {/* Close Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-4 right-4 bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-black/90"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ImageViewer;
