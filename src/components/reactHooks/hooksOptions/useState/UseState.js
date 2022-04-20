import React, { useState } from 'react'
import './UseState.css'

import Importing from './assets/Importing.png'
import Initializing from './assets/Initializing.png'
import ReadState from './assets/ReadState.png'
import StateObject from './assets/StateObject.png'
import UpdateState from './assets/UpdateState.png'
import UpdatingObjects from './assets/UpdatingObjects.png'
import WhatStateCanHold from './assets/WhatStateCanHold.png'



const UseState = () => {

    const [state, setState] = useState(0)

    const [date, setDate] = useState({
        resturaunt: "Italian",
        salad: "Caprese",
        soup: "Gazpacho",
        steak: "Ribeye",
        dessert: "Tiramisu"
    });

    const changeResturant = () => {
        setDate(previousState => {
            return { ...previousState, resturaunt: "French" }
        })
    }

    return (
        <div className='state__container'>
            <div className='state__content'>
                <div className='state__section'>
                    <h1>useState Hook</h1>
                    <p>While useState was addressed in the "what is a hook" page. I will cover it more in depth here.</p>
                    <p>State is the term for data or properties in an application that can be changed. </p>
                    <p>The useState hook allows a functions state to be tracked as it gets changed.</p>
                </div>
                <div className='state__section'>
                    <h2>Import useState</h2>
                    <p>For the useState hook to be used, it must first be imported into the component</p>
                    <p>The useState gets destructured from React when it gets imported.</p>
                    <img src={Importing} alt="" />
                </div>
                <div className='state__section'>
                    <h2>Initializing useState</h2>
                    <p>The starting state is Initialized by calling useState in the functional component</p>
                    <p>useState sets the starting value and returns two values.</p>
                    <ul>
                        <li>The current State.</li>
                        <li>A function that updates the state.</li>
                    </ul>
                    <img src={Initializing} alt="" />
                    <p>The first value "count" is the current state.</p>
                    <p>The second value, "setCount" is the function that gets used to update/change the state.</p>
                    <p>Finally, the starting count is set with useState. In this case, 0.</p>
                </div>
                <div className='state__section'>
                    <h2>Reading The State</h2>
                    <p>The value of our state can be read anywhere in our component </p>
                    <img src={ReadState} alt="" />
                </div>
                <div className='state__section'>
                    <h2>Updating The State</h2>
                    <p>To update the value of our state, an updater function is used. In this example, a button with an onClick function that adds or subtracts from our states curent value</p>
                    <div>

                        <h3>My current total is {state}</h3>

                        <button
                            type="button"
                            onClick={() => setState((state) + 1)}
                        >Add One
                        </button>

                        <button
                            type="button"
                            onClick={() => setState((state) + 10)}
                        >Add Ten
                        </button>

                        <button
                            type="button"
                            onClick={() => setState((state) - 1)}
                        >Minus One
                        </button>

                        <button
                            type="button"
                            onClick={() => setState((state) - 10)}
                        >Minus Ten
                        </button>

                    </div>
                    <img src={UpdateState} alt="" />
                </div>
                <div className='state__section'>
                    <h2>What can State hold?</h2>
                    <p>The useState Hook can be used to monitor the value of booleans, objects, numbers, strings or any combination of these.</p>
                    <p>Their are two ways to keep track of multiple state hooks. The first is to create multiple states and the second is to crate an object. </p>
                    <img src={WhatStateCanHold} alt="" />
                </div>
                <div className='state__section'>
                    <h2>useState with an object</h2>
                    <p>To use a single state and dispaly the values, we need to destructure the object to display the values</p>
                    <img src={StateObject} alt="" />
                </div>
                <div className='state__section'>
                    <h2>Updating Objects and Arrays in State</h2>
                    <p>When one section of the state gets changed, the entire state gets overwritten.</p>
                    <p>So what is the solution if we want to just update a single piece of our object?</p>
                    <p>The JavaScript spread operator helps us by holding the values we don't want changed. </p>
                    <div>
                        <h2>I took my date to an {date.resturaunt} resturaunt</h2>
                        <h2>I had a {date.salad} salad and {date.soup} soup to start. My main was a {date.steak} steak.</h2>
                        <h2>For dessert I had {date.dessert} </h2>

                        <button
                            type='button'
                            onClick={changeResturant}
                        >French
                        </button>
                    </div>
                    <img src={UpdatingObjects} alt="" />
                </div>

            </div>
        </div>
    )
}

export default UseState