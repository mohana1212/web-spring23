import axios from "axios";
import { useEffect, useState } from "react";
const useFetch = (url) => {
        const [state, setState] = useState({
                posts: null,
                loading: false,
                error: null,
        });
        useEffect(() => {
                setState({
                        posts: null,
                        loading: true,
                        error: null,
                });
                console.log("before making API call");
                (async function fetchData(url) {
                        try {
                                console.log("Inside Fetch Data");
                                const result = await axios.get(url);
                                console.log("result", result);
                                const { data } = result;
                                setState({
                                        posts: data,
                                        loading: false,
                                        error: null,
                                });
                        } catch (error) {
                                console.log("error", error);
                                setState({
                                        posts: null,
                                        loading: false,
                                        error: error,
                                });
                        }
                })(url);

                // fetchData(url);
                console.log("After making API call");
        }, []);
        return state;
};
export default useFetch;
