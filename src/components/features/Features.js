import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,  // Animation duration (in milliseconds)
      once: false,      // Whether animation should happen only once
      easing: 'ease-in-out',  // Default easing for AOS animations
    });
  }, []);
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
      data-aos="fade-right">
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;
