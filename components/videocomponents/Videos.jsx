"use client"

import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoCard from "./VideoCard";

export default function Videos(props)
{
    const videos = props.videos;
    if(videos.length == 0)
    {
        return <h1>Sonuç bulunamadı. Anahtar kelimeleri doğru yazdığına emin misin?</h1>
    }
    return (
    <div style={{marginTop: '2%'}}>
        <Row>
            {
            videos.map(function (x) {
                return <Col key={x.id}><VideoCard video={x}/></Col>
            })
            }
        </Row>
    </div>
    )
}