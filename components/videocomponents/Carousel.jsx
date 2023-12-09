"use client"

import Carousel from 'react-bootstrap/Carousel';

function VideoCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
      <a href={`/video/10/`} style={{textDecoration: 'none'}}>
        <img
          className="d-block w-100"
          src="https://e0.pxfuel.com/wallpapers/303/523/desktop-wallpaper-gibson-les-paul-guitar.jpg"
          alt="First slide"
        />
        </a>
        <Carousel.Caption style={{backgroundColor: 'gray', border: 'solid black'}}>
          <p>ornek_gunun_videosu_1_aciklama</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href={`/video/11/`} style={{textDecoration: 'none'}}>
        <img
          className="d-block w-100"
          src="https://e0.pxfuel.com/wallpapers/303/523/desktop-wallpaper-gibson-les-paul-guitar.jpg"
          alt="Second slide"
        />
      </a>
        <Carousel.Caption style={{backgroundColor: 'gray', border: 'solid black'}}>
        <p>ornek_gunun_videosu_2_aciklama</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href={`/video/12/`} style={{textDecoration: 'none'}}>
        <img
          className="d-block w-100"
          src="https://e0.pxfuel.com/wallpapers/303/523/desktop-wallpaper-gibson-les-paul-guitar.jpg"
          alt="Third slide"
        />
      </a>
        <Carousel.Caption style={{backgroundColor: 'gray', border: 'solid black'}}>
          <p>ornek_gunun_videosu_3_aciklama</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href={`/video/13/`} style={{textDecoration: 'none'}}>
        <img
          className="d-block w-100"
          src="https://e0.pxfuel.com/wallpapers/303/523/desktop-wallpaper-gibson-les-paul-guitar.jpg"
          alt="Third slide"
        />
        </a>
        <Carousel.Caption style={{backgroundColor: 'gray', border: 'solid black'}}>
          <p>ornek_gunun_videosu_4_aciklama</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default VideoCarousel;