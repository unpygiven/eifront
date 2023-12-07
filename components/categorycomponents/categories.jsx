"use client"

import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryCard from "./categorycard";

export default function Categories(props)
{
    const categories = props.categories;
    return (
    <div style={{marginTop: '2%'}}>
        <Row>
            {
            categories.map(function (x) {
                return <Col key={x.id}><CategoryCard category={x}/></Col>
            })
            }
        </Row>
    </div>
    )
}