import axios from 'axios';
import env from "react-dotenv";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: env.UNSPLASH_KEY,
  }
})