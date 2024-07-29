import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../authContext/PermissionProvider";
// import Unauthorized from "../components/errors/Unauthorized";
// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ requiredPermission }) => {
    const { userRole, hasPermission } = useAuth();

    if (!userRole) {
        return <Navigate to="allUsers" />;
    }
    if (!hasPermission(requiredPermission)) {
        // return <Navigate to="/unauthorized" />;
        // return <Unauthorized />;
        return <Navigate to={`/${userRole}`} />;
    }
    return <Outlet />;
};

export default ProtectedRoute;
