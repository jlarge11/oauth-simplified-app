const express = require('express');
const cors = require('cors');
const querystring = require('querystring');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login/oauth/access_token', async ({ body, headers }, res) => {
  let tokenResponse;

  try {
    tokenResponse = await axios.post(process.env.TOKEN_URL, body, { headers: { 'Content-Type':  'application/x-www-form-urlencoded' } });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
    return;
  }

  const tokenResponseBody = querystring.parse(tokenResponse.data);
  
  res.set('Content-Type', 'application/x-www-form-urlencoded');

  if (tokenResponseBody.error || tokenResponse.status !== 200) {
    console.error('Token response error:', tokenResponseBody.error_description);
    res.status(tokenResponse.status).send(tokenResponseBody.error_description);
  } else {
    res.send(tokenResponse.data);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
