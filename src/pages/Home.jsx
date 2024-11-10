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
                        <h1 className="display-4">Welcome to TripSync</h1>
                        <p className="lead">
                            Welcome to TripSync! Let us help you find the best travel options for your next adventure. Answer a few quick questions to get started!
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
