import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import Props from '../../components/reactTutorial/tutorialOptions/props/Props'


import './routes.css'

const TutorialProps = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <Props />
                </div>
            </div>
        </div>
    )
}

export default TutorialProps