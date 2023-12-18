"use client"

import Carousel from 'react-bootstrap/Carousel';
function VideoCarousel(props) {
  const videosC = props.videos;
  return (
    <Carousel>
      {
        videosC.map(function(x) {
            return(
<Carousel.Item id={x.video.id}>
      <a href={`/video/${x.video.id}/`} style={{textDecoration: 'none'}}>
        <img
          className="d-block w-100"
          src={x.video.photo_link}
          alt={x.video.title}
        />
        </a>
        <Carousel.Caption style={{backgroundColor: 'gray', border: 'solid black'}}>
          <p>{x.video.title}</p>
        </Carousel.Caption>
      </Carousel.Item>
            )
        })
      }
    </Carousel>
  );
}

export default VideoCarousel;