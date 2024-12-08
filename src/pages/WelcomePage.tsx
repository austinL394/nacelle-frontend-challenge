import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-gray-900 to-black flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Take-Home Assignment
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-12">
          Welcome to my solution for the technical assessment. <br /> Please
          select a challenge below to review.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/notifications"
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Challenge #1 - Notifications
          </Link>
          <Link
            to="/modal"
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Challenge #2 - Modal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
