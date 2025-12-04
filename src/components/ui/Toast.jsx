import { useEffect, useState } from "react";
import { Toast as BootstrapToast, ToastContainer } from "react-bootstrap";

/**
 * Displays a toast notification with the given message.
 * The toast appears for 3 seconds before automatically disappearing.
 *
 * @param {string} message - The message to display in the toast notification.
 * @param {function} onClose - Callback triggered when the toast disappears.
 */
function Toast({ message, onClose }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <ToastContainer position="bottom-center" className="p-3">
      <BootstrapToast
        show={show}
        onClose={() => {
          setShow(false);
          onClose?.();
        }}
        autohide
        delay={3000}
        bg="dark"
      >
        <BootstrapToast.Body className="text-white">
          {message}
        </BootstrapToast.Body>
      </BootstrapToast>
    </ToastContainer>
  );
}

export default Toast;
