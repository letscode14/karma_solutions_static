"use client";
import React, { ChangeEvent, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../../firebase/firebase-config";
import Image from "next/image";
import { addDoc, collection } from "firebase/firestore";
import { title } from "process";
import { Loading2 } from "../loading/Loading";

interface PreviewImage {
  file: File;
  url: string;
}

const UploadPage: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<PreviewImage[]>([]);
  const [loading, setLoading] = useState(false);

  // Handle file selection
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newFiles = Array.from(files);
    const newPreviews = newFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setImages((prevImages) => [...prevImages, ...newFiles]);
    setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  // Remove a specific image
  const removeImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setPreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
  };

  // Upload images to Firebase Storage
  const handleUpload = async () => {
    try {
      if (!images || images.length < 1) {
        alert("Please select an image");
        return;
      }
      const uploadedUrls: string[] = [];
      setLoading(true);
      for (const image of images) {
        const storageRef = ref(storage, `/images/${image.name}`);
        await uploadBytes(storageRef, image);
        const downloadUrl = await getDownloadURL(storageRef);
        uploadedUrls.push(downloadUrl);

        await addDoc(collection(db, "karmaWorks"), {
          url: downloadUrl,
          createdAt: new Date(),
        });
      }
      setImages([]);
      setPreviews([]);
      alert("Images uploaded successfully!");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error uploading images:", error);
      alert("Failed to upload images.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg mt-10">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Upload Images
      </h1>

      {/* File input */}
      <div className="flex justify-center mb-6">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="py-2 px-4 bg-gray-100 border-2 border-gray-300 rounded-md text-gray-800 cursor-pointer hover:bg-gray-200 focus:outline-none"
        />
      </div>

      {/* Image Previews */}
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        {previews.map((preview, index) => (
          <div
            key={index}
            className="relative w-36 h-36 overflow-hidden rounded-md shadow-md border-2 border-gray-200"
          >
            <Image
              src={preview.url}
              alt="landscaping services and security services in Kerala"
              width={80}
              height={80}
              className="mt-4 w-full h-48 object-cover rounded-lg"
            />
            <button
              onClick={() => removeImage(index)}
              className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 cursor-pointer hover:bg-red-700"
            >
              X
            </button>
          </div>
        ))}
      </div>

      {/* Upload Button */}
      <div className="text-center">
        <button
          onClick={handleUpload}
          className="px-6 min-w-40 py-2 h-9 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition"
        >
          {loading ? <Loading2 /> : "Add Photos"}
        </button>
      </div>
    </div>
  );
};

export default UploadPage;
