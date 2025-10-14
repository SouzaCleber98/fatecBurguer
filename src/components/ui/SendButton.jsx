import { useState } from "react";
import Toast from "./Toast";

function SendButton({ callbackFunction }) {
    const [showToast, setShowToast] = useState(false);

    const handleClick = (e) => {
        e.preventDefault()
        if (!confirm("Deseja realmente enviar a mensagem?")) return;
        callbackFunction();
        setShowToast(true);
    };

    return (
        <>
            <button className="enviar" onClick={handleClick}>
                Enviar
            </button>
            {showToast ? (
                <Toast message="Mensagem enviada com sucesso!" onClose={() => setShowToast(false)} />
            ) : null}
        </>
    );
}

export default SendButton;