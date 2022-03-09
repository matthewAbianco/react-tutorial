import React from 'react'
import './Home.css'
import hi from './hi.png'

const Home = () => {
    return (
        <div className='container'>
            <div className='content'>
                <div className='title'>
                    <h2>The Matthew Bianco I am React and so can you home page of Destiny</h2>
                </div>
                <div className='about'>
                    <h3 className='about--h3'>About</h3>
                </div>
                <div className='about__section'>
                    <img className='hi__img' src={hi} alt='hi' />
                    <p className='about__section__text'> This is a React app that I made so I could teach myself React. I built it based on the
                        <a href='https://www.w3schools.com/react/react_getstarted.asp' className='about__section--anchor'> w3schools</a> layout.
                        While w3schools will be my primary source for my descriptions, Everything will be explained in my own words with links
                        given if neccessicary The CSS Styling will be inconsistent as I am looking to try new things and this is as good of a
                        medium as any. As well, having a visual reminder of the styling helps me remember it for future projects.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home