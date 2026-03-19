import { SERVICE_DATA } from "../data/Service.js";
import ServiceHero from "../common/HeroSection.jsx";
import ServiceAbout from "../common/AboutSection.jsx";
import ServiceTestimonial from "../common/TestimonialSection.jsx";
import GallerySection from "../common/GallerySection.jsx";


export default function ServicePage({ serviceKey }) {
  const data = SERVICE_DATA[serviceKey];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-stone-500">
        Service "<strong>{serviceKey}</strong>" not found in servicesData.js
      </div>
    );
  }

  const scrollToContact = () => {
    document.getElementById("service-contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="">
      <ServiceHero data={data.hero} onCta={scrollToContact} />
      <ServiceAbout data={data.about} onCta={scrollToContact} />
      <ServiceTestimonial data={data.testimonial} />
      <GallerySection     slides={data.gallery.slides} /> 
    </div>
  );
}