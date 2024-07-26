import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [accessToken, setAccessToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');

    if (accessToken) {
      setAccessToken(accessToken);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Access Token: {accessToken}</p>
    </div>
  );
};

export default Home;
