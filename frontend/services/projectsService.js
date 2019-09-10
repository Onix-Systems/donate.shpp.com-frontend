import baseRequest from '../requests/baseRequest';

const fetchProjects = () => {
    return baseRequest.get('https://jsonplaceholder.typicode.com/posts');
};

export default {
    fetchProjects
};
