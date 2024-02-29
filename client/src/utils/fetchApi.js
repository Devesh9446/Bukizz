import axios from "axios";
// import server from "../auth/apple";
const server = process.env.SERVER_URL;

export const fetchApi = async (endpoint, data, method = 'POST', options = {}) => {
    return new Promise((res, rej) => {
        var myHeaders = new Headers();
        var formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }
        var requestOptions = {
            method: method,
            headers: myHeaders,
            body: formData,
            redirect: 'follow',
            ...options,
        };
        fetch(server + endpoint, requestOptions)
            .then(response => response.json())
            .then(result => {
                res(result);
            })
            .catch(error => {
                rej(error);
            });
    });
};
export const fetchApi2 = async (endpoint, data, method = 'POST', options = {}) => {
    return new Promise((res, rej) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: method,
            headers: myHeaders,
            body: JSON.stringify(data),
            redirect: 'follow',
            ...options,
        };
        fetch(server + endpoint, requestOptions)
            .then(response => response.json())
            .then(result => {
                res(result);
            })
            .catch(error => {
                rej(error);
            });
    });
};


export const axiosApi = async (endpoint, data = {}, options = {}) => {
    return new Promise((res, rej) => {
        let Server2 = server + endpoint;
        // axios.defaults.withCredentials = true;
        axios.post(Server2, data, options)
            .then(result => {
                // console.log(result.data);
                if (result.statusCode == 401) {
                    console.log("unauthorised user", result);
                    window.location.href = "/login"
                }
                res(result.data);
            })
            .catch(error => {
                // console.error('Axios API Error:', error.response);
                // console.error('Error Message:', error.response?.data?.message);

                alert(error.response?.data?.message || "An unknown error occurred.");
                rej(error);

            });
    });
};