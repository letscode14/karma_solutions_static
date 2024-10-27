"use client";

import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home/Home";

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
    </div>
  );
}
