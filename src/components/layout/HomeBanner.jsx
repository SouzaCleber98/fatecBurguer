import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeBanner() {
  return (
    <section className="bg-secondary-custom p-4 mb-4">
      <Container>
        <Row className="align-items-center">
          <Col
            lg={8}
            md={7}
            className="pe-4 border-end border-5 banner-border-custom"
          >
            <h1 className="mb-4 display-3 banner-title">Bem Vindo!</h1>
            <p className="fs-5 lh-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              dignissim eu diam suscipit hendrerit. In porta feugiat risus at
              posuere. Aenean posuere, sapien nec porta feugiat, lorem lectus
              condimentum justo, in laoreet libero turpis vel ante. Donec magna
              leo, ultricies sed lacus et, porta convallis odio. Donec dictum
              cursus urna at lacinia.
            </p>
          </Col>

          <Col lg={4} md={5}>
            <div className="d-flex flex-column gap-4">
              <Button
                size="lg"
                className="w-100 py-3 fs-4 fw-bold rounded-3 btn-banner"
                href="#"
              >
                Entrar
              </Button>
              <Button
                size="lg"
                className="w-100 py-3 fs-4 fw-bold rounded-3 btn-banner"
                as={Link}
                to="/menu"
              >
                Cardápio
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeBanner;
