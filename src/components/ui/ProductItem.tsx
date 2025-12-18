import { useState } from "react";
import { Card, Badge, Button } from "react-bootstrap";
import Toast from "./Toast";

interface ProductItemProps {
  img: string;
  nome: string;
  preco: number;
  descricao: string;
}

const formatCurrency = (value: number): string => {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

function ProductItem({ img, nome, preco, descricao }: ProductItemProps) {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    if (!confirm("Tem certeza que deseja comprar?")) return;
    setShowToast(true);
  };

  return (
    <>
      <Card className="h-100 product-card">
        <Card.Img variant="top" src={img} alt={nome} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{nome}</Card.Title>
          <Card.Text className="flex-grow-1">{descricao}</Card.Text>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <Badge bg="success" className="fs-6 py-2 px-3">
              {formatCurrency(preco)}
            </Badge>
            <Button variant="success" size="sm" onClick={handleClick}>
              Comprar
            </Button>
          </div>
        </Card.Body>
      </Card>
      {showToast && (
        <Toast message="Item comprado!" onClose={() => setShowToast(false)} />
      )}
    </>
  );
}

export default ProductItem;
