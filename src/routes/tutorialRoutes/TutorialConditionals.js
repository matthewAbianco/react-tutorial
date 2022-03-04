import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import Conditionals from '../../components/reactTutorial/tutorialOptions/conditionals/Conditionals'


import './routes.css'

const TutorialConditionals = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <Conditionals />
                </div>
            </div>
        </div>
    )
}

export default TutorialConditionals