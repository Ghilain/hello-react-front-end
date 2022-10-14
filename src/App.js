import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => (

  <Routes>
    <Route path="/" element={<Greeting />} />
  </Routes>
);

export default App;
