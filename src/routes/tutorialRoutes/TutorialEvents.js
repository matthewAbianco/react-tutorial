import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import Events from '../../components/reactTutorial/tutorialOptions/events/Events'

import './routes.css'

const TutorialForms = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <Events />
                </div>
            </div>
        </div>
    )
}

export default TutorialForms