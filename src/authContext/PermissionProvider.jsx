import { createContext, useContext, useEffect, useState } from "react";
import { rolesPermissions } from "../../public/rolesPermissions";

const PermissionContext = createContext();

// eslint-disable-next-line react/prop-types
export const PermissionProvider = ({ children }) => {
    //! using the localStorage to prevent clear data when user will refresh
    const storedRole = localStorage.getItem("role") || "";
    const [userRole, setUserRole] = useState(storedRole); // Example user role

    //just for console log
    useEffect(() => {
        console.log("In PermissionProvider user role=", userRole);
    }, [userRole]);

    const hasPermission = (permission) => {
        return rolesPermissions[userRole]?.includes(permission);
    };

    return (
        <PermissionContext.Provider
            value={{ userRole, setUserRole, hasPermission }}
        >
            {children}
        </PermissionContext.Provider>
    );
};

export const useAuth = () => useContext(PermissionContext);
