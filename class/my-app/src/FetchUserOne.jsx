import React, { useEffect, useState } from "react";
import axios from "axios";
import useFetchUser from "./useFetch.js/useFetchUser";

const FetchUserOne = () => {
        // const [users, setUsers] = useState(null);
        const url = "https://jsonplaceholder.typicode.com/users";
        const { users, loading, error } = useFetchUser(url);
        console.log("Users", users);

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
                                {users?.map((user) => {
                                        return (
                                                <li key={user.id}>
                                                        <h3>{user.id}</h3>
                                                        <h2>{user.name}</h2>
                                                        <h2>{user.username}</h2>
                                                        <h2>{user.email}</h2>

                                                        <h2>
                                                                {
                                                                        user
                                                                                .address
                                                                                .street
                                                                }
                                                        </h2>
                                                        <h2>
                                                                {
                                                                        user
                                                                                .address
                                                                                .suite
                                                                }
                                                        </h2>
                                                        <h2>
                                                                {
                                                                        user
                                                                                .address
                                                                                .city
                                                                }
                                                        </h2>
                                                        <h2>
                                                                {
                                                                        user
                                                                                .address
                                                                                .zipcode
                                                                }
                                                        </h2>
                                                        <h2>
                                                                {
                                                                        user
                                                                                .address
                                                                                .geo
                                                                                .lat
                                                                }
                                                        </h2>
                                                        <h2>
                                                                {
                                                                        user
                                                                                .address
                                                                                .geo
                                                                                .lng
                                                                }
                                                        </h2>
                                                        <h2>{user.phone}</h2>
                                                        <h2>{user.website}</h2>
                                                        <h2>
                                                                {
                                                                        user
                                                                                .company
                                                                                .name
                                                                }
                                                        </h2>
                                                        <h2>
                                                                {
                                                                        user
                                                                                .company
                                                                                .catchPhrase
                                                                }
                                                        </h2>
                                                        <h2>
                                                                {
                                                                        user
                                                                                .company
                                                                                .bs
                                                                }
                                                        </h2>
                                                </li>
                                        );
                                })}
                        </ul>
                </div>
        );
};
export default FetchUserOne;
