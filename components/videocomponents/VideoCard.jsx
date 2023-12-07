"use client"

import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function VideoCard(props)
{
    const video = props.video;
    const title = video.title;
    const imageSrc = video.photo_link
    const slug = title.replaceAll(' ', '-');
    return (
      <a href={`/video/${video.id}/${slug}`} style={{textDecoration: 'none'}}>
        <Card style={{ width: '18rem', margin: '0 auto', marginTop: '5%' }}>
          <Card.Img variant="top" src="https://e0.pxfuel.com/wallpapers/303/523/desktop-wallpaper-gibson-les-paul-guitar.jpg" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
        </Card>
      </a>
      );
}