import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function EmailForm() {
    // const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // try {
        //     // Replace with actual API URL
        //     const response = await fetch('YOUR_API_URL', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({ email }),
        //     });

        //     const result = await response.json();
        //     if (result.status === 'success') {
        //         toast.success('Thank you for signing up!');
        //         setEmail('');
        //     } else {
        //         toast.error('An error occurred. Please try again.');
        //     }
        // } catch (error) {
        //     toast.error('An error occurred. Please try again.');
        // }
    };

    return (
        <Container className="mt-4 py-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <h3 className="text-center mb-3">Sign up for early access and a discount</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <div className="text-center mt-3">
                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>

            {/* <ToastContainer position="bottom-right" autoClose={3000} /> */}
        </Container>
    );
}

export default EmailForm;
