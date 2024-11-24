"use client";

import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home/Home";
import ProjectGalary from "./components/ProjectGalary/ProjectGalary";
import Services from "./components/services/Services";
import Services2 from "./components/services/Services2";
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
      <section id="services">
        <Services />
      </section>
      <section>
        <Services2 />
      </section>
      <section id="about">
        <Testimonial />
      </section>
      <section id="about">
        <ProjectGalary />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
