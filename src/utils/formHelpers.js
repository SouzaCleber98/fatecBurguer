/**
 * Limpa todos os campos de um formulário
 * @param {React.RefObject} formReference - Referência do formulário
 */
const clearFormFields = (formReference) => {
  if (formReference?.current) {
    formReference.current.reset();
  }
};

/**
 * Exibe uma confirmação antes de enviar o formulário
 * @param {string} message - Mensagem de confirmação
 * @returns {boolean} - Retorna true se confirmado
 */
const confirmSubmit = (message = "Deseja realmente enviar?") => {
  return window.confirm(message);
};

/**
 * Manipula o submit do formulário de contato
 * @param {Event} event - Evento de submit
 * @param {React.RefObject} formReference - Referência do formulário
 * @param {Function} callback - Callback de sucesso
 */
const handleFormSubmit = (event, formReference, callback) => {
  event.preventDefault();

  if (!confirmSubmit("Deseja realmente enviar a mensagem?")) {
    return;
  }

  clearFormFields(formReference);

  if (callback) {
    callback();
  }
};

export { clearFormFields, confirmSubmit, handleFormSubmit };
