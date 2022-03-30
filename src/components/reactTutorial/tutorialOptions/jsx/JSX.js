import React from 'react'
import './JSX.css'

import Jsx from './assets/Jsx.png'
import withoutJsx from './assets/withoutJsx.png'
import closedElement from './assets/closedElement.png'
import elementWithClass from './assets/elementWithClass.png'
import expressionInJsx from './assets/expressionInJsx.png'
import fragment from './assets/fragment.png'
import ifStatement from './assets/ifStatement.png'
import largeHtmlBlock from './assets/largeHtmlBlock.png'
import ternary from './assets/ternary.png'
import topLevelElement from './assets/topLevelElement.png'


const JSX = () => {
    return (
        <div className='jsx__container'>
            <div className='jsx__content'>
                <div className='jsx__section'>
                    <h1>React JSX</h1>
                </div>
                <div className='jsx__section'>
                    <h2>What Is JSX?</h2>
                    <p>JSX stands for JavaScript XML</p>
                    <p>JSX allows HTML to be written in React</p>
                </div>
                <div className='jsx__section'>
                    <h2>Coding JSX</h2>
                    <p>JSX allows HTML to be written in JavaScript without "createElement()" or "appendChild()" methods</p>
                    <p>JSX turns HTML tags into React Elements</p>
                    <p>While their are other ways to create React applications, JSX is the best practice for creating a React application</p>
                    <div>
                        <p>With JSX</p>
                        <img src={Jsx} alt="" />
                    </div>
                    <div>
                        <p>Without JSX</p>
                        <img src={withoutJsx} alt="" />
                    </div>
                </div>
                <div className='jsx__section'>
                    <h2>Expressions in JSX</h2>
                    <p>Expressions can be written in JSX inside curly braces "{ }"</p>
                    <p>The expression can be a property, React variable, or any other accecptable JavaScript expression. JSX will run the expresssion and return the result</p>
                    <img src={expressionInJsx} alt="" />
                </div>
                <div className='jsx__section'>
                    <h2>Inserting a Large Block of HTML</h2>
                    <p> For HTML to be written on multiple lines, the HTML must be put inside parentheses </p>
                    <img src={largeHtmlBlock} alt="" />
                </div>
                <div className='jsx__section'>
                    <h2>One Top Level Element</h2>
                    <p> HTML code must be wrapped in a single top level element. </p>
                    <img src={topLevelElement} alt="" />
                </div>
                <div className='jsx__section'>
                    <h2>Fragments</h2>
                    <p>Fragments can also be used to wrap multiple lines. This will reduce the number of nodes added to the DOM. A fragment is an empty HTML tag "<></>"</p>
                    <img src={fragment} alt="" />
                </div>
                <div className='jsx__section'>
                    <h2>Elements Must be Closed</h2>
                    <p> "JSX follows XML rules, and therefor HTML elements must be properly closed" - W3Schools </p>
                    <img src={closedElement} alt="" />
                </div>
                <div className='jsx__section'>
                    <h2>Attribute class = class name</h2>
                    <p>The "class" word is a reserved word in JavaScript. So to give something a "class" in JSX, the attribute "className" is used instead.</p>
                    <img src={elementWithClass} alt="" />
                </div>
                <div className='jsx__section'>
                    <h2>Conditions - If Statements</h2>
                    <p>If statements are supported in react, but not inside JSX</p>
                    <p>For a conditional statement to be used in JSX. The "if" statement must be outside the JSX. Alternatively, a "ternary" expression can be used instead. </p>
                    <img src={ifStatement} alt="" />
                </div>
                <div className='jsx__section'>
                    <h2>Ternary Expression, an alternative to If statements</h2>
                    <img src={ternary} alt="" />
                </div>
            </div>
        </div>
    )
}



export default JSX