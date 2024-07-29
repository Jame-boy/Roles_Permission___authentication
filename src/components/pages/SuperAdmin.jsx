import { Link } from "react-router-dom";

const SuperAdmin = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-center p-6">
            <h1 className="text-5xl font-extrabold text-blue-700 mb-6">
                Super Admin Dashboard
            </h1>
            <p className="text-xl text-gray-800 mb-6">
                Welcome to the Super Admin dashboard. Here you can manage all
                aspects of the application.
            </p>

            <div className="flex space-x-4">
                <Link
                    to="/manage-users"
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    Manage Users
                </Link>
                <Link
                    to="/site-settings"
                    className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                    Site Settings
                </Link>
                <Link
                    to="/analytics"
                    className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
                >
                    View Analytics
                </Link>
            </div>
        </div>
    );
};

export default SuperAdmin;
