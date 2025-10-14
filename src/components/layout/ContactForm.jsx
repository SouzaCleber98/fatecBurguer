import { useRef } from "react";
import CancelButton from "../ui/CancelButton";
import SendButton from "../ui/SendButton";

function ContactForm() {
    const formRef = useRef(null);

    // Função para limpar os campos do formulário
    const clearForm = () => {
        if (formRef.current) {
            formRef.current.reset();
        }
    };

    return (
        <form ref={formRef}>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" placeholder="Insira seu nome" />

            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" placeholder="nome@email.com" />

            <label htmlFor="telefone">Telefone:</label>
            <input type="text" id="telefone" placeholder="(00) 00000-0000" />

            <label htmlFor="assunto">Assunto:</label>
            <select id="assunto">
                <option>Escolha uma opção</option>
                <option>Contato</option>
                <option>Dúvidas</option>
                <option>Problemas na compra</option>
                <option>Sugestões</option>
            </select>

            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" placeholder="Insira sua mensagem"></textarea>

            <div className="buttons">
                <CancelButton callbackFunction={clearForm} />
                <SendButton callbackFunction={clearForm} />
            </div>
        </form>
    );
}

export default ContactForm;
