import axios from 'axios';

const request = {
    url: 'http://localhost:3001/',
    async get() {
        let response = await axios.get(this.url);
        return response.data;
    },
    async post(data) {
        let response = await axios.post(this.url, data);
        return response.data;
    },
    async put(id, data) {
        let response = await axios.put(this.url + id, data);
        return response.data;
    },
    async delete(id) {
        let response = await axios.delete(this.url + id);
        return response.data;
    },
};

export default request;
