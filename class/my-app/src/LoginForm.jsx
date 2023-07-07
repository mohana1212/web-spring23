import React, { Fragment, useState } from "react";

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
        }

        return (
                <Fragment>
                        <h1>Login</h1>
                        <form onSubmit={handleLogin}>
                                <div>
                                        <label htmlFor="email">Email:</label>
                                        <input
                                                type="email"
                                                id="email"
                                                placeholder="user@domain.com"
                                                required
                                                onChange={handleChange}
                                        />
                                </div>
                                <div>
                                        <label htmlFor="password">
                                                Password:
                                        </label>
                                        <input
                                                type="password"
                                                id="password"
                                                required
                                                onChange={handleChange}
                                        />
                                </div>
                                <button type="submit">Login</button>
                                <button>Go back</button>
                        </form>
                </Fragment>
        );
};

export default LoginForm;
