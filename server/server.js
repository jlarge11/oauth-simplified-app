const express = require('express');
const cors = require('cors');
const querystring = require('querystring');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get('/login/oauth/access_token', (req, res) => {
  const data = { message: 'Hello from Express!' };
  const encodedData = querystring.stringify(data);

  res.set('Content-Type', 'application/x-www-form-urlencoded');
  res.send(encodedData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
