"use client";
import AddFileForm from "../components/addFileForm/AddFileForm";

const Page = () => {
  const handleFormSubmit = (formData: {
    title: string;
    description: string;
    image: File | null;
  }) => {
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <AddFileForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default Page;
