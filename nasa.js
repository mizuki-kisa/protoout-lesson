const axios = require('axios');
const qs = require('querystring');

async function getRequest() {

  let response;
  try {
    response = await axios.get(`https://launchlibrary.net/1.3/launch/next/5`);
    console.log(response.data.launches[0].rocket);
    console.log(response.data.launches[0].missions);
    
  } catch (error) {
    console.error(error);
  }
}

getRequest();