import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Paginas */
import Site from './site/site.jsx';
import Login from './app/Login/login.jsx';
import Login2 from './app/Login/login2.jsx';
import Login5 from './app/Login/login5.jsx';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Site />} />
      <Route exact path='/app' element={<Login />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/login2' element={<Login2 />} />
      <Route exact path='/login5' element={<Login5 />} />
    </Routes>
  </BrowserRouter>;
}

export default App;