"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../../../firebase/firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { Loading2 } from "../loading/Loading";

interface AddFileFormProps {
  onSubmit: (formData: {
    title: string;
    description: string;
    image: File | null;
  }) => void;
}

const AddFileForm: React.FC<AddFileFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setImage(file);
    setPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();
    if (!image) {
      alert("Please select an image");
      return;
    }

    try {
      // Step 1: Upload the image to Firebase Storage
      const imageRef = ref(storage, `/images/${uuidv4()}_${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      // Step 2: Store metadata in Firestore
      await addDoc(collection(db, "worksCollections"), {
        title,
        description,
        imageUrl,
        createdAt: new Date(),
      });

      // Call the onSubmit prop with the form data if needed

      setTitle("");
      setDescription("");
      setImage(null);
      setPreview(null);

      alert("File added successfully!");
      setLoading(false);

      onSubmit({ title, description, image });
    } catch (error) {
      setLoading(false);

      console.error("Error uploading file:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New File</h2>

      {/* Image Upload */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {preview && (
          <Image
            src={preview}
            alt="landscaping services and security services in Kerala"
            width={80}
            height={80}
            className="mt-4 w-full h-48 object-cover rounded-lg"
          />
        )}
      </div>

      {/* Title Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          required
        />
      </div>

      {/* Description Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          rows={4}
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 h-9 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
      >
        {loading ? <Loading2 /> : "Add File"}
      </button>
    </form>
  );
};

export default AddFileForm;
