import { FC } from "react";
import { INotification } from "../models/INotification";
import IconXClose from "../icons/IconXClose";

interface NotificationProps extends INotification {
  handleDelete: (id: string) => void;
  color: string;
}

const Notification: FC<NotificationProps> = ({
  id,
  message,
  handleDelete,
  color,
}) => {
  return (
    <div
      className="w-96 relative bg-white shadow-lg rounded-lg 
        transition-all duration-200 hover:shadow-xl group
        animate-slideIn overflow-hidden
        cursor-pointer
        select-none
        "
      onClick={() => handleDelete(id)}
      data-testid="notification"
      style={{
        borderLeft: `4px solid ${color}`,
      }}
    >
      {/* Main Content */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3 flex-1">
          {/* Status Dot */}
          <div className="w-2 h-2 rounded-full shrink-0" />

          {/* Message */}
          <span
            className="text-gray-700 text-sm font-medium"
            style={{ color: "inherit" }}
          >
            {message}
          </span>
        </div>

        {/* Close Icon */}
        <button
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200
            ml-2 text-gray-400 hover:text-gray-600"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(id);
          }}
        >
          <IconXClose />
        </button>
      </div>
    </div>
  );
};

export default Notification;
