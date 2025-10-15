import generateToast from "./toast.js";

window.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-button');

    // Comprar: alerta de confirmação
    buyButtons.forEach((buyButton) => {
        buyButton.addEventListener('click', (e) => {
            e.preventDefault();

            if (!confirm('Tem certeza que deseja comprar o item?')) return;

            generateToast('Compra realizada com sucesso!');
        });
    });
});
