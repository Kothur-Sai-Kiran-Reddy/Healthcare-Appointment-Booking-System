import './Modal.css'

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>×</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
