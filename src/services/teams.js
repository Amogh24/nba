const axios = require('axios');
const baseURL = 'https://free-nba.p.rapidapi.com/';

const getAllTeams = async () => {
  const teamURL = `${baseURL}teams`;
  console.log(teamURL);
  const res = await axios({
    method: 'GET',
    url: teamURL,
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'free-nba.p.rapidapi.com',
      'x-rapidapi-key': 'c09193bc19msh82c9eb7f1878346p10e009jsna3255bcb7d88',
      useQueryString: true,
    },
    params: {
      page: '0',
    },
  });
  return res.data;
};

export default { getAllTeams };
