import React from 'react'
import './ES6_Intro.css'
import { Link } from 'react-router-dom'

const ES6_Intro = () => {
  return (
    <div className='es6Intro__container'>
      <div className='es6Intro__title'>
        <h2>What is ES6?</h2>
      </div>
      <div className='es6Intro__description'>
        <p>ECMAScript, abbreviated at ES6, is another term for JavaScript. JavaScript is the programming language of React. ES6 Is the 6th verson of ECMAScript and was released in 2015 </p>
      </div>
      <div className='es6Intro__featues'>
        <h2>Es6 Features to be familiar with</h2>
        <ol>
          <Link to='/Classes'><li>Classes</li></Link>
          <Link to='/ArrowFunctions'><li>Arrow ArrowFunctions</li></Link>
          <Link to='/Variables'><li>Variables</li></Link>
          <Link to='/ArrayMethods'><li>Array Methods</li></Link>
          <Link to='/Destructuring'><li>Destructuring</li></Link>
          <Link to='/Modules'><li>Models</li></Link>
          <Link to='/TernaryOperator'><li>Ternary Operator</li></Link>
          <Link to='/SpreadOperator'><li>Spread Operator</li></Link>


        </ol>
      </div>
    </div>
  )
}

export default ES6_Intro