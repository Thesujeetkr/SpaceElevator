import React from 'react';
import {
  HeroBanner,
  AboutHome,
  BenefitsHome,
  ProductSection,
  TestimonialSection,
  FaqSection,
  ClientSection,
  VideoSection,
  CertificationSection,
  OurSolution,
  BrochureHome
} from '../components/sections';

const Home = () => {
  return (
    <div className="home-page">
      <HeroBanner />
      <AboutHome />
      <ProductSection />
      <OurSolution />
      <BenefitsHome />
      <TestimonialSection />
      <ClientSection />
      <CertificationSection />
      <VideoSection />
      <FaqSection />
      <BrochureHome />
    </div>
  );
};

export default Home;