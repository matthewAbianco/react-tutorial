import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HooksPage from './routes/hooksRoutes/HooksMain';
import TutorialMain from './routes/tutorialRoutes/TutorialMain';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<TutorialMain />} />
      <Route path='/hooks' element={<HooksPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

