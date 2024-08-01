import React from 'react';

const Home = () => {
  const handleLogout = () => {
    sessionStorage.removeItem('accessToken');
  };

  return (
    <div>
      <h1>Home Page</h1>
       {sessionStorage.getItem('accessToken') ? (
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
