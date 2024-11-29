import React from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function HotelCarousel() {
    const cityData = [
        {
            name: '1',
            date: 'Dec 1 - Dec 7',
            priceRange: '$800 - $1,200',
            imgSrc: 'https://via.placeholder.com/300x150',
        },
        {
            name: '2',
            date: 'Jan 15 - Jan 20',
            priceRange: '$1,100 - $1,500',
            imgSrc: 'https://via.placeholder.com/300x150',
        },
        {
            name: '3',
            date: 'Feb 10 - Feb 18',
            priceRange: '$1,300 - $1,800',
            imgSrc: 'https://via.placeholder.com/300x150',
        },
    ];

    const chunkSize = 3;
    const cityChunks = [];
    for (let i = 0; i < cityData.length; i += chunkSize) {
        cityChunks.push(cityData.slice(i, i + chunkSize));
    }


    return (
        <Container className="mt-4">
            <Carousel indicators={false}>
                {cityChunks.map((chunk, index) => (
                    <Carousel.Item key={index}>
                        <Row className="justify-content-center">
                            {chunk.map((city, idx) => (
                                <Col md={4} key={idx}>
                                    <Card
                                        className="text-center"
                                        style={{ margin: '0 auto', maxWidth: '18rem', cursor: 'pointer' }}
                                    >
                                        <Card.Img variant="top" src={city.imgSrc} />
                                        {/* <Card.Body>
                                            <Card.Title>{city.name}</Card.Title>
                                            <Card.Text>
                                                <strong>Dates:</strong> {city.date} <br />
                                                <strong>Price Range:</strong> {city.priceRange}
                                            </Card.Text>
                                        </Card.Body> */}
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
}

export default HotelCarousel;
