import React from 'react'
import './SassStyling.css'

import Extend from './assets/Extend.png'
import Importing from './assets/Importing.png'
import Mixin from './assets/Mixin.png'
import Nesting from './assets/Nesting.png'
import SassVariable from './assets/SassVariable.png'

const SassStyling = () => {
    return (
        <div className='sass__container'>
            <div className='sass__content'>
                <div className='sass__section'>
                    <h1>SASS Styling</h1>
                    <p>SASS: Syntatically Awesome Style Sheet.</p>
                    <p>SASS can do all of the things that CSS can do.</p>
                    <p>SASS has an assortment of features that make CSS code me more reusable. Saving developers time. </p>
                    <p>SASS comes installed when beginning a react project. It will need to be installed manually when using HTML.</p>
                    <p>Type "npm i sass" in the terminal to add SASS to a project.</p>
                </div>
                <div className='sass__section'>
                    <h2>Variables</h2>
                    <p>Variables are possibly the most powerful aspect of SCSS. It allows developers to assign CSS properties to a variable.</p>
                    <p>This variable can then be applied to our classes. The power of this is that by editing our variable, we change every class we assigned. <br />
                        that variable to. Thus allowing a single line of code to affect our entire document, instead of having to go through and edit each class individually we want changed.  </p>
                    <p>To create a variable, begin with the $ symbol, followed by a name, to declare the variable you want.</p>
                    <img src={SassVariable} alt="" />
                </div>
                <div className='sass__section'>
                    <h2>Nesting</h2>
                    <p>Nesting works the same in SASS as it does in HTML.</p>
                    <p>Nesting allows us to write cleaner code and keep our code compartmentalized.</p>
                    <img src={Nesting} alt="" />
                </div>
                <div className='sass__section'>
                    <h2>Importing</h2>
                    <p>For SCSS code to be reused and added to other SCSS files, two things need to be done. </p>
                    <p>The first is, the SCSS file we want to export our CSS from needs to begin with a "_". Example: "_example.scss".</p>
                    <p>The second is, to import a file, we put "@import" followed by the filename we want to import. You do NOT need to add the "_" when writing the filename you are importing.</p>
                    <img src={Importing} alt="" />
                </div>
                <div className='sass__section'>
                    <h2>@Mixin and @Include</h2>
                    <p>@mixin and @include allows code to be reused throughout the same document.</p>
                    <p>The @mixin directive allows CSS to be exported while the @include allows CSS to be imported.</p>
                    <img src={Mixin} alt="" />
                </div>
                <div className='sass__section'>
                    <h2>Extend: @extend</h2>
                    <p>The @extend feature works very similarly to the @mixin and @include feature. While the @mixin requires us to <br></br> specify what code we want to reuse.  The @extend allows us to
                        simply reuse any CSS code we want within the same document.  </p>
                    <img src={Extend} alt="" />
                </div>
                <div className='sass__section'>
                    <h2>SASS Functions</h2>
                    <p>SASS can also execute functions. While this is certainly a powerful feature, it is outside the scope of this project as the features discussed, in the opinion of this writer, should be created in javascript.  </p>
                    <p>More information can be found here on SASS functions. <a href='https://www.w3schools.com/sass/sass_functions_string.php' target='__blank'></a> </p>
                </div>
            </div>
        </div>
    )
}

export default SassStyling