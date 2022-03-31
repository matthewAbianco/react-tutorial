import React from 'react'
import './Components.css'

import classComponent from './assets/classComponent.png'
import componentInComponent from './assets/componentInComponent.png'
import componentInFile from './assets/componentInFile.png'
import functionalComponent from './assets/functionalComponent.png'
import importComponent from './assets/importComponent.png'
import props from './assets/props.png'
import renderComponent from './assets/props.png'

const Components = () => {
    return (
        <div className='component__container'>
            <div className='component__content'>
                <div className='component__section'>
                    <h1>React Components</h1>
                    <p>"Components are functions that return HTML elements"</p>
                    <p>Components are reusable pieces of code that exist in their own indipendant document. They are essentially the same as JavaScript functions. Other than their isolated nature and can return HTML</p>
                    <p>Their are two types of components, "Functional" and "Class".</p>
                    <p>Class components were the primary method until React version 16.8 was released. Now Functional components are the primary method of creating react components.</p>
                    <p> This website is made using Functional components</p>
                </div>
                <div className='component__section'>
                    <h2>Class vs Functional Component</h2>
                    <p>Here is a comparison between class and functional components</p>
                    <div className='component__section'>
                        <h3>Class Component</h3>
                        <img src={classComponent} alt="" />
                    </div>
                    <div className='component__section'>
                        <h3>Functional Component</h3>
                        <img src={functionalComponent} alt="" />
                    </div>

                </div>
                <div className='component__section'>
                    <h2>Rendering A Component</h2>
                    <p>For a component to be used in an application, it needs to be called in a render function</p>
                    <p>This displays the "Train" component in the "root" element</p>
                    <img src={renderComponent} alt="" />
                </div>
                <div className='component__section'>
                    <h2>Props</h2>
                    <p>"Components can be passed as props, which stands for properties"</p>
                    <p>Props are similar to function arguments, and can be used in components as attributes</p>
                    <img src={props} alt="" />
                </div>
                <div className='component__section'>
                    <h2>Component In Component</h2>
                    <p>Components can be called inside other components.</p>
                    <img src={componentInComponent} alt="" />
                </div>
                <div className='component__section'>
                    <h2>Component in Files</h2>
                    <p>The virtue of react is the ease at which code can be reused. This shows how to "export" a component so it can be reused as many times as wanted.</p>
                    <img src={componentInFile} alt="" />
                </div>
                <div className='component__section'>
                    <h2>Importing Components</h2>
                    <p>Once a file has been exported. For it to be used in another file, it must be "imported" to that file</p>
                    <img src={importComponent} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Components