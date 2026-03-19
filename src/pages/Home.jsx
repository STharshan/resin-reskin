import React from 'react'
import HeroSection from "../components/HeroSection"
import ServicesSection from '../components/ServiceSection'
import AboutSection from '../components/AboutSection'
import Banner from '../components/Banner'
import Portfolio from '../components/GallerySection'
import FeaturedProject from '../components/FeatureProject'
import TestimonialSection from '../components/Testimonail'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <Banner />
      <Portfolio />
      <FeaturedProject />
      <TestimonialSection />
    </div>
  )
}

export default Home
