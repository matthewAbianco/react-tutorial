import { useState, useEffect } from 'react'
import './UseEffect.css'

const UseEffect = () => {

    const [count, setCount] = useState(0)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const [name, setName] = useState("")

    // on every render
    useEffect(() => {
        window.addEventListener("resize", updateWindowHeight)
    });

    useEffect(() => {

    }, [])

    // on first Render + whenever dependancy chagnes! 
    // componentDidUpdate Alternative
    useEffect(() => {
        console.log(`The name changed to ${name}`)
    }, [name])

    // follows the same rules, except this handles the unmounting on a component! - componentWillUnmount Alternative
    useEffect(() => {
        window.addEventListener("resize", updateWindowHeight)

        return () => {
            // when component unmounts, this cleanup code will run
            window.removeEventListener("resize", updateWindowHeight)
        }
    }, [])

    const updateWindowHeight = () => {
        setWindowHeight(window.innerHeight)
    }


    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []);

    return (
        <div className='effect__container'>
            <div className='effect__content'>
                <div className='effect__section'>
                    <h1>useEffect Hooks</h1>
                    <p>The useEffect allows components to perform side effects.</p>
                    <p>These effects include timers, updating the DOM and fetching data.</p>
                    <p>The useEffect hook takes two arguments with the second argument being optional.</p>
                    <p>The useEffect hook replaces the "lifecycle" methods that were needed in class based components.</p>
                    <p>While these "lifecycle methods" will be common in legacy code, it is outside the scope of this lesson. </p>
                </div>
                <div className='effect__section'>
                    <h2>useEffect Hooks</h2>
                    <p>{count}</p>
                </div>
                <div className='App'>
                    <center>
                        <h1>The useEffect Hook</h1>
                        <h2>the window Height is {windowHeight} </h2>

                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter a name"
                        ></input>
                    </center>

                </div>


            </div>
        </div>
    )
}

export default UseEffect