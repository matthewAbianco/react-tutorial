import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import ES6 from '../../components/reactTutorial/tutorialOptions/ES6/ES6'
import './routes.css'

const TutorialCssStyling = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <ES6 />
                </div>
            </div>
        </div>
    )
}

export default TutorialCssStyling