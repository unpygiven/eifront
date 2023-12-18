"use client"

import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CategoryCard(props)
{

    const category = props.category;
    const catName = category.name.replaceAll(" ", "-");
    return (
      <a href={`/videos/${catName}/1`} style={{textDecoration: 'none'}}>
        <Card style={{ width: '18rem', margin: '0 auto', marginTop: '5%' }}>
          <Card.Img variant="top" src={category.link} />
        </Card>
      </a>
      );
}