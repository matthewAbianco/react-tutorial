import React from 'react'
import './RenderHtml.css'
import htmlCode from './assets/htmlCode.png'
import rootNode from './assets/rootNode.png'

const RenderHtml = () => {
    return (
        <div className='html__container'>
            <div className='html__content'>
                <div className='html__section'>
                    <h1>Render HTML</h1>
                    <p>The overarching idea behind react is to be able to render HTML on a webpage.
                        HTML is rendered to a page using a function called “ReactDOM.render() </p>
                    <p>The “ReactDOM.render()" function takes two arguments, HTML code and an HTML
                        element with the intention of displaying the specified HTML code inside the specified HTML element.
                    </p>
                </div>
                <div className='html__section'>
                    <h2>The HTML Code</h2>
                    <p>The HTML code in this section, and the rest of React, uses JSX (JavaScript XML). JSX allows us to
                        write HTML code inside of JavaScript Code.</p>
                    <img src={htmlCode} alt="" />
                </div>
                <div className='html__section'>
                    <h2>The Root Node</h2>
                    <p>Using the above example. What is Shown in the "ReactDOM.render()" is what we what to dispaly "exampleElement", and where we want to display it "root" (</p>
                    <p>Think of it as a container that holds all of the content react will manage</p>
                    <p>"It does NOT have to be a "div" element and it does NOT have to have the id='root'" -W3Schools</p>
                    <img src={rootNode} alt="" />
                </div>

            </div>
        </div>
    )
}

export default RenderHtml