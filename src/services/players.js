const axios = require('axios')
const baseURL = 'https://free-nba.p.rapidapi.com/'

const getAllPlayers=() => {
    

    axios({
        "method":"GET",
        "url":"https://free-nba.p.rapidapi.com/players",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"free-nba.p.rapidapi.com",
        "x-rapidapi-key":"13625ecbd1mshcf2097cec4a1d8fp129ce8jsnb90b82051550",
        "useQueryString":true
        },"params":{
        "page":"0",
        "per_page":"25"
        }
        })
        .then((response)=>{
          console.log(response)
        })
        .catch((error)=>{
          console.log(error)
        })
}
export default{
    getAllPlayers
}