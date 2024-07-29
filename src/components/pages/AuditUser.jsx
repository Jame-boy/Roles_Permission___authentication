const AuditUser = () => {
    // Static user data
    const user = {
        id: "12345",
        name: "John Doe",
        email: "john.doe@example.com",
        active: true,
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Audit User
                </h2>
                <div className="flex flex-col space-y-4">
                    <div>
                        <span className="font-medium text-gray-600">
                            User ID:
                        </span>
                        <p className="text-gray-800">{user.id}</p>
                    </div>
                    <div>
                        <span className="font-medium text-gray-600">Name</span>
                        <p className="text-gray-800">{user.name}</p>
                    </div>
                    <div>
                        <span className="font-medium text-gray-600">
                            Email:
                        </span>
                        <p className="text-gray-800">{user.email}</p>
                    </div>
                    <div>
                        <span className="font-medium text-gray-600">
                            Status:
                        </span>
                        <p
                            className={`text-${
                                user.active ? "green-600" : "red-600"
                            } font-semibold`}
                        >
                            {user.active ? "Active" : "Inactive"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuditUser;
