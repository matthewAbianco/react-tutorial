import React from 'react'
import './Router.css'
import Link from './assets/Link.png'
import Route from './assets/Route.png'

const Router = () => {
    return (
        <div className='router__container'>
            <div className='router__content'>
                <div className='router__section'>
                    <h1>React Router</h1>
                    <p>The Router feature is not installed with the "create-react-app" initialization</p>
                </div>
                <div className='router__section'>
                    <h2>Adding React Router</h2>
                    <p>"To add React Router in your application, run this in the terminal from the root directory of the application"</p>
                    <p>"npm i -D react-router-dom"</p>
                    <a href='https://github.com/matthewAbianco/react-tutorial/blob/master/src/index.js' target='__blank' ><h3>Click me to view the Routes code for this application</h3> </a>
                </div>
                <div className='router__section'>
                    <h2>Basic Usage</h2>
                    <p>The Router code is placed in the index.js file</p>
                    <img src={Route} alt="" />
                </div>
                <div className='router__section'>
                    <h2>Example Explained</h2>
                    <p>First, all of the content we want displayed is wrapped in "BrowserRouter"</p>
                    <p>Within our BrowserRouter, we place the "Routes" we want to use. An application can have multiple Routes, but our application uses only one</p>
                    <p>Routes can be nested. The first Route has a path of "/"" and renders the PageOne component.</p>
                    <p>The nested Route's inherit and add to the parent route. So the PageTwo path is combined with the parent and becomes /PageTwo.</p>
                    <p>"Setting the path to "*" will act as a catch-all for any undefined URLs. This is great for a 404 error page"</p>
                </div>
                <div>
                    <h2>Link</h2>
                    <p>"Link" does two things simultaneously. First it sets the current page, Second it is used to keep track of the browsing history </p>
                    <img src={Link} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Router