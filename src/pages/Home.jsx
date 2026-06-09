import React from "react";

import Hero from "../components/Hero";
import CarCarousel from "../components/CarCarousel";
import BookingForm from "../components/BookingForm";
import CardsSection from "../components/CardsSection";

import Offers from "../components/Offers";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import FloatingChat from "./FloatingChat";



export default function Home() {
  return (
    <>
      <main>
        <Hero />

        <section className="container section">
          <CarCarousel />
        </section>

        <section className="container section">
          <BookingForm />
        </section>

        <section className="container section">
          <CardsSection />
        </section>

        <section className="container section">
          <Offers />
        </section>

        <section className="container section">
          <Subscribe />
        </section>
      </main>

      <Footer />
      <div className="floating-chat">💬</div>
    </>
  );
}
