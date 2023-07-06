import { useEffect, useState } from "react";
import axios from "axios";
const useFetchUser = (url) => {
        const [users, setUsers] = useState(null);
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
                //const url = "https://jsonplaceholder.typicode.com/users";
                (async function fetchUserData(url) {
                        try {
                                console.log("Inside fetch data");
                                const result = await axios.get(url);
                                console.log("result", result);
                                const { data } = result;
                                setUsers(data);
                        } catch (err) {
                                console.log("error", error);
                                setError(error);
                        } finally {
                                setLoading(false);
                        }
                })(url);
        }, []);
        // fetchData(url);
        //         console.log("After making API call");
        // }, []);
        return State;
};
export default useFetchUser;
