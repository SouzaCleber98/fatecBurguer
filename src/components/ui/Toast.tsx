import { useEffect, useState, useCallback } from 'react';
import { Toast as BootstrapToast, ToastContainer } from 'react-bootstrap';

// ---------- Types ----------
type ToastProps = {
  message: string;
  onClose?: () => void;
  duration?: number;
};
//----------------------------------

function Toast({ message, onClose, duration = 3000 }: ToastProps) {
  const [show, setShow] = useState(true);

  const closeToast = useCallback(() => {
    setShow(false);
    onClose?.();
  }, [onClose]);

  useEffect(() => {
    const timer = setTimeout(closeToast, duration);

    return () => clearTimeout(timer);
  }, [closeToast, duration]);

  return (
    <ToastContainer position="bottom-center" className="p-3 position-fixed">
      <BootstrapToast show={show} onClose={closeToast} bg="dark">
        <BootstrapToast.Body className="text-white">
          {message}
        </BootstrapToast.Body>
      </BootstrapToast>
    </ToastContainer>
  );
}

export default Toast;
