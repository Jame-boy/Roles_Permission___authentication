import { useRouteError } from "react-router-dom";

const ErrorPage2 = () => {
    // https://reactrouter.com/en/main/hooks/use-route-error
    const error = useRouteError();

    return (
        <div className="border-l-4 border-red-400 bg-red-50 p-4 text-2xl text-red-500 w-9/12">
            <h1>
                Oops! This is
                <b>
                    <i>ErrorPage2</i>
                </b>
            </h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                It is happen for loader function, <b>we throw it manually</b>
            </p>

            <h2>{error?.status}</h2>
            <p className="mt-7">
                <i>{error?.statusText}</i>
            </p>
        </div>
    );
};

export default ErrorPage2;
