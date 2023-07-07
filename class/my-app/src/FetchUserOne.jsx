import React from "react";
import axios from "axios";
import useFetchUser from "./useFetch.js/useFetchUser";

const FetchUserOne = () => {
        const { data, loading, error } = useFetchUser(
                "https://jsonplaceholder.typicode.com/users"
        );

        if (loading)
                return (
                        <div>
                                <h2>Loading......</h2>
                        </div>
                );
        if (error)
                return (
                        <div>
                                <h2>An Error Occurred: {error?.message}</h2>
                        </div>
                );

        return (
                <div>
                        <h1>FETCH USER ONE</h1>
                        <ul>
                                {data?.map(({ id, name }) => (
                                        <li key={id}>
                                                <p>{name}</p>
                                        </li>
                                ))}
                        </ul>
                </div>
        );
};
export default FetchUserOne;
