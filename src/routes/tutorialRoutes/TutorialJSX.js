import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import JSX from '../../components/reactTutorial/tutorialOptions/jsx/JSX'

import './routes.css'

const TutorialJSX = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <JSX />
                </div>
            </div>
        </div>
    )
}

export default TutorialJSX