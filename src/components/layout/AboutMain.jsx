import { Container, Row, Col } from "react-bootstrap";

function AboutMain() {
  return (
    <main>
      <Container className="w-75 mx-auto my-4 p-4 bg-secondary-custom rounded-3">
        <Row className="g-4">
          <Col lg={7}>
            <div className="sobre-text">
              <h2 className="fs-4 mb-4 pb-2">Sobre Nós</h2>
              <div className="text-content">
                <p>
                  Etiam non orci consectetur tortor tempor malesuada a a metus.
                  Sed id lobortis nibh. Pellentesque turpis felis, dignissim
                  quis risus vel, fermentum commodo felis. Nunc quis ipsum id
                  leo consectetur placerat sed sit amet nisi. Phasellus at lorem
                  lectus. Etiam ut libero felis. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Assumenda ipsam fugiat, enim
                  eaque quaerat animi modi non ipsa quod doloribus sapiente
                  error et fugit laborum est earum? Dolor, magnam omnis. Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit. Odio ullam
                  mollitia excepturi vero, eligendi pariatur vitae ea nesciunt
                  cumque quibusdam fuga. Quis magni vitae doloribus eum!
                  Voluptatem corporis rerum soluta? Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quam esse consequatur ipsum
                  ullam culpa nihil temporibus, maxime autem iusto cumque
                  perspiciatis praesentium magni error eius eveniet nobis amet
                  voluptatibus eaque.
                </p>
                <img
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
                  alt="História"
                  className="img-fluid rounded-3"
                />
              </div>
            </div>
          </Col>

          <Col lg={5}>
            <div className="sobre-image">
              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
                alt="Bakery"
                className="img-fluid mb-3 rounded-3"
              />
              <blockquote className="blockquote">
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit..."
              </blockquote>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default AboutMain;
