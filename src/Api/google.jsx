import axios from 'axios';
import env from 'react-dotenv';

export default axios.create({
    baseURL: `https://www.googleapis.com/customsearch/v1?key=${env.GOOGLE_KEY}&cx=${env.GOOGLE_CX}&q=land&searchType=Image`,
})