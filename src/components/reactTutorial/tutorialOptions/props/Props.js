import React from 'react'
import './Props.css'

import firstProps from './assets/firstProps.png'
import secondProps from './assets/secondProps.png'
import parameters from './assets/parameters.png'
import variableProps from './assets/variableProps.png'
import objectProps from './assets/objectProps.png'
import objectOutcome from './assets/objectOutcome.png'

const Props = () => {
    return (
        <div className='props__container'>
            <div className='props__content'>
                <div className='props__section'>
                    <h1>Props</h1>
                </div>
                <div className='props__section'>
                    <h2>What are Props?</h2>
                    <p>"Props are arguments passed into React components".</p>
                    <p>Props get passed into components through HTML attributes.</p>
                </div>
                <div className='props__section'>
                    <h2>How do props work?</h2>
                    <p>Props work with the same syntax as HTML attributes. </p>
                    <p>A props properties are created in a seperate file then get passed into a react component. </p>
                </div>
                <div className='props__section'>
                    <h2>Props broken down</h2>
                    <div>
                        <p>This adds a "props" of blue to the Train element.</p>
                        <img src={firstProps} alt='' />
                    </div>
                    <div>
                        <p>This component recieves the argument as a props object.</p>
                        <img src={secondProps} alt='' />
                    </div>
                </div>
                <div className='props__section'>
                    <h2>Passing Data</h2>
                    <p>Props are the means of passing data between components.</p>
                    <p>This sends the "info" property from the Meal component to the Food component.</p>
                    <img src={parameters} alt='' />
                </div>
                <div className='props__section'>
                    <h2>Props as a variable</h2>
                    <p>"If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets".</p>
                    <p>This takes a variable named "mealType" and sends it to the food component.</p>
                    <img src={variableProps} alt='' />
                </div>
                <div className='props__section'>
                    <h2>Props as an Object </h2>
                    <p>This does almost the same as the code above. Except we are passing an object instead of a variable.</p>
                    <p>This takes an object named "mealInfo" and sends it to the food component.</p>
                    <img src={objectProps} alt='' />
                    <div>
                        <p>This is the outcome of the Object props.</p>
                        <img src={objectOutcome} alt='' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Props