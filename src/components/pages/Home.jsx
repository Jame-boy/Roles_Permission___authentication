import { useLoaderData } from "react-router-dom";

const Home = () => {
    const allUser = useLoaderData();
    console.log(allUser);

    return (
        <>
            <h3>Home</h3>
            <p>allUser number = {allUser?.length}</p>
            <p>Type of allUsers = {typeof allUser}</p>
        </>
    );
};

//! https://youtu.be/f_u_ivHdoAs?si=Qhja6TYiNP_iM_pP
Home.loader = async () => {
    // https://jsonplaceholder.typicode.com/
    try {
        // eslint-disable-next-line no-unused-vars
        const rightURL = "https://jsonplaceholder.typicode.com/users";
        const wrongURL = "https://placeholder.typicode.com/users";
        const allUsers = await fetch(wrongURL);

        return allUsers;
    } catch (error) {
        throw new Response("", {
            status: 404,
            statusText:
                "(Home.loader) Not Found Users Data in Home Component, (manually throw a error... -_- in catch)",
            // customData: "test ", not allowed
        });
    }
};

export default Home;
