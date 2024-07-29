import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const CallbackDev = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const [authCode, setAuthCode] = useState(null);
  const [tokenResponse, setTokenResponse] = useState(null);

  useEffect(() => {
    async function getAccessToken() {
      await axios.post(process.env.REACT_APP_TOKEN_URL, {
        grant_type: 'authorization_code',
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        redirect_uri: process.env.REACT_APP_AUTH_SERVER_REDIRECT_URI,
        code: authCode,
      });
  }

    const authStateFromSession = sessionStorage.getItem('auth_state');
    const authStateFromQuery = query.get('state');

    if (authStateFromSession !== authStateFromQuery) {
      navigate('/error');
    }

    const authCode = query.get('code');
    setAuthCode(authCode);

    /*
    getAccessToken()
      .then((data) => {
        setTokenResponse(JSON.stringify(data));

        // sessionStorage.setItem('accessToken', data.accessToken);
      })
      .catch(() => navigate('/error'));
      */
  }, [query, navigate]);

  return (
    <div>
      <h1>Callback Dev Page</h1>
      <p>Auth Code: {authCode}</p>
      <p>Token Response: {tokenResponse}</p>
    </div>
  );
};

export default CallbackDev;
