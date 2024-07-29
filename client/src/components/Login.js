import React, { useEffect } from 'react';
import queryString from 'query-string';

const Login = () => {
  useEffect(() => {
    const authState = Math.random().toString(36).substring(2);
    sessionStorage.setItem('auth_state', authState);

    const queryParams = queryString.stringify({
        response_type: 'code',
        client_id: process.env.REACT_APP_CLIENT_ID,
        redirect_uri: process.env.REACT_APP_AUTH_SERVER_REDIRECT_URI,
        scope: 'user public_repo',
        state: authState,
    });

    window.location.href = `${process.env.REACT_APP_AUTHORIZE_URL}?${queryParams}`;
  }, []);

  return (
    <div>
      <h1>Redirecting to GitHub for authentication...</h1>
    </div>
  );
};

export default Login;
