import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const CallbackDev = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const [authCode, setAuthCode] = useState(null);

  useEffect(() => {
    const authStateFromSession = sessionStorage.getItem('auth_state');
    const authStateFromQuery = query.get('state');

    if (authStateFromSession !== authStateFromQuery) {
      navigate('/error');
    }

    const authCode = query.get('code');
    setAuthCode(authCode);
  }, [query, navigate]);

  return (
    <div>
      <h1>Callback Dev Page</h1>
      <p>Auth Code: {authCode}</p>
    </div>
  );
};

export default CallbackDev;
