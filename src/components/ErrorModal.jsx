function ErrorModal({ isOpen, message, onClose }) {
  if (!isOpen) return null;

  return (
    <div>
      <h2>Error</h2>
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ErrorModal;
