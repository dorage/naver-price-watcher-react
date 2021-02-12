import Axios from 'axios';

const axios = new Axios.create({
    baseURL: 'http://localhost:4000/api',
});

const mainApi = {
    getTerms: () => axios.get('/term'),
    getTasks: (term) => axios.get(`/task?term=${term}`),
    getCrawl: (term, date) => axios.get(`/crawl?term=${term}&date=${date}`),
    postCrawl: () => {},
};

export default mainApi;
