import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TutorialHome from './routes/tutorialRoutes/TutorialHome';
import TutorialIntro from './routes/tutorialRoutes/TutorialIntro';
import TutorialGetStarted from './routes/tutorialRoutes/TutorialGetStarted';
import TutorialES6 from './routes/tutorialRoutes/TutorialES6';
import TutorialRenderHtml from './routes/tutorialRoutes/TutorialRenderHtml';
import TutorialJSX from './routes/tutorialRoutes/TutorialJSX';
import TutorialComponents from './routes/tutorialRoutes/TutorialComponents';
import TutorialClass from './routes/tutorialRoutes/TutorialClass'
import TutorialProps from './routes/tutorialRoutes/TutorialProps'
import TutorialConditionals from './routes/tutorialRoutes/TutorialConditionals'
import TutorialLists from './routes/tutorialRoutes/TutorialLists'
import TutorialForms from './routes/tutorialRoutes/TutorialForms'
import TutorialRouter from './routes/tutorialRoutes/TutorialRouter'
import TutorialMemo from './routes/tutorialRoutes/TutorialMemo'
import TutorialCssStyling from './routes/tutorialRoutes/TutorialCssStyling'
import TutorialSassStyling from './routes/tutorialRoutes/TutorialSassStyling'

import HooksWhatIsAHook from './routes/hooksRoutes/HooksWhatIsAHook'
import HooksUseState from './routes/hooksRoutes/HooksUseState'
import HooksUseEffect from './routes/hooksRoutes/HooksUseEffect'
import HooksUseContext from './routes/hooksRoutes/HooksUseContext'
import HooksUseRef from './routes/hooksRoutes/HooksUseRef'
import HooksUseReducer from './routes/hooksRoutes/HooksUseReducer'
import HooksUseCallback from './routes/hooksRoutes/HooksUseCallback'
import HooksUseMemo from './routes/hooksRoutes/HooksUseMemo'
import HooksCustomHooks from './routes/hooksRoutes/HooksCustomHooks'






ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/* beginner react */}
      <Route path='/' element={<TutorialHome />} />
      <Route path='/intro' element={<TutorialIntro />} />
      <Route path='/getStarted' element={<TutorialGetStarted />} />
      <Route path='/ES6' element={<TutorialES6 />} />
      <Route path='/renderHtml' element={<TutorialRenderHtml />} />
      <Route path='/jsx' element={<TutorialJSX />} />
      <Route path='/components' element={<TutorialComponents />} />
      <Route path='/class' element={<TutorialClass />} />
      <Route path='/props' element={<TutorialProps />} />
      <Route path='/conditionals' element={<TutorialConditionals />} />
      <Route path='/lists' element={<TutorialLists />} />
      <Route path='/forms' element={<TutorialForms />} />
      <Route path='/router' element={<TutorialRouter />} />
      <Route path='/memo' element={<TutorialMemo />} />
      <Route path='/cssStyling' element={<TutorialCssStyling />} />
      <Route path='/sassStyling' element={<TutorialSassStyling />} />


      {/* advanced react */}
      < Route path='/whatIsAHook' element={<HooksWhatIsAHook />} />
      < Route path='/useState' element={<HooksUseState />} />
      < Route path='/useEffect' element={<HooksUseEffect />} />
      < Route path='/useContext' element={<HooksUseContext />} />
      < Route path='/useRef' element={<HooksUseRef />} />
      < Route path='/useReducer' element={<HooksUseReducer />} />
      < Route path='/useCallback' element={<HooksUseCallback />} />
      < Route path='/useMemo' element={<HooksUseMemo />} />
      < Route path='/customHooks' element={<HooksCustomHooks />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

