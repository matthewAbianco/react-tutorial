import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import Modules from '../../components/reactTutorial/tutorialOptions/ES6/es6/modules/Modules'
import '../tutorialRoutes/routes.css'

const ES6Modules = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <Modules />
                </div>
            </div>
        </div>
    )
}

export default ES6Modules