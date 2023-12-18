"use client"

import Carousel from 'react-bootstrap/Carousel';
function VideoCarousel(props) {
  const videosC = props.videos;
  return (
    <Carousel>
      {
        videosC.map(function(x) {
            return(
<Carousel.Item id={x.id}>
      <a href={`/video/${x.id}/`} style={{textDecoration: 'none'}}>
        <img
          className="d-block w-100"
          src={x.photo_link}
          alt={x.title}
        />
        </a>
        <Carousel.Caption style={{backgroundColor: 'gray', border: 'solid black'}}>
          <p>{x.title}</p>
        </Carousel.Caption>
      </Carousel.Item>
            )
        })
      }
    </Carousel>
  );
}

export default VideoCarousel;