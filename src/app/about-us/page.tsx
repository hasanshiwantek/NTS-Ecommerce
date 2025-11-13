import React from "react";
import AboutBanner from "../components/about/AboutBanner";
import GlobalSupplier from "../components/about/GlobalSupplier";
import AboutStats from "../components/about/AboutStats";
import AboutBrandSection from "../components/about/AboutBrandSection";
import SocialResponsibilitySection from "../components/about/SocialResponsibiltySection";
import GetInTouch from "../components/Home/GetInTouch";
import dynamic from "next/dynamic";
import ProductServicesSection from "../components/about/ProductServicesSection";
const AOSWrapper = dynamic(() => import("../components/animation/AOSWrapper"));
const page = () => {
  return (
    <main className="flex flex-col gap-30">
      <AOSWrapper animation="zoom-in" delay={100}>
        <AboutBanner />
      </AOSWrapper>
      <AOSWrapper animation="fade-up" delay={300}>
        <GlobalSupplier />
      </AOSWrapper>
      <AOSWrapper animation="fade-up" delay={400}>
        <AboutStats />
      </AOSWrapper>
      <AOSWrapper animation="fade-up" delay={500}>
        <AboutBrandSection />
      </AOSWrapper>
      <AOSWrapper animation="fade-up" delay={600}>
        <SocialResponsibilitySection />
      </AOSWrapper>
      <AOSWrapper animation="fade-up" delay={700}>
        <GetInTouch />
      </AOSWrapper>
      <AOSWrapper animation="fade-up" delay={800}>
        <ProductServicesSection />
      </AOSWrapper>
    </main>
  );
};

export default page;
