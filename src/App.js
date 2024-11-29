import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Survey from './pages/Survey';
import ResultsDisplay from './pages/ResultsDisplay';
import CityDetail from './pages/CityDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" className="header">
          <Container className="justify-content-center">
            <Navbar.Brand href="/">
              <img
                src="/logo.png"
                alt="TripSync Logo"
                className="logo"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/results" element={<ResultsDisplay />} />
          <Route path="/city/:name" element={<CityDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
