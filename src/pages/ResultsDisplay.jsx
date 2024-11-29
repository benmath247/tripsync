import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CitiesCarousel from './CitiesCarousel';
import EmailForm from './EmailForm';

export default function ResultsDisplay() {

    return (
        <Container>
            <p>
                These results are only for display purposes, they are not based on your survey responses.
            </p>
            <p>
                Based on your answers, we’re working hard to bring you the best results. Leave your email below to get early access when TripSync launches!
            </p>
            <CitiesCarousel />
            <EmailForm />
        </Container>
    );
}

