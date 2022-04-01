import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TutorialHome from './routes/tutorialRoutes/TutorialHome';
import TutorialIntro from './routes/tutorialRoutes/TutorialIntro';
import TutorialGetStarted from './routes/tutorialRoutes/TutorialGetStarted';

import TutorialRenderHtml from './routes/tutorialRoutes/TutorialRenderHtml';
import TutorialJSX from './routes/tutorialRoutes/TutorialJSX';
import TutorialComponents from './routes/tutorialRoutes/TutorialComponents';
import TutorialClass from './routes/tutorialRoutes/TutorialClass'
import TutorialProps from './routes/tutorialRoutes/TutorialProps'
import TutorialEvents from './routes/tutorialRoutes/TutorialEvents'
import TutorialConditionals from './routes/tutorialRoutes/TutorialConditionals'
import TutorialLists from './routes/tutorialRoutes/TutorialLists'
import TutorialForms from './routes/tutorialRoutes/TutorialForms'
import TutorialRouter from './routes/tutorialRoutes/TutorialRouter'
import TutorialMemo from './routes/tutorialRoutes/TutorialMemo'
import TutorialCssStyling from './routes/tutorialRoutes/TutorialCssStyling'
import TutorialSassStyling from './routes/tutorialRoutes/TutorialSassStyling'

import TutorialES6Intro from './routes/tutorialEs6Routes/TutorialES6Intro'
import ES6Classes from './routes/tutorialEs6Routes/ES6Classes'
import ES6ArrowFunctions from './routes/tutorialEs6Routes/ES6ArrowFunctions'
import ES6Variables from './routes/tutorialEs6Routes/ES6Variables'
import ES6ArrayMethods from './routes/tutorialEs6Routes/ES6ArrayMethods'
import ES6Destructuring from './routes/tutorialEs6Routes/ES6Destructuring'
import ES6SpreadOperator from './routes/tutorialEs6Routes/ES6SpreadOperator'
import ES6Modules from './routes/tutorialEs6Routes/ES6Modules'
import ES6TernaryOperator from './routes/tutorialEs6Routes/ES6TernaryOperator'

import HooksWhatIsAHook from './routes/hooksRoutes/HooksWhatIsAHook'
import HooksUseState from './routes/hooksRoutes/HooksUseState'
import HooksUseEffect from './routes/hooksRoutes/HooksUseEffect'
import HooksUseContext from './routes/hooksRoutes/HooksUseContext'
import HooksUseRef from './routes/hooksRoutes/HooksUseRef'
import HooksUseReducer from './routes/hooksRoutes/HooksUseReducer'
import HooksUseCallback from './routes/hooksRoutes/HooksUseCallback'
import HooksUseMemo from './routes/hooksRoutes/HooksUseMemo'
import HooksCustomHooks from './routes/hooksRoutes/HooksCustomHooks'

import NotesRoutes from './routes/notesRoutes/NotesRoutes'







ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/* beginner react */}
      <Route path='/' element={<TutorialHome />} />
      <Route path='/intro' element={<TutorialIntro />} />
      <Route path='/getStarted' element={<TutorialGetStarted />} />
      <Route path='/renderHtml' element={<TutorialRenderHtml />} />
      <Route path='/jsx' element={<TutorialJSX />} />
      <Route path='/components' element={<TutorialComponents />} />
      <Route path='/class' element={<TutorialClass />} />
      <Route path='/props' element={<TutorialProps />} />
      <Route path='/events' element={<TutorialEvents />} />
      <Route path='/conditionals' element={<TutorialConditionals />} />
      <Route path='/lists' element={<TutorialLists />} />
      <Route path='/forms' element={<TutorialForms />} />
      <Route path='/router' element={<TutorialRouter />} />
      <Route path='/memo' element={<TutorialMemo />} />
      <Route path='/cssStyling' element={<TutorialCssStyling />} />
      <Route path='/sassStyling' element={<TutorialSassStyling />} />

      {/* ES6 React */}
      <Route path='/ES6' element={<TutorialES6Intro />} />
      <Route path='/Classes' element={<ES6Classes />} />
      <Route path='/ArrowFunctions' element={<ES6ArrowFunctions />} />
      <Route path='/Variables' element={<ES6Variables />} />
      <Route path='/ArrayMethods' element={<ES6ArrayMethods />} />
      <Route path='/Destructuring' element={<ES6Destructuring />} />
      <Route path='/SpreadOperator' element={<ES6SpreadOperator />} />
      <Route path='/Modules' element={<ES6Modules />} />
      <Route path='/TernaryOperator' element={<ES6TernaryOperator />} />

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

      {/* note routes */}
      < Route path='/notes' element={<NotesRoutes />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

