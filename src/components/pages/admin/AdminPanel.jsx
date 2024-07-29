import { Link, Outlet } from "react-router-dom";

const AdminPanel = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
            <header className="bg-gray-800 text-white p-4">
                <h1 className="text-3xl font-bold">Admin Panel</h1>
            </header>

            <div className="flex flex-grow">
                <nav className="w-64 bg-white shadow-md p-4">
                    <ul className="space-y-4">
                        <li>
                            <Link to="/admin/dashboard" className="text-blue-600 hover:underline">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/users" className="text-blue-600 hover:underline">
                                Manage Users
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/settings" className="text-blue-600 hover:underline">
                                Settings
                            </Link>
                        </li>
                    </ul>
                </nav>

                <main className="flex-grow p-6">
                    <h2 className="text-2xl font-semibold mb-4">Welcome to the Admin Panel</h2>
                    <p className="text-lg mb-4">Use the sidebar to navigate through the different admin sections.</p>
                    {/*//! Main content goes here */}
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminPanel;
