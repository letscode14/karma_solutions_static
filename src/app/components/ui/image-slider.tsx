import { useState, useEffect } from "react";
import styles from "./css/imageSlider.module.css";

const images = [
  "/images/slide1.jpg", // Replace with your actual image paths
  "/images/slide2.jpg",
  "/images/slide3.jpg",
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`shadow-xl ${styles.sliderContainer}`}>
      {images.map((src, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            index === currentIndex ? styles.active : ""
          }`}
          style={{ backgroundImage: `url(${src})` }}
        >
          <div className={styles.overlay}>
            <h3>Our Recent Work at Kochi Kakkanad {index}</h3>
            <p>
              We recently transformed a residential property in Kochi, Kakkanad,
              with our expert landscaping and garden construction services. From
              lush garden setups to interlocking pathways, we revitalized the
              outdoor space to create a beautiful and functional environment for
              our client.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
