import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import ES6_Intro from '../../components/reactTutorial/tutorialOptions/ES6/es6/es6_intro/ES6_Intro'
import '../tutorialRoutes/routes.css'

const TutorialES6Intro = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <ES6_Intro />
                </div>
            </div>
        </div>
    )
}

export default TutorialES6Intro