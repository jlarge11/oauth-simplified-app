import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Repos = () => {
  const navigate = useNavigate();
  const hasRetrieved = useRef(false);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (!hasRetrieved.current) {
      hasRetrieved.current = true;

      const options = {
       headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'https://example-app.com/',
          Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        },
      };

      axios.get(`${process.env.REACT_APP_API_URL_BASE}/user/repos?sort=created&direction=desc`, options)
        .then(({ data }) => {
          setRepos(data);
        })
        .catch((error) => {
          console.error(error);
          navigate('/error')
        });
    }
  }, [navigate]);

  return (
    <div>
      <h1>Repos</h1>
       {repos ? (
          <div>
            <ul>
              {repos.map((repo) => (
                <li><a key={repo.id} href={repo.html_url}>{repo.full_name}</a></li>
              ))}
            </ul>
          </div>
        ) : (
          <div>Getting repos...</div>
        )}     
    </div>
  );
};

export default Repos;
