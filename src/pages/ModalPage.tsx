import { useState } from "react";
import Modal from "../components/Modal";
import PageLayout from "../components/PageLayout";

import IconPlus from "../icons/IconPlus";

const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <PageLayout
      title="Modal System"
      description="Example of a modal implementation"
    >
      {/* Control Panel */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <button
          className="inline-flex items-center justify-center px-6 py-2 
            bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg
            transition-colors duration-200 shadow-sm hover:shadow-md
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={() => setIsOpen(true)}
          data-testid="openButton"
        >
          <IconPlus />
          Open Modal
        </button>
      </div>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} title="Welcome">
        <div className="p-6 w-full" data-testid="content">
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              This is a sample modal content area. You can customize this section
              to display any type of content you need.
            </p>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                Try clicking outside the modal or pressing the ESC key to close it.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 flex justify-end gap-3 w-full">
          <button
            type="button"
            className="px-4 py-2 bg-gray-100 text-gray-700
              rounded-md border border-gray-300 
              hover:bg-gray-200 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
              transition-colors duration-200"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-blue-600 text-white rounded-md 
              hover:bg-blue-700 focus:outline-none focus:ring-2 
              focus:ring-offset-2 focus:ring-blue-500
              transition-colors duration-200"
            onClick={onClose}
          >
            Confirm
          </button>
        </div>
      </Modal>
    </PageLayout>
  );
};

export default ModalPage;