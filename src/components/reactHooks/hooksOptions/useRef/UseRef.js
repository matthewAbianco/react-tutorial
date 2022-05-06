import React, { useState, useEffect, useRef } from 'react'
import './UseRef.css'

import Infinite from './assets/Infinite.png'
import AUseRef from './assets/AUseRef.png'
import Reference from './assets/Reference.png'


const UseRef = () => {

    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const renderCount = useRef(1)

    const inputRef = useRef()

    function focus() {
        inputRef.current.focus()
    }


    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })

    return (
        <div className='ref__container'>
            <div className='ref__content'>
                <div className='ref__section'>
                    <h1>useRef</h1>
                    <p>The important thing with useRef is that it is extremely similar to useState since it can store a previous value in it that persists between renders. </p>
                    <p>Where useRef is different than useState is that using useRef does not cause another render when used, unlike useState. </p>
                    <p>As the useEffect hook causes a render every time it is used, this can potentially cause a noticable slow down in our application or even create an infinite loop.</p>
                    <p>UseRef can also be used to access a DOM element directly.</p>
                </div>
                <div>
                    <h2>An infinite loop</h2>
                    <p>This code counts the number of times a page renders. However, every time the count updates, it causes a render, creating an infinite loop.</p>
                    <p>To fully see the problem that useRef helps to solve, try this code.</p>
                    <img src={Infinite} alt="" />
                </div>
                <div>
                    <h2>useRef In Action</h2>
                    <p>What makes useRef different than useEffect is that we create an object with useRef that holds the value we want.</p>
                    <p>The useRef object has a single property, called "current" which gets appended to what we want to use it on. </p>
                    <p>In this example, we are getting the "current" value of the renderCount.</p>
                    <p>Our application renders every time the name value gets changed, or with each keystroke inside the input field. Not when the render count itself gets updated.</p>

                    <div>My name is {title}</div>
                    <div>
                        <p>Enter name here</p>
                        <input value={title} onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div>I rendered {renderCount.current} times </div>
                    <img src={AUseRef} alt="" />
                </div>
                <div className='ref__section'>
                    <h2>The Common Use of useRef</h2>
                    <p>The most common use of useRef is to reference HTML elements.</p>
                    <p>Each element in a document has a "ref" attribute, which can be set to any ref that we want.</p>
                    <p>The button below "ref"erences the input field above, allowing us to type in it without clicking on the input field. </p>

                    <div>My name is {name}</div>
                    <p>Enter name here</p> <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
                    <button onClick={focus}>Focus on input field</button>
                    <p>This is the code for the above function</p>
                    <img src={Reference} alt="" />

                </div>
            </div>
        </div>
    )
}

export default UseRef