import { Container, Row, Col, Card, Image } from "react-bootstrap";

export default function About() {
  return (
    <Container className="py-5">
      {/* Page Title */}
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">About Us</h2>
          <p className="text-center text-muted">
            We are committed to delivering high-quality products and services that make life easier and more enjoyable for our customers.
          </p>
        </Col>
      </Row>

      {/* CEO Section */}
      <Row className="justify-content-center mb-5">
        <Col md={4} className="text-center">
          <Image
            src="/images/ceo.jpg"
            roundedCircle
            fluid
            alt="Shekhar K. Prasad"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
          <h4 className="mt-3">Shekhar K. Prasad</h4>
          <p className="text-muted">Chief Executive Officer</p>
          <p>
            With over 20 years of experience in the industry, Shekhar has been
            at the forefront of innovation, leading the company to new heights.
          </p>
        </Col>
      </Row>

      {/* Mission / Vision / Values */}
      <Row className="g-4">
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                To provide innovative solutions that make life better for
                individuals and businesses worldwide.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                To be recognized as a global leader for our commitment to
                quality, creativity, and customer satisfaction.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Our Values</Card.Title>
              <Card.Text>
                Integrity, innovation, and inclusivity are at the core of
                everything we do.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
