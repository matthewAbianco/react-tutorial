import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HooksPage from './routes/hooksRoutes/HooksMain';
import TutorialHome from './routes/tutorialRoutes/TutorialHome';
import TutorialIntro from './routes/tutorialRoutes/TutorialIntro';
import TutorialGetStarted from './routes/tutorialRoutes/TutorialGetStarted';
import TutorialRenderHtml from './routes/tutorialRoutes/TutorialRenderHtml';
import TutorialJSX from './routes/tutorialRoutes/TutorialJSX';
import TutorialComponents from './routes/tutorialRoutes/TutorialComponents';
import TutorialClass from './routes/tutorialRoutes/TutorialClass'
import TutorialProps from './routes/tutorialRoutes/TutorialProps'


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/* beginner react */}
      <Route path='/' element={<TutorialHome />} />
      <Route path='/intro' element={<TutorialIntro />} />
      <Route path='/getStarted' element={<TutorialGetStarted />} />
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
      < Route path='/hooks' element={<HooksWhatIsAHook />} />
      < Route path='/useState' element={<HooksUseState />} />
      < Route path='/useEffect' element={<HooksUseEffect />} />
      < Route path='/useContent' element={<HooksUseContent />} />
      < Route path='/useRef' element={<HooksUseRef />} />
      < Route path='/useReducer' element={<HooksUseReducer />} />
      < Route path='/useCallback' element={<HooksUseCallback />} />
      < Route path='/useMemo' element={<HooksUseMemo />} />
      < Route path='/customHooks' element={<HooksCustomHooks />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

