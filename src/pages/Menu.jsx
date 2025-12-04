import { Container, Row, Col } from "react-bootstrap";
import ProductItem from "../components/ui/ProductItem";

const itemCatalog = [
  {
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    nome: "Lanche 1",
    preco: "R$ 25,00",
    descricao: "Duis semper in metus eu suscipit. Aliquam erat volutpat.",
  },
  {
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    nome: "Lanche 2",
    preco: "R$ 30,00",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    nome: "Lanche 3",
    preco: "R$ 28,00",
    descricao:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    nome: "Lanche 4",
    preco: "R$ 28,00",
    descricao:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    nome: "Lanche 5",
    preco: "R$ 28,00",
    descricao:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    nome: "Lanche 6",
    preco: "R$ 28,00",
    descricao:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    nome: "Lanche 7",
    preco: "R$ 28,00",
    descricao:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function Cardapio() {
  return (
    <>
      <main>
        <Container className="my-4">
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {itemCatalog.map((produto, index) => (
              <Col key={index}>
                <ProductItem
                  img={produto.img}
                  nome={produto.nome}
                  preco={produto.preco}
                  descricao={produto.descricao}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Cardapio;
