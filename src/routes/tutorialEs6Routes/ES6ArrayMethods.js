import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import ArrayMethods from '../../components/reactTutorial/tutorialOptions/ES6/es6/arrray_methods/ArrayMethods'
import '../tutorialRoutes/routes.css'

const ES6ArrayMethods = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <ArrayMethods />
                </div>
            </div>
        </div>
    )
}

export default ES6ArrayMethods