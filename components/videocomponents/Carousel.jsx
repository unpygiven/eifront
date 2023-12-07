"use client"

import Carousel from 'react-bootstrap/Carousel';

function VideoCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://e0.pxfuel.com/wallpapers/303/523/desktop-wallpaper-gibson-les-paul-guitar.jpg"
          alt="First slide"
        />
        <Carousel.Caption style={{backgroundColor: 'gray', border: 'solid black'}}>
          <p>ornek_gunun_videosu_1_aciklama</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://e0.pxfuel.com/wallpapers/303/523/desktop-wallpaper-gibson-les-paul-guitar.jpg"
          alt="Second slide"
        />

        <Carousel.Caption style={{backgroundColor: 'gray', border: 'solid black'}}>
        <p>ornek_gunun_videosu_2_aciklama</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://e0.pxfuel.com/wallpapers/303/523/desktop-wallpaper-gibson-les-paul-guitar.jpg"
          alt="Third slide"
        />

        <Carousel.Caption style={{backgroundColor: 'gray', border: 'solid black'}}>
          <p>ornek_gunun_videosu_3_aciklama</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://e0.pxfuel.com/wallpapers/303/523/desktop-wallpaper-gibson-les-paul-guitar.jpg"
          alt="Third slide"
        />

        <Carousel.Caption style={{backgroundColor: 'gray', border: 'solid black'}}>
          <p>ornek_gunun_videosu_4_aciklama</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default VideoCarousel;