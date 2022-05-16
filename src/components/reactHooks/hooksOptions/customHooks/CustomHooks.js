import React from 'react'
import './CustomHooks.css'
import ToggleComponent from './ToggleComponent'
import UseToggle from './assets/UseToggle.png'
import UseToggleComponent from './assets/UseToggleComponent.png'



const CustomHooks = () => {
    return (
        <div className='custom__container'>
            <div className='custom__content'>
                <div className='custom__section'>
                    <h1>Custom Hooks</h1>
                    <p>Custom hooks are reusable functions.</p>
                    <p>Custom hooks are great when you have component logic that can or needs to be used by multiple components.</p>
                </div>
                <div className='custom__section'>
                    <h2>How to make a Custom Hook</h2>
                    <p>A custom hook is a Javascript function with its name starting with "use"</p>
                    <p>This custom component toggles the value of something true or false, and has two more buttons to set the value to true or false </p>
                    <p>To use the custom hook in another compoent, it simply gets imported, as you would any other component in React. </p>
                    <ToggleComponent />
                    <img src={UseToggle} alt="" />
                    <img src={UseToggleComponent} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CustomHooks