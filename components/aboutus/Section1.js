import React from 'react';
import HeroCenter from '../base/HeroCenter';
import Paragraph from '../base/Paragraph';
const Section1 = () => {
  return (
    <section className='aboutus-section1' id='about-us'>
      <HeroCenter
        heading='About Us'
        image='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643872795/static/About%20us/About_Us_Header_ybgll7.jpg'
      />
      <div className='container'>
        <div style={{ marginTop: '5rem' }}>
          <Paragraph
            text='Created with a purpose, Namaste Dwaar reconnects you back to the natural world and takes you to the
            setting where your wellness, personal growth, and happiness can re-emerge. Our mission is to preserve the authenticity of India’s most powerful healing components: Village life, Ayurveda and Yoga, and to allow for these strengths to be used for the benefit of all.'
          />
        </div>
      </div>
    </section>
  );
};
export default Section1;
