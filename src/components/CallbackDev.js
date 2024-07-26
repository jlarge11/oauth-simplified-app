import React, { useState, useEffect } from 'react';

const CallbackDev = () => {
  const [authState, setAuthState] = useState(null);

  useEffect(() => {
    const authState = sessionStorage.getItem('auth_state');
    setAuthState(authState);
  }, []);

  return (
    <div>
      <h1>Callback Dev Page</h1>
      <p>Auth State: {authState}</p>
    </div>
  );
};

export default CallbackDev;
