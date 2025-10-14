import { useEffect, useState } from "react";

/**
 * Displays a toast notification with the given message.
 * The toast appears for 3 seconds before automatically disappearing.
 *
 * @param {string} message - The message to display in the toast notification.
 * @param {function} onClose - Callback triggered when the toast disappears.
 */
function Toast({ message, onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return <div className="toast">{message}</div>;
}

export default Toast;