import axios from 'axios';
const testLink = 'http://localhost:9000';
const productionlink = 'https://isaias-galery-back-end.onrender.com'; 

export default axios.create({
    baseURL: testLink
});