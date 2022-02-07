import React from 'react';
import ImageSlider from './ImageSlider';
import { images_gallery_aboutus } from '../../data/galleryaboutus';

const Gallery = () => {
  return (
    <section className='aboutus-section5' id='aboutus-gallery'>
      <div className='container'>
        <h1 className='aboutus-section5__heading'>Gallery</h1>

        <ImageSlider images={images_gallery_aboutus} />
      </div>
    </section>
  );
};

export default Gallery;
