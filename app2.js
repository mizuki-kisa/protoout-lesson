const axios = require('axios');
const qs = require('querystring');

async function getRequest() {

  let response;
  try {
    response = await axios.get(`http://127.0.0.1:5500/docs/data.json`);
    console.log(response.data);
    
  } catch (error) {
    console.error(error);
  }
}

getRequest();