import { useState, useEffect } from 'react'
import './UseEffect.css'

import Name from './assets/Name.png'
import Timer from './assets/Timer.png'
import Width from './assets/Width.png'
import Height from './assets/Height.png'


const UseEffect = () => {

    const [count, setCount] = useState(0)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const [name, setName] = useState("")


    // on every render
    useEffect(() => {
        window.addEventListener("resize", updateWindowHeight)
        console.log("This is your", { windowHeight })
    });

    // on first Render/Mount only. componentDidMount alternative. 
    useEffect(() => {
        window.addEventListener("resize", updateWindowWidth)
        console.log("This is your", { windowWidth })
    }, []);

    // on first Render + whenever dependancy chagnes! 
    // componentDidUpdate Alternative
    useEffect(() => {
        console.log(`The name is  ${name}`)
    }, [name])

    // follows the same rules, except this handles the unmounting on a component! - componentWillUnmount Alternative
    useEffect(() => {
        window.addEventListener("resize", updateWindowHeight)

        // when component unmounts, this cleanup code will run
        return () => {
            window.removeEventListener("resize", updateWindowHeight)
        }
    }, [])

    const updateWindowHeight = () => {
        setWindowHeight(window.innerHeight)
    }

    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth)
    }


    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 5000);

        return () => clearTimeout(timer)
    });



    return (
        <div className='effect__container'>
            <div className='effect__content'>
                <div className='effect__section'>
                    <h1>useEffect Hooks</h1>
                    <p>The useEffect Hook runs on every render. But we can control when side effects run. </p>
                    <p>The useEffect allows components to perform additional effects.</p>
                    <p>These effects include timers, updating the DOM and fetching data.</p>
                    <p>The useEffect hook takes two arguments with the second argument being optional.</p>
                    <p>The useEffect hook replaces the "lifecycle" methods that were needed in class based components.</p>
                    <p>While these "lifecycle methods" will be common in legacy code, it is outside the scope of this lesson. </p>
                </div>
                <div className='effect__section'>
                    <h2>Different types of functions and how we can manage them</h2>
                    <p>On this page we have four different examples of the useEffect hook in use.</p>
                    <p>The useEffect hook can be written in different ways to depending on how many times we want our code executed and when we would want it executed. These examples will reflect that.   </p>
                    <ol>
                        <li>A timer that upates once every 5 seconds</li>
                        <li>A function that displays the screens height in pixels</li>
                        <li>A function that displays the screens width in pixels</li>
                        <li>A text box that updates in the console after every keystroke</li>
                    </ol>
                </div>
                <div className='effect__section'>
                    <div>
                        <h1>The useEffect Hook</h1>
                        <p>To show what code gets executed once and what gets executed with each render, open the console with the f12 key.</p>
                    </div>
                </div>
                <div className='effect__section'>
                    <div>
                        <h2>Execute On Page Load</h2>
                        <p>This piece of code will only run once the page loads on the first render.</p>
                        <p>We make it render only once by placing "[]" empty as our second argument. The second argument is also reffered to as the dependancy.</p>
                        <p>While you can change the size of the page and the number displayed will update, the console.log code will not run.</p>
                        <h2>the window Width is {windowWidth} </h2>
                        <img src={Width} alt="" />
                    </div>
                </div>
                <div className='effect__section'>
                    <div>
                        <h2>Always Execute</h2>
                        <p>This timer function executes every 5 seconds.</p>
                        <p>While This piece of code has no dependancy as its second argument. It will cause the page to render again, executing other code on the page.</p>
                        <p>The timer is at count {count}</p>
                        <img src={Timer} alt="" />
                    </div>
                </div>
                <div className='effect__section'>
                    <div>
                        <h2>Execute On Page Load and With Each Render</h2>
                        <p>This piece of code has no dependancy, meaning it will execute the console.log on every render.</p>
                        <p>The page will render whenever we adjust the size of our window or whenever the timer function executes. </p>
                        <h2>the window Height is {windowHeight} </h2>
                        <img src={Height} alt="" />
                    </div>
                </div>
                <div className='effect__section'>
                    <div>
                        <h2>Execute On Page Load And When Used, Not On Every Render</h2>
                        <p>By placing the "name" in our dependancy, we are telling our useEffect hook to execute whenever the "name" value is changed. This can be seen in the console. </p>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter a name"
                        ></input>
                        <p></p>
                        <img src={Name} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseEffect