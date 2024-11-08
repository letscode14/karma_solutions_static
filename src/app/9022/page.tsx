"use client";
import AddFileForm from "../components/addFileForm/AddFileForm";

const Page = () => {
  const handleFormSubmit = (formData: {
    title: string;
    description: string;
    image: File | null;
  }) => {
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <AddFileForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default Page;
