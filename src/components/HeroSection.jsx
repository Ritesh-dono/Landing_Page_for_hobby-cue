import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import "./hero.css";

const HeroSection = () => {
  const handleGoogleSignIn = () => {
    console.log('Signing in with Google...');
  };

  const handleFacebookSignIn = () => {
    console.log('Signing in with Facebook...');
  };

  return (
    <Container fluid className="py-5 hero-section" style={{ backgroundColor: '#F7F5F9' }}>
      <Row className="align-items-center">
        <Col xs={12} md={6} className="text-center text-md-left ">
          <h1>
            Explore your <span style={{ color: '#007bff' }}>Hobby</span> or{' '}
            <span style={{ color: '#007bff' }}>Passion</span>
          </h1>
          <p>
            Sign-in to interact with a community of fellow hobbyists and an eco-system of experts,
            teachers, suppliers, classes, workshops, and places to practice, participate or perform.
            Your hobby may be about visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities.
          </p>
        </Col>
        <Col xs={12} md={6} className="d-flex flex-column align-items-center justify-content-center p-5">
        <div class="nav-buttons">
        <div class="nav-button sign-in">Sign In</div>
        <div class="nav-button join-in">Join In</div>
    </div>
          <Form style={{ width: '100%', maxWidth: '400px' }}>

            <Form.Group controlId="formBasicEmail">

              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mt-3">
              Continue
            </Button>
            <h6 className="w-100 d-flex justify-content-center mt-3">
              <span>or connect with</span>
            </h6>
            <Button variant="outline-primary" className="w-100 mt-3" onClick={handleGoogleSignIn}>
              <FaGoogle style={{ marginRight: '8px' }} />
              Google
            </Button>
            <Button variant="outline-primary" className="w-100 mt-3" onClick={handleFacebookSignIn}>
              <FaFacebook style={{ marginRight: '8px' }} />
              Facebook
            </Button>
          </Form>
        </Col>
      </Row>
      <div className="imgsec">
        <img src="1.png" alt="" className="bottom-img" />
      </div>
    </Container>
  );
};

export default HeroSection;
