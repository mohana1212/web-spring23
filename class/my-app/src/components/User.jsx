import React, { useState } from "react";
import Button from "./Button";
const User = () => {
        const [userId, setUserId] = useState(0);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);
        const [userData, setUserData] = useState(null);

        const handleInputChange = (event) => {
                setUserId(event.target.value);
        };

        const fetchData = () => {
                if (userId === 0) {
                        return; // Don't make an API call if user id to 0
                }

                setLoading(true);
                setError(null);
                setUserData(null);

                fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                        .then((response) => response.json())
                        .then((data) => {
                                setLoading(false);
                                setUserData(data);
                        })
                        .catch((error) => {
                                setLoading(false);
                                setError(error.message);
                        });
        };

        return (
                <div>
                        <h1 className="text-xl text-black-500 mb-4 font-bold ">
                                Enetr User By Id
                        </h1>

                        <br />

                        <label>
                                Enter User Id:
                                <input
                                        className="border-2 border-black rounded-md px-1 py-1"
                                        type="text"
                                        value={userId}
                                        onChange={handleInputChange}
                                />
                        </label>

                        <Button onClick={fetchData}>
                                Click to Fetch User Data
                        </Button>

                        <div>
                                <h2>User Data</h2>
                                {loading ? <p>Loading...</p> : null}
                                {error ? <p>Error: {error}</p> : null}
                                {userData ? (
                                        <div>
                                                <p>User Id: {userData.id}</p>
                                                <p>Name: {userData.name}</p>
                                                <p>
                                                        Username:{" "}
                                                        {userData.username}
                                                </p>
                                                <p>Email: {userData.email}</p>
                                        </div>
                                ) : null}
                        </div>
                </div>
        );
};

export default User;
