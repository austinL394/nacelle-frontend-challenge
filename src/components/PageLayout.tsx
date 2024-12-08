import { Link, useLocation } from 'react-router-dom';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const PageLayout = ({ children, title, description }: PageLayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              {title}
            </h1>
            <div className="flex gap-4">
              <Link
                to="/notifications"
                className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                  location.pathname === '/notifications'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Notifications
              </Link>
              <Link
                to="/modal"
                className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                  location.pathname === '/modal'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Modal
              </Link>
            </div>
          </div>
          {description && (
            <p className="mt-2 text-sm text-gray-600">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;