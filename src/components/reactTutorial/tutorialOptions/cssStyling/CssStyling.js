import React from 'react'
import './CssStyling.css'

import InlineStyle from './assets/InlineStyle.png'
import CamelCase from './assets/CamelCase.png'
import CssHeader from './assets/CssHeader.png'
import ImportCss from './assets/ImportCss.png'
import JavascriptObject from './assets/JavascriptObject.png'
import Module from './assets/Module.png'

const CssStyling = () => {
    return (
        <div className='css__container'>
            <div className='css__content'>
                <div className='css__section'>
                    <h1>CSS Styling in React</h1>
                    <p>Thier are 5 ways to style a page in React. But this tutorial will discuss three in detail </p>
                    <ul>
                        <li>CSS Style Sheet</li>
                        <li>Javascript object</li>
                        <li>Inline Styling</li>
                        <li>CSS Modules</li>
                        <li>CSS Frameworks, EG: Bootstrap, Material, Tailwind, ETC</li>
                    </ul>
                </div>
                <div className='css__section'>
                    <h2>Inline Styling</h2>
                    <p>For an element to have Inline styling, it's value must be a Javascript object</p>
                    <p>This method is not preferred as it requires the maximum amount of code to be written.</p>
                    <img src={InlineStyle} alt="" />
                </div>
                <div className='css__section'>
                    <h2>camelCased Property Names</h2>
                    <p>Because the inline styling is written as a javascript object, properties seperated by a hyphen must be written instead with camel case syntax.</p>
                    <img src={CamelCase} alt="" />
                </div>
                <div className='css__section'>
                    <h2>JavaScript Object</h2>
                    <p>A JavaScript object can be created with CSS properties and be applied in-line to an element. </p>
                    <img src={JavascriptObject} alt="" />
                </div>
                <div className='css__section'>
                    <h2>CSS StyleSheet</h2>
                    <p>The most common way to style a page is through a seperate .css file then importing it to your page or application.</p>
                    <p>This is my preferred method of stylizing a page as it requires minimal re-writing of code and can be easily added to multiple pages. </p>
                    <p>For a CSS page to apply its styling, it must be imported at the top of the page.  </p>
                    <img src={ImportCss} alt="" />
                </div>
                <div className='css__section'>
                    <h2>CSS Modules</h2>
                    <p>While CSS Modules require slightly more code to be written, it can be extremely valuable in larger projects as programmers dont have to worry about which keywords have already been used </p>
                    <p>A CSS module is created by adding ".module" to the CSS file. Example. "style.module.css"</p>

                    <div>
                        <h3>CSS code</h3>
                        <img src={CssHeader} alt="" />
                    </div>
                    <div>
                        <h3>CSS Module Styling</h3>
                        <img src={Module} alt="" />
                    </div>

                </div>
                <div className='css__section'>
                    <h2>CSS Frameworks</h2>
                    <p>An alternative to creating your own CSS is to use one of the many CSS frameworks available online.</p>
                    <p>Materiual UI, Grommet and React Bootstrap are some of the most popular CSS frameworks in React.</p>
                    <p>CSS Frameworks allow developers to impliment Buttons, Lists, Cards and an assortment of other pre-styled objects in their application.  </p>
                    <p>The downside is that the CSS for these is written in-line. Which is the worst way of implimenting CSS to a document. </p>
                </div>
            </div>
        </div>
    )
}

export default CssStyling