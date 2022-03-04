import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import Forms from '../../components/reactTutorial/tutorialOptions/forms/Forms'

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
                    <Forms />
                </div>
            </div>
        </div>
    )
}

export default TutorialForms