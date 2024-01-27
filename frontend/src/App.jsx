import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Form from './components/Form/Form';
import Register from './components/Form/Form';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/admin" element={<Admin />}/>
        <Route exact path="/form" element={<Register />}/>
      </Routes>
    </>
  );
}

export default App;
