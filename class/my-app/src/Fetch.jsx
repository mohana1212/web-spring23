import React, { useEffect, useState } from "react";
import axios from "axios";

const Fetch = () => {
        const [posts, setPosts] = useState(null);
        useEffect(() => {
                const url = "https://jsonplaceholder.typicode.com/posts";
                function fetchData(url) {
                        return axios
                                .get(url)
                                .then((res) => {
                                        const { data } = res;
                                        setPosts(data);
                                })
                                .catch((err) => {
                                        console.log("error", err);
                                });
                }
                console.log("making API call");
                fetchData(url);
                console.log("After making API call");
        }, []);
        console.log("posts", posts);

        return (
                <div>
                        <h1>FETCH</h1>
                        <ul>
                                {posts?.map((post) => {
                                        return;
                                        <li>
                                                <h3>{post.id}</h3>
                                                <p>{post.body}</p>
                                        </li>;
                                })}
                        </ul>
                </div>
        );
};
export default Fetch;
