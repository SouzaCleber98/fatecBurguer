import { useState } from "react";
import Toast from "./Toast";

function ProductItem({ img, nome, preco, descricao }) {
    const [showToast, setShowToast] = useState(false);

    const handleClick = () => {
        if (!confirm("Tem certeza que deseja comprar?")) return;
        setShowToast(true);
    };

    return (
        <div className="item">
            <img src={img} alt={nome} />
            <div className="buy-button" onClick={handleClick}>Comprar</div>
            <div className="price">{preco}</div>
            <div className="info">
                <h3>{nome}</h3>
                <p>{descricao}</p>
            </div>
            {showToast ? (
                <Toast message="Item comprado!" onClose={() => setShowToast(false)} />
            ) : null
            }
        </div>
    );
}

export default ProductItem;
