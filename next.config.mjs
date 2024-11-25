/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "img.freepik.com",
      "cdn.pixabay.com",
      "firebasestorage.googleapis.com",
    ], // Replace 'example.com' with the domain of your image URL
  },
};

export default nextConfig;
