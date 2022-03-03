import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import Class from '../../components/reactTutorial/tutorialOptions/class/Class'

import './routes.css'

const TutorialClass = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <Class />
                </div>
            </div>
        </div>
    )
}

export default TutorialClass