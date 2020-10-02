const axios = require('axios');
const baseURL = 'https://free-nba.p.rapidapi.com/';

const getAllTeams = async () => {
  const teamURL = `${baseURL}teams`
  const res = await axios({
    method: 'GET',
    url: {idURL},
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'free-nba.p.rapidapi.com',
      'x-rapidapi-key': 'SIGN-UP-FOR-KEY',
      useQueryString: true,
    },
    params: {
      page: '0',
    },
  });
  return res.data
};
