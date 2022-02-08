import React from 'react';

const VisionPhilosophy = () => {
  return (
    <section className='vision-about'>
      <div className='container'>
        <div className='row vision-about__row'>
          <div className='col-md-6 col-12  px-md-1 px-0'>
            <div className=''>
              <img
                src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1644082901/static/About%20us/About_Us_Our_Mission_pqfvvj.jpg'
                alt=''
                className='vision-about__img'
              />
            </div>
          </div>
          <div className='col-md-6 col-12 d-flex align-items-center'>
            <div className='vision-about__container-text'>
              <h1 className='vision-about__h1'>Our Mission</h1>
              <p className='vision-about__para text-para'>
                The village has preserved the most fundamental aspects of our
                culture and Our mission with Namaste Dwaar is to preserve the
                authenticity of two of India’s most powerful components, both of
                which rely heavily on the natural world, as well as on each
                other: these are Ayurveda and India’s Villages. We offer a
                uniquely invigorating natural setting, a rich architectural
                structure to complement the luxurious property, the most
                authentic treatments of Ayurveda in the North of India, and most
                importantly, when combined all together, an impactful experience
                unlike any other.
              </p>
            </div>
          </div>
        </div>
        <div className='row vision-about__row'>
          <div className='col-md-6 col-12 d-flex align-items-center order-1 order-md-0'>
            <div className='vision-about__container-text'>
              <h1 className='vision-about__h1'>Our Philosophy</h1>
              <p className='vision-about__para text-para'>
                To heal the seemingly endless ailments associated with
                modern-day living, we must return to the place which has
                preserved the prosperity of our past, which now harbours the
                prosperity of our present and future: the countryside. This is
                the very philosophy which has brought Namaste Dwaar into
                existence - Namaste Dwaar is the gateway back to rural India and
                to our healthiest and happiest selves.
              </p>
            </div>
          </div>
          <div className='col-md-6 col-12 order-0 order-md-1 px-md-1 px-0'>
            <div className=''>
              <img
                src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1644082901/static/About%20us/About_Us_Our_Philosophy_i5bfip.jpg'
                alt=''
                className='vision-about__img'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionPhilosophy;
