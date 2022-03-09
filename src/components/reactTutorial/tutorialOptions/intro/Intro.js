import React from 'react'
import './Intro.css'


const Intro = () => {
    return (
        <div className='container'>
            <div className='content'>

                <div className='title'>
                    <h2>What Is React?</h2>
                    <p> React is a JavaScript library created by Facebook.  </p>
                </div>

                <div className='react__how'>
                    <h2>How Does React Work?</h2>
                    <p> React works by creating a virtual DOM which gets filled with components. Components are reusable sections of stylized code that combine HTML and JavaScript in the same document called “JSX”. These components make building websites much faster. Makes websites run faster through individual re-rendering of components instead of the entire DOM.   </p>
                </div>

                <div className='react__history'>
                    <h2>History of React Js</h2>
                    <p> React.js was first built in 2011 for Facebooks “newsfeed” feature. In 2012, Facebook acquired Instagram and worked to make React open source so Instagram could make better use of it. React finally becomes open source in 2013 and available to the public but does not become picked up by other major tech companies until 2015 when Airbnb and Netflix start using React. Presently, React is one of the most popular languages to code in with an assortment of libraries and constant updates.   </p>
                </div>

            </div>
        </div>
    )
}

export default Intro