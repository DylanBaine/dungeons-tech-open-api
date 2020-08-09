const axios = require('axios');

const form = document.getElementById('form')

form.addEventListener('submit', function(e) {
  e.preventDefault()
  
  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  
  const formData = {
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  }
  
  axios.post("https://dungeons.tech/api/v1/login", formData, config)
    .then(function(response) {
      // store the response.data.access_token in a cookie to send along as a header later
      console.log(response.data)
    })
    .catch(function(error) {
      // the error message will be in the error.response.data.message property
      console.log(error.reponse)
    })
  
})
