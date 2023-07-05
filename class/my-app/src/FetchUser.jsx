import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchUser = () => {
        const [users, setUsers] = useState(null);
        useEffect(() => {
                const url = "https://jsonplaceholder.typicode.com/users";
                function fetchUserData(url) {
                        return axios
                                .get(url)
                                .then((res) => {
                                        const { data } = res;
                                        setUsers(data);
                                })
                                .catch((err) => {
                                        console.log("error", err);
                                });
                }
                console.log("making API call");
                fetchUserData(url);
                console.log("After making API call");
        }, []);
        console.log("Users", users);

        return (
                <div>
                        <h1>FETCHUSER</h1>
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
export default FetchUser;
