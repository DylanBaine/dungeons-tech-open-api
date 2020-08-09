const axios = require('axios');

// the access token stored after successfull login
const accessToken = '';

const config = {
  headers: {
    'Authorization: 'Bearer ' + accessToken
  }
}

axios.get('https://dungeons.tech/api/v1/user', config)
