import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import Components from '../../components/reactTutorial/tutorialOptions/components/Components'

import './routes.css'

const TutorialComponents = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <Components />
                </div>
            </div>
        </div>
    )
}

export default TutorialComponents