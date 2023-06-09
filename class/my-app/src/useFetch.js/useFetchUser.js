import { useEffect, useState } from "react";
import axios from "axios";

const useFetchUser = (url) => {
        const [state, setState] = useState({
                data: null,
                loading: false,
                error: null,
        });

        useEffect(() => {
                setState({ data: null, loading: true, error: null });
                console.log("Before making an API call");

                (async function fetchUserData(url) {
                        try {
                                console.log("Inside fetch data");
                                const result = await axios.get(url);
                                console.log("result", result);
                                const { data } = result;
                                setState({
                                        data: data,
                                        loading: false,
                                        error: null,
                                });
                        } catch (error) {
                                console.log("error", error);
                                setState({
                                        data: null,
                                        loading: false,
                                        error: error,
                                });
                        }
                })(url);
                console.log("After making API call");
        }, []);
        // fetchData(url);
        //         console.log("After making API call");
        // }, []);
        return state;
};
export default useFetchUser;
