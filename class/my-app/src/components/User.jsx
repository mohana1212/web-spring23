import React, { useState, useEffect } from "react";
import Input from "../useFetch.js/common/Input";
const User = ({ userId }) => {
        const [user, setUser] = useState(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
                const fetchUser = async () => {
                        try {
                                const response = await fetch(
                                        `https://api.example.com/users/${userId}`
                                );
                                const userData = await response.json();
                                setUser(userData);
                                setLoading(false);
                        } catch (error) {
                                console.error("Error fetching user:", error);
                                setLoading(false);
                        }
                };

                fetchUser();
        }, [userId]);

        if (loading) {
                return <div>Loading user data...</div>;
        }

        if (!user) {
                return <div>User not found.</div>;
        }

        return (
                <div>
                        <h2>{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>Username: {user.username}</p>
                        {/* Additional user data */}
                </div>
        );
};

export default User;
