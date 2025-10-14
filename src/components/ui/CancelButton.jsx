import { useState } from "react";
import Toast from "./Toast";

function CancelButton({ callbackFunction }) {
  const [showToast, setShowToast] = useState(false);

  const handleClick = (e) => {
    e.preventDefault()
    if (!confirm("Tem certeza que deseja cancelar e limpar os campos?")) return;
    callbackFunction();
    setShowToast(true);
  };

  return (
    <>
      <button className="cancelar" onClick={handleClick}>
        Cancelar
      </button>
      {showToast ? (
        <Toast message="Formulário limpo com sucesso!" onClose={() => setShowToast(false)} />
      ) : null}
    </>
  );
}

export default CancelButton;
