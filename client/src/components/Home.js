import React, { useState, useEffect } from 'react';

const Home = () => {
  const [accessToken, setAccessToken] = useState(null);

  const handleLogout = () => {
    setAccessToken(null);
    sessionStorage.removeItem('accessToken');
  };

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
            <div><a href="/repos">Repos</a></div>
            <div><a href="/" onClick={handleLogout}>Logout</a></div>
          </div>
        ) : (
          <div><a href="/login">Login</a></div>
        )}     
    </div>
  );
};

export default Home;
