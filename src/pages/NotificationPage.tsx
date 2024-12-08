// NotificationPage.tsx
import { useState, KeyboardEvent } from "react";
import Notification from "../components/Notification";
import PageLayout from "../components/PageLayout";


import {
  deleteNotification,
  newNotification,
} from "../redux/features/notifSlice";

import { useAppDispatch, useAppSelector } from "../redux/hooks";

import IconPlus from "../icons/IconPlus";

const NotificationPage = () => {
  const notifications = useAppSelector((state) => state.notifReducer);
  const dispatch = useAppDispatch();
  const [customMessage, setCustomMessage] = useState("");

  const handleAddNotification = () => {
    const message = customMessage.trim() || "New notification...";
    dispatch(newNotification(message));
    setCustomMessage("");
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && customMessage.trim()) {
      handleAddNotification();
    }
  };

  const handleDelete = (id: string) => {
    dispatch(deleteNotification(id));
  };

  return (
    <>
      <PageLayout
        title="Notification System"
        description="Manage and view your notifications here"
      >
        {/* Control Panel */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter notification message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg 
                focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              data-testid="message-input"
            />
            <button
              className="inline-flex items-center justify-center px-6 py-2 
                bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg
                transition-colors duration-200 shadow-sm hover:shadow-md
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleAddNotification}
              disabled={!customMessage.trim()}
              data-testid="addButton"
            >
             <IconPlus />
              Add Notification
            </button>
          </div>
        </div>

        {/* Stats Section */}
        {notifications.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
            <div className="text-sm text-gray-600">
              Total Notifications: {notifications.length}
            </div>
          </div>
        )}
      </PageLayout>

      {/* Notifications Container */}
      <div 
        data-testid="notification-list" 
        className="fixed bottom-4 right-4 flex flex-col-reverse gap-4 z-50"
      >
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            {...notification}
            handleDelete={handleDelete}
            color={notification.color}
          />
        ))}
      </div>
    </>
  );
};

export default NotificationPage;