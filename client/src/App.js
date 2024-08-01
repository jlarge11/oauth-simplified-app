import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Repos from './components/Repos';
import CallbackDev from './components/CallbackDev';
import Error from './components/Error';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="repos" element={<Repos />} />
          <Route path="callback-dev" element={<CallbackDev />} />
          <Route path="error" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
