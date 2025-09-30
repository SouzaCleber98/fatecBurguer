window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.fale-conosco form');
    const btnCancelar = form.querySelector('.cancelar');
    const btnEnviar = form.querySelector('.enviar');

    // Função para limpar todos os campos do formulário
    const limparCampos = () => {
        form.reset();
    };

    // Cancelar: alerta e limpeza se confirmado
    btnCancelar.addEventListener('click', (e) => {
        
        e.preventDefault();

        if (!confirm('Tem certeza que deseja cancelar e limpar os campos?')) return;

        limparCampos();
        alert('Campos limpos com sucesso!');

    });

    // Enviar: confirmação antes de enviar + sucesso
    btnEnviar.addEventListener('click', (e) => {

        e.preventDefault();

        if (!confirm('Deseja realmente enviar a mensagem?')) return;

        alert('Mensagem enviada com sucesso!');
        limparCampos();

    });
});
