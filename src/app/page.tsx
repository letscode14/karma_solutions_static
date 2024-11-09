"use client";

import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home/Home";
import ProjectGalary from "./components/ProjectGalary/ProjectGalary";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonials/Testimonial";

export default function Home() {
  return (
    <div className=" w-screen h-screen">
      <section id="home">
        <HomePage />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Footer />
      </section>
      {/*<section id="about">
        <Services />
      </section>

      <section id="about">
        <Testimonial />
      </section>
      <section id="about">
        <ProjectGalary />
      </section>

      */}
    </div>
  );
}
