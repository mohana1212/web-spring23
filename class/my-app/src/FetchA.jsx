import React, { useEffect, useState } from "react";
import axios from "axios";
import useFetch from "./useFetch.js/useFetch";
// function fetchData(url) {
//     return axios
//             .get(url)
//             .then((res) => {
//                     const { data } = res;
//                     setPosts(data);
//             })
//             .catch((err) => {
//                     console.log("error", err);
//             });
// }
const FetchA = () => {
        const url = "https://jsonplaceholder.typicode.com/posts";

        const { posts, loading, error } = useFetch(url);
        console.log("posts", posts);

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
                        <h1>FETCH</h1>
                        <ul>
                                {posts?.map((post) => {
                                        return (
                                                <li key={post.id}>
                                                        <h3>{post.id}</h3>
                                                        <p>{post.body}</p>
                                                </li>
                                        );
                                })}
                        </ul>
                </div>
        );
};
export default FetchA;
