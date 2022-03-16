import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import ArrowFunctions from '../../components/reactTutorial/tutorialOptions/ES6/es6/arrow_functions/ArrowFunctions'
import '../tutorialRoutes/routes.css'

const ES6ArrowFunctions = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <ArrowFunctions />
                </div>
            </div>
        </div>
    )
}

export default ES6ArrowFunctions