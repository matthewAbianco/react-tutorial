import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import GetStarted from '../../components/reactTutorial/tutorialOptions/getStarted/GetStarted'
import './routes.css'

const TutorialHome = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <GetStarted />
                </div>
            </div>
        </div>
    )
}

export default TutorialHome