import React from 'react'
import './GetStarted.css'
import first from './assets/first.png'
import second from './assets/second.png'
import third from './assets/third.png'
import fourth from './assets/fourth.png'

// const Picture = styled.picture`

// `

const GetStarted = () => {
    return (
        <div className='started__container'>
            <div className='started__content'>

                <div className='started__section started__title'>
                    <h2>Starting React</h2>
                    <div className='started__title__container'>
                        <h3> * Requirement * </h3>
                        <p>To use React in production, you need npm (Node Package Manager) which is included with <a href='https://nodejs.org/en/' target='__blank' className='started__link'>Node.js</a></p>
                    </div>
                    <div className='started__title__container'>
                        <h3> How to install using npm </h3>
                        <ul>
                            <li>npx create-react-app app-name-here</li>
                            <li>npm init react-app app-name-here</li>
                            <li>yarn create react-app app-name-here</li>
                        </ul>
                    </div>
                    <div className='started__title__container'>

                    </div>
                </div>

                <div className='started__section started__react__html'>
                    <h2>React In Html</h2>
                    <p> While React can be brought into an html document. That is outside the scope of this tutoriual.  </p>
                </div>

                <div className='started__section started__react__setup'>
                    <div className='started__image__container'>
                        <h2>Setting up and running react</h2>
                        <h4>This is how to start react in your integrated terminal. While any of the above three ways work the same way. I will be using Yarn for this example.</h4>
                    </div>
                    <div className='started__photos__container'>
                        <div className='started__image__container'>
                            <h3>Step One</h3>
                            <p>Type "yarn create react-app" then type the name of your project. </p>
                            <img className='started__image' src={first} alt='step one' />
                        </div>
                        <div className='started__image__container'>
                            <h3>Step Two</h3>
                            <p>Type "cd app-name-here" once the install has completed to get into the react application </p>
                            <img className='started__image' src={second} alt='step two' />
                        </div>
                        <div className='started__image__container'>
                            <h3>Step Three</h3>
                            <p> Once inside your app. You will be in the "Master" branch. To get React open on Local Host, type "yarn start"</p>
                            <img className='started__image' src={third} alt='step three' />
                        </div>
                        <div className='started__image__container'>
                            <h3>Step Four</h3>
                            <p>Once React has successfully opened. This window will automatically open in your browser. Congratulations! You have now successfully started react!</p>
                            <img className='started__image' src={fourth} alt='step four' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GetStarted