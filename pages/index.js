import NavbarTop from '../components/base/Navbar';
import Section1 from '../components/homepage/Section1';
import Section2 from '../components/homepage/Section2';
import Section3 from '../components/homepage/Section3';
import Heading from '../components/homepage/Heading';

export default function Home() {
  return (
    <>
      <NavbarTop />
      <Section1 />
      <Section2 />
      <Heading title='Experiences' />
      <Section3 />
    </>
  );
}
