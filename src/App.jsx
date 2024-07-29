import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
import { PermissionProvider } from "./authContext/PermissionProvider";

function App() {
    return (
        <>
            <PermissionProvider>
                <RouterProvider router={Router} />
            </PermissionProvider>
        </>
    );
}

export default App;
