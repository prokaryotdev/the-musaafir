import Cta from "@/components/home/Cta";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Testimonial from "@/components/home/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services/>
      <Testimonial/>
      <Cta/>
      <Faq/>
    </div>
  );
};

export default Home;
