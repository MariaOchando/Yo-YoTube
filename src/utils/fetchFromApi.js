import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY, //variable name must be REACT_APP_API_KEY.
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

//const response = await axios.get...
//const {data} we can immediately destructure the data we get from the response.
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}