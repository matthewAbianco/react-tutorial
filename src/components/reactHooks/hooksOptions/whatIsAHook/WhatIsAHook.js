import React, { useState } from 'react'
import './WhatIsAHook.css'

import Hooks from './assets/Hooks.png'

const WhatIsAHook = () => {

    const [car, setCar] = useState('Ferrari')

    return (
        <div className='hook__container'>
            <div className='hook__content'>
                <div className='hook__section'>
                    <h1>Hooks</h1>
                    <p>"Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed."</p>
                    <p>Hooks allow the user to access features like the "State" and "lifecycle" methods. </p>
                </div>
                <div className='hook__section'>
                    <h2>Using Hooks</h2>
                    <p>For Hooks to be used in a React application, it must be imported at the top of the page. For our example, we are importing the useState from React.</p>
                    <p>The "State" means its a piece of data or property that needs to be tracked.</p>
                </div>
                <div className='hook__section'>
                    <h2>Hook Rules</h2>
                    <p>Their are three rules for hooks</p>
                    <ol>
                        <li>"Hooks can only be called inside React function components."</li>
                        <li>"Hooks can only be called at the top level of a component."</li>
                        <li>"Hooks cannot be conditional"</li>
                    </ol>
                </div>
                <div className='hook__section'>
                    <h2>Hooks In Action</h2>
                    <p>Here is an example of hooks being used in action.</p>
                    <div>
                        <h3>My favourite car is {car}</h3>
                        <button
                            type="button"
                            onClick={() => setCar('Ferrari')}
                        >Ferrari</button>
                        <button
                            type="button"
                            onClick={() => setCar('Mazda')}
                        >Mazda</button>
                        <button
                            type="button"
                            onClick={() => setCar('Toyota')}
                        >Toyota</button>
                        <button
                            type="button"
                            onClick={() => setCar('BMW')}
                        >BMW</button>

                        <h2>Hooks Code</h2>
                        <p>This is the code for the function above</p>
                        <img src={Hooks} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatIsAHook