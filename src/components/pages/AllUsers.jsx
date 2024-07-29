import { useLoaderData } from "react-router-dom";
import { useAuth } from "../../authContext/PermissionProvider";

const AllUsers = () => {
    const { hasPermission } = useAuth();

    const allUsers = useLoaderData();
    console.log(allUsers);

    return (
        <div className="m-7">
            <h1 className="text-3xl">All Users</h1>
            <div className="grid grid-cols-3 gap-5">
                {allUsers?.map((user) => (
                    <div
                        key={user.id}
                        className="p-3 border-2 border-blue-500 rounded-lg"
                    >
                        <p> User name: {user.name}</p>
                        <p>
                            Users Phone number: <i>{user.phone}</i>
                        </p>
                        <div className="mt-4 flex justify-between">
                            {hasPermission("editProfile") && (
                                <button className="btn btn-outline btn-sm btn-success">
                                    Edit
                                </button>
                            )}

                            {hasPermission("deletePost") && (
                                <button className="btn btn-outline btn-sm btn-error">
                                    Delete
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllUsers;
