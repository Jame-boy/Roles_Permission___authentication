// https://reactrouter.com/en/main/start/tutorial#handling-not-found-errors
import {
    isRouteErrorResponse,
    useNavigate,
    useRouteError,
} from "react-router-dom";

const ErrorPage = () => {
    // https://reactrouter.com/en/main/hooks/use-route-error
    const error = useRouteError();
    console.log(error);
    const navigate = useNavigate();

    if (isRouteErrorResponse(error)) {
        return (
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="border-l-4 border-red-400 bg-red-50 p-4 text-2xl text-red-500 w-9/12">
                    {/* <h1>Something went wrong</h1> */}
                    {/* <pre>{error.statusText || error.message || error.data}</pre> */}
                    <h1>Oops!</h1>
                    <h2>{error.status}</h2>
                    <p>{error.statusText}</p>
                    {/* {error.data?.message && <p>{error?.data?.message}</p>} */}

                    <h1 className="text-black">
                        {error.data || error.message}
                    </h1>

                    <button
                        className="btn btn-info btn-outline btn-sm"
                        onClick={() => navigate(-1)}
                    >
                        Go Back
                    </button>
                    {/* <p>{error.customData}</p> */}
                </div>
            </div>
        );
    } else {
        return (
            <div className="border-l-4 border-red-400 bg-red-50 p-4 text-2xl text-red-500 w-9/12">
                <h1>
                    Oops! This is from <b>else condition</b>
                </h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <b>This happen for Path Error</b>
                </p>
                <p>
                    <i>{error?.statusText || error?.message}</i>
                </p>
                <button
                    className="btn btn-info btn-outline btn-sm"
                    onClick={() => navigate(-1)}
                >
                    Go Back
                </button>
            </div>
        );
    }
};

export default ErrorPage;
