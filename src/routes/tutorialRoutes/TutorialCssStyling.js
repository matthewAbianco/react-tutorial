import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import CssStyling from '../../components/reactTutorial/tutorialOptions/cssStyling/CssStyling'

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
                    <CssStyling />
                </div>
            </div>
        </div>
    )
}

export default TutorialCssStyling