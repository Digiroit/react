import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url, method='GET', reqData={}, header={}) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        if (method === 'GET')
            axios.get(url).then(res => res.body).catch(err => {
                console.log(err);
            });
        else if (method === 'POST')
            axios.post(url, reqData).then(res => res.body).catch(err => {
                console.log(err);
            });
    }, [url]);

    return [data];
};

export default useAxios;