import { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Toast from "../ui/Toast";
import { clearFormFields, handleFormSubmit } from "../../utils/formHelpers";

function ContactForm() {
  const formReference = useRef(null);
  const [showToast, setShowToast] = useState(false);

  const onSubmit = (event) => {
    handleFormSubmit(event, formReference, () => setShowToast(true));
  };

  const onCancel = () => {
    clearFormFields(formReference);
  };

  return (
    <>
      <Form ref={formReference} onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label className="fw-semibold">Nome:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira seu nome"
            className="rounded-3"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label className="fw-semibold">E-mail:</Form.Label>
          <Form.Control
            type="email"
            placeholder="nome@email.com"
            className="rounded-3"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label className="fw-semibold">Telefone:</Form.Label>
          <Form.Control
            type="text"
            placeholder="(00) 00000-0000"
            className="rounded-3"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="assunto">
          <Form.Label className="fw-semibold">Assunto:</Form.Label>
          <Form.Select className="rounded-3">
            <option>Escolha uma opção</option>
            <option>Contato</option>
            <option>Dúvidas</option>
            <option>Problemas na compra</option>
            <option>Sugestões</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="mensagem">
          <Form.Label className="fw-semibold">Mensagem:</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Insira sua mensagem"
            className="rounded-3"
          />
        </Form.Group>

        <div className="d-flex justify-content-between gap-3">
          <Button
            variant="danger"
            type="button"
            onClick={onCancel}
            className="rounded-3 px-2 py-1 px-md-4 py-md-2"
          >
            Cancelar
          </Button>
          <Button
            variant="success"
            type="submit"
            className="rounded-3 px-2 py-1 px-md-4 py-md-2"
          >
            Enviar
          </Button>
        </div>
      </Form>

      {showToast && (
        <Toast
          message="Mensagem enviada com sucesso!"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}

export default ContactForm;
