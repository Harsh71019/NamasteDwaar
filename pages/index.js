import NavbarTop from '../components/base/Navbar';
import Section1 from '../components/homepage/Section1';
import Section2 from '../components/homepage/Section2';
import Section3 from '../components/homepage/Section3';
import Section4 from '../components/homepage/Section4';
import Section5 from '../components/homepage/Section5';
import Heading from '../components/homepage/Heading';
import Footer from '../components/base/Footer';

export default function Home() {
  return (
    <>
      <NavbarTop />
      <Section1 />
      <Section2 />
      <Heading title='Experiences' />
      <Section3 />
      <Heading title='Testimonials' />
      <Section4 />
      <Heading title='Partnered Brands' />
      <Section5 />
      <Footer />
    </>
  );
}
