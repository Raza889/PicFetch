import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyAgWGPWqZQXsPSUT0WRUTxZYzp9_CxrSg0&cx=016836439242425542395:lfrezsi2kcr&q=land&searchType=Image',
})