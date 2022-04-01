import React from 'react'
import './Events.css'

import firstEvent from './assets/firstEvent.png'
import secondEvent from './assets/secondEvent.png'
import thirdEvent from './assets/thirdEvent.png'


const Events = () => {

    const click = () => {
        alert('I have been clicked, this is my code <button onClick={click}>Click me for an alert pop-up</button>')
    }

    const hover = () => {
        alert('This is my code, ')
    }

    function keyPressFunction() {
        alert('a key has been pressed, Here is my code')
    }

    return (
        <div className='events__container'>
            <div className='events__content'>
                <div className='events__section'>
                    <h1>React Events</h1>
                    <p>As with the HTML DOM, React can perform actions based on user input</p>
                    <p>React can perform the same events as HTML: mouseover, click, change</p>
                </div>
                <div className='events__section'>
                    <h2>Adding Events In React</h2>
                    <p>Events in React are written in "camelCase" syntax.</p>
                    <p>"onClick" instead of "onclick"</p>
                    <p>React event handlers are written inside curly braces</p>
                    <p>"onClick={click}" instead of onClick="shoot()"</p>
                </div>
                <div className='events__section'>
                    <h2>A standard Event in an Function</h2>
                    <p>This shows the goal function inside the Hockey component</p>
                    <img src={firstEvent} alt="" />
                </div>
                <div className='events__section'>
                    <h2>Passing Arguments</h2>
                    <p>"To pass an argument to an event handler, use an arrow function."</p>
                    <img src={secondEvent} alt="" />
                </div>
                <div>
                    <h2>Event Types</h2>
                    <p>
                        JavaScript has many different types of events. Which can be found here
                        <a href='https://www.w3schools.com/jsref/dom_obj_event.asp' target='__blank' className='home__about__section--anchor' > JavaScript Events</a>
                    </p>
                    <button onClick={click}>Click me for an alert pop-up</button>
                    <button onMouseOver={hover}>Hover over me for an alert pop-up</button>
                    <input type='text' placeholder='type in me for an alert' onKeyPress={(e) => keyPressFunction(e)} text="asdf" />
                </div>
                <div className='events__section'>
                    <h2>React Event Object</h2>
                    <p></p>
                    <img src={thirdEvent} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Events