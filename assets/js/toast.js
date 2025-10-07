/**
 * Displays a toast notification with the given message.
 * The toast appears for 3 seconds before automatically disappearing.
 *
 * @param {string} message - The message to display in the toast notification.
 */
export default function generateToast(message) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        document.body.removeChild(toast);
    }, 3000); // duração do toast
}