import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactInfo from "../components/layout/ContactInfo";
import LocationMap from "../components/ui/LocationMap";
import ContactForm from "../components/layout/ContactForm";

function Contact() {
  useEffect(() => {
    document.title = "Contato";
  }, []);

  return (
    <Container className="w-75 mx-auto my-4 p-4 bg-secondary-custom rounded-3">
      <Row>
        <Col lg={6} className="mb-4">
          <ContactInfo />
        </Col>
      </Row>
      <Row>
        <Col lg={6} className="mb-4">
          <LocationMap />
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="fale-conosco">
            <h2>Fale conosco</h2>
            <ContactForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
