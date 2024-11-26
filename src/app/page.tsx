"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home/Home";
import ProjectGalary from "./components/ProjectGalary/ProjectGalary";
import Services from "./components/services/Services";
import Services2 from "./components/services/Services2";
import Testimonial from "./components/testimonials/Testimonial";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { MenuProvider } from "./context/MenuContext";
import DropdownMenu from "./components/dropdown/dropDown";
import ImageViewer from "./viewimage/page";

export default function Home() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show arrow if scrolled down beyond 100px
      if (window.scrollY > 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className=" w-screen h-screen">
      {showArrow && (
        <div
          onClick={scrollToTop}
          className="fixed xs:hidden bottom-12 right-12 md:flex items-center justify-center w-12 h-12 bg-secText z-40 text-white rounded-full shadow-lg animate-bounce cursor-pointer"
          style={{
            animation: "pulse-bounce 2s infinite",
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      )}
      <DropdownMenu />
      <section id="home">
        <HomePage />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section>
        <Services2 />
      </section>
      <section id="about">
        <Testimonial />
      </section>
      <section id="works">
        <ProjectGalary />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
