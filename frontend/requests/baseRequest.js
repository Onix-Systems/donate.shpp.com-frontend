import axios from 'axios';
import querystring from 'querystring';

const errorHandler = (error) => {
    throw error;
};

export const onBeforeRequest = () => {

};

export const onAfterRequest = () => {

};

const createRequest = (axiosInstance, beforeRequest = () => {}, afterRequest = () => {}) => {
    const get = (url, config) => {
        beforeRequest();
        return axiosInstance
            .get(url, config)
            .catch(errorHandler)
            .finally(afterRequest);
    };

    const post = (url, data, config) => {
        beforeRequest();
        return axiosInstance
            .post(url, querystring.stringify(data), config)
            .catch(errorHandler)
            .finally(afterRequest);
    };

    const put = (url, data, config) => {
        beforeRequest();
        return axiosInstance
            .put(url, querystring.stringify(data), config)
            .catch(errorHandler)
            .finally(afterRequest);
    };

    const patch = (url, data, config) => {
        beforeRequest();
        return axiosInstance
            .patch(url, querystring.stringify(data), config)
            .catch(errorHandler)
            .finally(afterRequest);
    };

    const del = (url, config) => {
        beforeRequest();
        return axiosInstance
            .delete(url, config)
            .catch(errorHandler)
            .finally(afterRequest);
    };

    const request = (config) => {
        beforeRequest();
        return axios
            .request(config)
            .catch(errorHandler)
            .finally(afterRequest);
    };

    return {
        get,
        post,
        put,
        patch,
        del,
        request
    };
};

const usualAxiosInstance = axios.create(
    {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        },
    }
);

export {createRequest};

export default createRequest(usualAxiosInstance, onBeforeRequest, onAfterRequest);
