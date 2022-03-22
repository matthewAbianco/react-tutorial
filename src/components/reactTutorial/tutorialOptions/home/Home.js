import React from 'react'
import './Home.css'
import hi from './hi.png'

const Home = () => {
    return (
        <div className='home__container'>
            <div className='home__content'>
                <div className='home__title'>
                    <h2>The Matthew Bianco I am React and so can you home page of Destiny </h2>
                </div>
                <div className='home__about'>
                    <h3 className='home__about--h3'>About</h3>
                    <h3 className='home__about--h3'></h3>
                    <h3 className='home__about--h3'></h3>
                    <h3 className='home__about--h3'></h3>
                    <h3 className='home__about--h3'></h3>
                    <h3 className='home__about--h3'></h3>
                </div>

                <div className='home__about__section'>
                    <p className='home__about__section__text'> <img className='home__hi__img' src={hi} alt='hi' /> This is a React app
                        that I made so I could teach myself React. I built it based on the <a href='https://www.w3schools.com/react/react_getstarted.asp' className='home__about__section--anchor'>W3schools</a> layout.
                        While w3schools will be my primary source for my descriptions, Everything will be explained in my own words with links
                        given if neccessicary. The CSS Styling will be inconsistent as I am looking to try new things and this is as good of a
                        medium as any. As well, having a visual reminder of the styling helps me remember it for future projects.

                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home