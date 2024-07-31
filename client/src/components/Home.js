import React, { useState, useEffect } from 'react';

const Home = () => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');

    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
       {accessToken ? (
          <div>
            <div>Access Token: {accessToken}</div>
            <div><a href="/logout">Logout</a></div>
          </div>
        ) : (
          <div><a href="/login">Login</a></div>
        )}     
    </div>
  );
};

export default Home;
