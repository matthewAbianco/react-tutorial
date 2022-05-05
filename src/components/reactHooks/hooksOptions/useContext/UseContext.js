import React from 'react'
import './UseContext.css'
import Props from './assets/Props.png'
import AUseContext from './assets/AUseContext.png'
import Main from './assets/Main.png'
import Code from './assets/Code.png'
import Undefined from './assets/Undefined.png'
import Username from './assets/Username.png'
import Provider from './assets/Provider.png'





const UseContext = () => {
    return (
        <div className='context__container'>
            <div className='context__content'>
                <div className='context__section'>
                    <h1>The useContext Hook</h1>
                    <p>useContext is how to best manage state globally</p>
                    <p>Prior to useContext, what was referred to as "prop drilling" was how information was passed down to components. </p>
                    <p>A common use of useContext is to manage log in information, which is what this demonstration will cover.</p>
                </div>
                <div className='context__section'>
                    <h2>Prop Drilling vs useContext</h2>
                    <div>
                        <h3>Prop Drilling</h3>
                        <p>P</p>
                        <img src={Props} alt="" />
                    </div>
                    <div>
                        <h3>useContext</h3>
                        <img src={AUseContext} alt="" />
                    </div>
                </div>
                <div className='context__section'>
                    <h2>useContext App code</h2>
                    <p>With this code, we pass our information from our App component to the Home and Display compoent with useContext. Or as its called in this code, "createContext"</p>
                    <img src={Code} alt="" />
                    <p>First, for us to use this code in other components, we must export it.</p>
                    <p>Then we create our variable. In this case, it is called UserName</p>
                    <p>We then make it = React.createContext () </p>
                    <img src={Username} alt="" />
                    <p>For us to determine which compoents will be able to access this data, we wrap the components we want it passed down to with UserName.Provider</p>
                    <p>The "provider" means we are providing the data we want passed down. The value of that data in our "const UserName" is null, so we give it a value of "tony" </p>
                    <img src={Provider} alt="" />
                </div>
                <div className='context__section'>
                    <h2>useContext App outcome</h2>
                    <p>When we run this data on our App page, we see all of the data from our app page and the two pages we imported with the value of UserName being displayed in each component</p>
                    <img src={Main} alt="" />
                </div>
                <div className='context__section'>
                    <h2>useContext undefined error</h2>
                    <p>When we try to view the value of "tony" on our Display page, We just get a value of undefined. </p>
                    <img src={Undefined} alt="" />
                </div>
            </div>
        </div>
    )
}

export default UseContext