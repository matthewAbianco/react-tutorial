import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import SpreadOperator from '../../components/reactTutorial/tutorialOptions/ES6/es6/spread_operatior/SpreadOperator'
import '../tutorialRoutes/routes.css'

const ES6SpreadOperator = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <SpreadOperator />
                </div>
            </div>
        </div>
    )
}

export default ES6SpreadOperator