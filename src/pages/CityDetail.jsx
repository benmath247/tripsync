import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import { useParams, useSearchParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HotelCarousel from './HotelCarousel';

function CityDetail() {
    const { cityName } = useParams();
    const [searchParams] = useSearchParams();

    const dates = searchParams.get('dates');
    const priceRange = searchParams.get('priceRange');


    return (
        <Container className="mt-4">
            <h1 className="text-center mb-4">{cityName}</h1>
            <p className="text-center"><strong>Dates:</strong> {dates}</p>
            <p className="text-center"><strong>Price Range:</strong> {priceRange}</p>
            <Container className='my-5'>

                <h4 className="mt-5">Hotel 1</h4>
                <HotelCarousel />

                <h4 className="mt-5">Hotel 2</h4>
                <HotelCarousel />
            </Container>
            <Container className='my-5'>
                <h3>Flight Options:</h3>
                <Card
                    className="text-start my-2"
                    style={{ margin: '0 auto', width: '80%', cursor: 'pointer' }}
                >
                    <Card.Body>
                        <Card.Title>Delta Airlines</Card.Title>
                        <Card.Text>
                            <strong>Dates:</strong> {dates} <br />
                            <strong>Price:</strong> $100
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card
                    className="text-start my-2"
                    style={{ margin: '0 auto', width: '80%', cursor: 'pointer' }}
                >
                    <Card.Body>
                        <Card.Title>Ryan Air</Card.Title>
                        <Card.Text>
                            <strong>Dates:</strong> {dates} <br />
                            <strong>Price Range:</strong> $150
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            <Container className='my-5'>
                <h3>Car Rental Options:</h3>
                <Card
                    className="text-start my-2"
                    style={{ margin: '0 auto', width: '80%', cursor: 'pointer' }}
                >
                    <Card.Body>
                        <Card.Title>BUDGET</Card.Title>
                        <Card.Text>
                            <strong>Dates:</strong> {dates} <br />
                            <strong>Price:</strong> $100
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card
                    className="text-start my-2"
                    style={{ margin: '0 auto', width: '80%', cursor: 'pointer' }}
                >
                    <Card.Body>
                        <Card.Title>ENTERPRISE</Card.Title>
                        <Card.Text>
                            <strong>Dates:</strong> {dates} <br />
                            <strong>Price Range:</strong> $150
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    );
}

export default CityDetail;
