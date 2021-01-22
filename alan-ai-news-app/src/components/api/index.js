import axios from 'axios';

// const api = 'e8251a4d182d4a50944074faf231d6f0'
const api = '8ccdf61d095842fbba3ffe62c725c144'
const url = 'https://newsapi.org/v2';

export const fetchSources = async () => {
    const requestSource = `sources?apiKey=`;
    try {
        const { data: { sources } } = await axios.get(`${url}/${requestSource}${api}`);

        return sources.map((source) => source);
    } catch (error) {
        return error;
    }
};

export const fetchNews = async (request) => {
    try {
        const { data: { articles } } = await axios.get(`${url}/${request.category}?${request.query}&pageSize=${request.results}&apiKey=${api}`);

        return articles.map((article) => (article));
    } catch (error) {
        return error;
    }
};