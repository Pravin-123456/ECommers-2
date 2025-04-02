import React from "react";
import HeroSection from "./HeroSection";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import Discounts from "./Discounts";
import BestSeller from "./BestSeller";
import JustLanding from "./JustLanding";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Categories />
      <FeaturedProducts />
      <Discounts />
      <BestSeller />
      <JustLanding />
    </div>
  );
};

export default Home;
