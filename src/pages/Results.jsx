import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Results({ questions, answers }) {
    const formatAnswer = (index) => {
        const answer = answers[index.toString()];
        if (typeof answer === 'object') {
            if ('startDate' in answer && 'endDate' in answer) {
                return `From ${answer.startDate} to ${answer.endDate}`;
            } else if ('adults' in answer || 'children' in answer || 'pets' in answer) {
                return `Adults: ${answer.adults}, Children: ${answer.children || 0}, Pets: ${answer.pets || 0}`;
            }
        }
        return answer;
    };

    return (

        <div className="container mt-4">
            <Container>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body>
                                <Card.Title>Destination 1</Card.Title>
                                <Card.Text>
                                    $1000 - $2000 per person
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body>
                                <Card.Title>Destination 2</Card.Title>
                                <Card.Text>
                                    $1000 - $2000 per person
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body>
                                <Card.Title>Card Title 3</Card.Title>
                                <Card.Text>
                                    $1000 - $2000 per person
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <h2>Click here to see your survey results</h2>
            <ul className="list-group">
                {questions.map((question, index) => (
                    <li key={index} className="list-group-item">
                        <strong>{question}</strong>
                        <div>{formatAnswer(index)}</div>
                    </li>
                ))}
            </ul>

        </div>
    );
}

