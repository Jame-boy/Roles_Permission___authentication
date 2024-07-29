import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../authContext/PermissionProvider";

const Navbar = () => {
    // const navigate = useNavigate();
    const { userRole, setUserRole } = useAuth();
    // console.log(user);

    const menuItems = [
        {
            id: 1,
            path: "/",
            label: "Home",
        },

        {
            id: 2,
            path: "/superAdmin",
            label: "SuperAdmin",
        },

        {
            id: 3,
            path: "/admin",
            label: "Admin",
        },

        {
            id: 4,
            path: "/auditUser",
            label: "AuditUser",
        },

        {
            id: 5,
            path: "/allUsers",
            label: "AllUsers",
        },

        {
            id: 6,
            path: "/nonExistingPath",
            label: "ErrorPage",
        },
    ];

    const navigate = useNavigate();
    const handleChange = (e) => {
        const newRole = e.target.value;
        setUserRole(newRole);
        localStorage.setItem("role", newRole);
        navigate(`/${newRole}`); // Navigate to the new role's path
    };

    return (
        <div>
            <div className="navbar  bg-primary text-base-200 z-10 font-semibold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-zinc-500 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    <NavLink to={item.path}>
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                            {/* <li>
                                {!user ? (
                                    <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
                                        {selectedLanguage == "engLang" ? csvData[125]?.engLang : csvData[125]?.jpLang}
                                    </NavLink>
                                ) : (
                                    <p onClick={handleLogout}>{selectedLanguage == "engLang" ? csvData[126]?.engLang : csvData[126]?.jpLang}</p>
                                )}
                            </li> */}
                        </ul>
                    </div>
                    <div>
                        <select
                            //
                            value={userRole}
                            onChange={handleChange}
                            className="text-black"
                        >
                            <option value="">Select a role</option>
                            <option value="superAdmin">SuperAdmin</option>
                            <option value="admin">Admin</option>
                            <option value="auditUser">AuditUser</option>
                        </select>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <NavLink to={item.path}>{item.label}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;
