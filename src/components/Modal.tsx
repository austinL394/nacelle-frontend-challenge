import { FC, useEffect } from "react";
import { ModalProps } from "../models/IModal";

const Modal: FC<ModalProps> = ({ title, children, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 flex justify-center items-center" 
      style={{ visibility: isOpen ? 'visible' : 'hidden' }} 
      data-testid="modal"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-30 z-0" 
        onClick={onClose} 
        data-testid="backdrop"
      ></div>

      {/* Modal */}
      <div className="bg-white flex flex-col min-w-96 min-h-96 border border-gray-200 rounded-lg shadow-lg p-4 z-10">
        {/* Header */}
        <div className="w-full flex items-center justify-between mb-4">
          <div className="font-bold text-2xl text-gray-900 flex-grow text-center">
            {title}
          </div>
          <button 
            className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200" 
            onClick={onClose} 
            data-testid="closeButton"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow flex flex-col items-center justify-center text-gray-900">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;