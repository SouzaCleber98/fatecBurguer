import type { FormEvent, RefObject } from "react";

type Event = FormEvent<HTMLFormElement>;
type FormReference = RefObject<HTMLFormElement | null>;
type Callback = () => void;

const clearFormFields = (formReference: FormReference) => {
  formReference.current?.reset();
};

const confirmSubmit = (message = "Deseja realmente enviar?") => {
  return window.confirm(message);
};

const handleFormSubmit = (
  event: Event,
  formReference: FormReference,
  callback?: Callback
) => {
  event.preventDefault();

  if (!confirmSubmit("Deseja realmente enviar a mensagem?")) {
    return;
  }

  clearFormFields(formReference);

  callback?.();
};

export { clearFormFields, confirmSubmit, handleFormSubmit };
