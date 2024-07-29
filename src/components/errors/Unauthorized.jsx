const Unauthorized = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-center">
            <h1 className="text-4xl font-bold text-red-600 mb-4">
                Unauthorized
            </h1>
            <p className="text-lg text-gray-700 mb-4">
                You do not have permission to access this page.
            </p>
            <p className="text-md text-gray-500 mb-6">
                If you think this is a mistake, please contact your
                administrator.
            </p>
        </div>
    );
};

export default Unauthorized;
