import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container text-center">
            <header className="py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="d-flex justify-content-end mb-3">
                            <button className="btn btn-outline-secondary">
                                Share &gt;
                            </button>
                        </div>
                        <h1>What is this website?</h1>
                        <p className="lead">
                            This is an AI-based travel planner.
                        </p>
                        <p>
                            You tell us your travel goals
                        </p>
                        <p>
                            We tell you a list of best destinations, accomodation, and transportation based on your preferences
                        </p>
                        <h1>
                            What are we asking from you?
                        </h1>
                        <p>
                            We think this tool would be really helpful to people that travel (everyone) and we want to get your feedback!
                        </p>
                        <p>
                            Read the product description, scroll through the website and let us know what you think. You can sign up for early access and a discount once this product comes to life!
                        </p>
                        <Link to="/survey">
                            <button className="btn btn-primary btn-lg mt-3">
                                Find your next destination &gt;
                            </button>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Home;
