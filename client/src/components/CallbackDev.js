import React, { useRef, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const CallbackDev = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const [authCode, setAuthCode] = useState(null);
  const [tokenResponse, setTokenResponse] = useState(null);
  const hasFetchedToken = useRef(false);

  useEffect(() => {
    if (!hasFetchedToken.current) {
      hasFetchedToken.current = true;

      async function getAccessToken(authCode) {
        const body = {
          grant_type: 'authorization_code',
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
          redirect_uri: process.env.REACT_APP_AUTH_SERVER_REDIRECT_URI,
          code: authCode,
        };

        const options = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

        return await axios.post(process.env.REACT_APP_TOKEN_URL, body, options);
      }

      const authStateFromSession = sessionStorage.getItem('auth_state');
      const authStateFromQuery = query.get('state');

      if (authStateFromSession !== authStateFromQuery) {
        navigate('/error');
      }

      const authCode = query.get('code');
      setAuthCode(authCode);

      getAccessToken(authCode)
        .then(({ data }) => {
          const parsedData = queryString.parse(data);
          setTokenResponse(parsedData['access_token']);

          // sessionStorage.setItem('accessToken', data.accessToken);
        })
        .catch(() => navigate('/error'));
    }
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
