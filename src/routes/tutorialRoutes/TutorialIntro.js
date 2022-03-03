import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import Intro from '../../components/reactTutorial/tutorialOptions/intro/Intro'
import './routes.css'

const TutorialIntro = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <Intro />
                </div>
            </div>
        </div>
    )
}

export default TutorialIntro