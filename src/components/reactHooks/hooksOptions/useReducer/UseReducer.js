import React, { useReducer } from 'react'
import './UseReducer.css'

import AuseState from './assets/AuseState.png'
import AuseReducer from './assets/AuseReducer.png'


function reducer(state, action) {
    switch (action.type) {
        case 'plus':
            return { count: state.count + 1 }
        case 'minus':
            return { count: state.count + 1 }
        default:
            return state
    }
}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 })


    function plus() {
        dispatch({ type: 'plus' })
    }

    function minus() {
        dispatch({ type: 'minus' })

    }
    return (
        <div className='red__container'>
            <div className='red__content'>
                <div className='red__section'>
                    <h1>useReducer</h1>
                    <p>The useReducer hook managaes state in a better way than useState.</p>
                    <p>While the state of useState is held in the component, useReducer allows us to create objects which hold the state, making it easier to manage, but our code more complex</p>
                    <p>Below will show two pieces of code that perform the same task.</p>
                </div>
                <div className='red__section'>
                    <h2>useState</h2>
                    <p>This is how </p>
                    <img src={AuseState} alt="" />
                </div>
                <div className='red__section'>
                    <h2>useReducer</h2>
                    <p>Instead of holding our state in useState, we are holding it in the "reducer" function</p>
                    <p>The reducer function creates an object that holds and manages the state. </p>
                    <p>That state managment then gets managed in the Plus and Minus functions below.</p>
                    <p>Those functions then finally get put into the buttons onClick attribute.</p>
                    <button onClick={plus} > Add 1 </button>

                    {state.count}

                    <button onClick={minus} > Subtract 1 </button>
                </div>
                <></>
                <img src={AuseReducer} alt="" />
            </div>

        </div>

    )
}

export default UseReducer