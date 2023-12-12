"use client"

import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CategoryCard(props)
{

    const category = props.category;
    return (
      <a href={`/videos/${category.name}/1`} style={{textDecoration: 'none'}}>
        <Card style={{ width: '18rem', margin: '0 auto', marginTop: '5%' }}>
          <Card.Img variant="top" src="https://e0.pxfuel.com/wallpapers/303/523/desktop-wallpaper-gibson-les-paul-guitar.jpg" />
        </Card>
      </a>
      );
}