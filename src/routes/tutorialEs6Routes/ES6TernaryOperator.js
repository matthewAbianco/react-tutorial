import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import TernaryOperator from '../../components/reactTutorial/tutorialOptions/ES6/es6/ternary_operator/TernaryOperator'
import '../tutorialRoutes/routes.css'

const ES6TernaryOperator = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <TernaryOperator />
                </div>
            </div>
        </div>
    )
}

export default ES6TernaryOperator