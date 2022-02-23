import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HooksPage from './routes/HooksPage';
import TutorialPage from './routes/TutorialPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<TutorialPage />} />
      <Route path='/hooks' element={<HooksPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

