import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import ErrorPage from "../components/errors/ErrorPage";
import AdminPanel from "../components/pages/admin/AdminPanel";
import SuperAdmin from "../components/pages/SuperAdmin";
import AuditUser from "../components/pages/AuditUser";
import Home from "../components/pages/Home";
import ProtectedRoute from "./ProtectedRoute ";
import AllUsers from "../components/pages/AllUsers";
import Dashboard from "../components/pages/admin/Dashboard";
import ManageUsers from "../components/pages/admin/ManageUsers";
import ErrorPage2 from "../components/errors/ErrorPage2";

const userLoader = async (wantToShowError = true) => {
    // https://jsonplaceholder.typicode.com/
    try {
        const allUsers = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        //! we manually throw a error
        if (wantToShowError) {
            throw new Response("", {
                status: 404,
                statusText:
                    "Not Found All Users Data (manually throw a error... -_-)",
                // customData: "test ", not allowed
            });
        }
        return allUsers;
    } catch (error) {
        throw new Response("", {
            status: 404,
            statusText:
                "Not Found All Users Data (manually throw a error... -_-)",
            // customData: "test ", not allowed
        });
    }
};

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />, //* Global error handler
        // https://reactrouter.com/en/main/start/tutorial#pathless-routes
        children: [
            {
                errorElement: <ErrorPage2 />, //* Error handler for this level (when throw error)
                children: [
                    // {
                    //     path: "/unauthorized",
                    //     element: <Unauthorized />,
                    // },
                    {
                        // https://reactrouter.com/en/main/start/tutorial#index-routes
                        index: true,
                        element: <Home />,
                        loader: Home.loader,
                    },
                    //! This is SuperAdmin Protected Route
                    {
                        element: (
                            <ProtectedRoute requiredPermission="superAdmin" />
                        ),
                        children: [
                            { path: "superAdmin", element: <SuperAdmin /> },
                        ],
                    },
                    //!---------------- This is Admin Protected Route ---------------
                    {
                        element: <ProtectedRoute requiredPermission="admin" />,
                        children: [
                            {
                                path: "admin",
                                element: <AdminPanel />, //! here has Outlet
                                // Error won't show in Outlet
                                // errorElement: <ErrorPage2 />,
                                // pathless Route
                                children: [
                                    {
                                        errorElement: <ErrorPage2 />, //* Error handler specific to admin routes(when throw error).
                                        // if we omitted both ErrorPage here, then it execute the nearest parents ErrorPage on above it and so on......
                                        children: [
                                            {
                                                path: "dashboard",
                                                element: <Dashboard />,
                                                loader: () => userLoader(true),
                                            },
                                            {
                                                path: "users",
                                                element: <ManageUsers />,
                                            },
                                            //! Catch-all route for admin sub-routes (when path error)
                                            {
                                                path: "*",
                                                element: <ErrorPage />,
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    //! This is AuditUser Protected Route
                    {
                        element: (
                            <ProtectedRoute requiredPermission="auditUser" />
                        ),
                        children: [
                            { path: "auditUser", element: <AuditUser /> },
                        ],
                    },
                    {
                        path: "allUsers",
                        element: <AllUsers />,
                        loader: () => userLoader(false),
                    },
                ],
            },
            //* Path error (if i won't give it then global error page will show)
            {
                path: "*",
                //? if we use it then error doesn't occur in Outlet,
                // loader: () => userLoader(true),
                element: <ErrorPage />,
            },
        ],
    },
]);

export default Router;
