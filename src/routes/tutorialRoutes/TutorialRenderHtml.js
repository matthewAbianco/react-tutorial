import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import RenderHtml from '../../components/reactTutorial/tutorialOptions/renderHtml/RenderHtml'

import './routes.css'

const TutorialRenderHtml = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <RenderHtml />
                </div>
            </div>
        </div>
    )
}

export default TutorialRenderHtml