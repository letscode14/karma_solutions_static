"use client";

import Footer from "./components/footer/Footer";
import HomePage from "./components/home/Home";

export default function Home() {
  return (
    <div className=" w-screen h-screen">
      <section id="home">
        <HomePage />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
