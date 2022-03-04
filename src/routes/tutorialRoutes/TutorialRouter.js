import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import Router from '../../components/reactTutorial/tutorialOptions/router/Router'

import './routes.css'

const TutorialRouter = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <Router />
                </div>
            </div>
        </div>
    )
}

export default TutorialRouter