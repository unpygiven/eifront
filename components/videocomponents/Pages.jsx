"use client"
import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Container } from "react-bootstrap";

export default function Page(props)
{   
    const keywords = props.keywords;
    const currentPage = parseInt(props.currentPage);
    const isLast = props.isLast;
    var prevPage = currentPage - 1;
    var nextPage = currentPage + 1;
    if(prevPage < 1)
    {
        prevPage = 1
    }
    if(isLast == true)
    {
        nextPage = nextPage - 1;
    }

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <Row>
                        <Col><a style={{margin: '0 auto', color: 'white'}} href={`/videos/${keywords}/${prevPage}`}><center>GERİ</center></a> </Col>
                        <Col xs={6}><a style={{margin: '0 auto', color: 'white'}}><center>{currentPage}</center></a></Col>
                        <Col><a style={{margin: '0 auto', color: 'white'}} href={`/videos/${keywords}/${nextPage}`}><center>İLERİ</center></a> </Col>
                    </Row></Col>
                <Col></Col>
            </Row>
        </Container>
    )
}