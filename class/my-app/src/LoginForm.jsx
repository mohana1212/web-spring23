import React, { Fragment, useState } from "react";
import Button from "./useFetch.js/common/Button";
const LoginForm = () => {
        const [form, setForm] = useState({
                email: " ",
                password: " ",
        });

        const handleChange = (event) => {
                const { id, value } = event.target;
                setForm((form) => ({
                        form,
                        [id]: value,
                }));
        };

        function handleLogin(event) {
                // Input validation
                const { email, password } = form; //  form is an object containing the form data

                if (email.trim() === " ") {
                        alert("Please enter your email.");
                        return;
                }

                if (password.length < 5) {
                        alert("Password must be at least 5 characters long.");
                        return;
                }

                // API submission or further logic
                alert(`email is ${email} and password is ${password}`);
        }

        return (
                <div className="flex justify-center">
                        <div className="mt-10 text-center border-gray-200 border-2 rounded-md p-4 px-8 sm:w-8/12 sm:w-4/12">
                                <h1 className="text-xl text-indigo-500 mb-4 font-bold">
                                        Login
                                </h1>
                                <form
                                        onSubmit={handleLogin}
                                        className="flex flex-col gap-4"
                                >
                                        <div className="text-left flex justify-between">
                                                <label htmlFor="email">
                                                        Email:
                                                </label>
                                                <input
                                                        className="border-2 border-black rounded-md px-1 py-1"
                                                        type="email"
                                                        id="email"
                                                        placeholder="user@domain.com"
                                                        required
                                                        onChange={handleChange}
                                                />
                                        </div>
                                        <div className="text-left flex justify-between">
                                                <label htmlFor="password">
                                                        Password:
                                                </label>
                                                <input
                                                        className="border-2 border-black rounded-md px-1 py-1"
                                                        type="password"
                                                        id="password"
                                                        required
                                                        onChange={handleChange}
                                                />
                                        </div>
                                        <Button type="submit">Login</Button>
                                        <Button secondary>Go back</Button>
                                </form>
                        </div>
                </div>
        );
};

export default LoginForm;
