
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaPeopleArrows, FaMapMarkerAlt, FaShoppingCart, FaCalendarAlt } from 'react-icons/fa';

const features = [
  { title: "People", description: "Find a teacher, coach, or expert...", btnText: "Connect", icon: FaPeopleArrows, iconColor: "#8064A2" },
  { title: "Place", description: "Find a class, school, playground...", btnText: "Meet up", icon: FaMapMarkerAlt, iconColor:" #77933C" },
  { title: "Product", description: "Find equipment or supplies required...", btnText: "Get it", icon: FaShoppingCart ,iconColor:"#C0504D"},
  { title: "Program", description: "Find events, meetups ", btnText: "Attend", icon: FaCalendarAlt,iconColor: " #0096C8"}
];

const FeatureSection = () => {
  return (
    <Container className="py-5">
      <Row>
        {features.map((feature, index) => (
          <Col key={index} md={3} color='blue'>
            <Card className="text-center mb-4 w-100 ">
              <Card.Body>
                <Card.Title>
                  <feature.icon style={{ color: feature.iconColor }} /> {feature.title}
                </Card.Title>
                <Card.Text>{feature.description}</Card.Text>
                <Button variant="primary">{feature.btnText}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeatureSection;
