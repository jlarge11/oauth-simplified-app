import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const CallbackDev = () => {
  const query = useQuery();
  const [authState, setAuthState] = useState(null);
  const [authCode, setAuthCode] = useState(null);

  useEffect(() => {
    const authState = sessionStorage.getItem('auth_state');
    setAuthState(authState);

    const authCode = query.get('code');
    setAuthCode(authCode);
  }, [query]);

  return (
    <div>
      <h1>Callback Dev Page</h1>
      <p>Auth State: {authState}</p>
      <p>Auth Code: {authCode}</p>
    </div>
  );
};

export default CallbackDev;
