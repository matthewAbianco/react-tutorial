import React, { useState, useCallback, useEffect } from 'react'
import './UseCallback.css'
import List from './List'

import Regular from './assets/Regular.png'
import FullCallback from './assets/FullCallback.png'
import NoCallback from './assets/NoCallback.png'
import WCallback from './assets/WCallback.png'


const UseCallback = () => {

    const [count, setCount] = useState(0)
    const [sum, setSum] = useState(1)


    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 5000);
        console.log(`the timer is at ${count} `)
        return () => clearTimeout(timer)
    });

    const getItems = useCallback(() => {
        console.log(sum)
        return [sum, sum + 1, sum + 2]
    }, [sum])


    return (
        <div className='call__container'>
            <div className='call__content'>
                <div className='call__section'>
                    <h1>useCallback</h1>
                    <p>Every time a component re-renders, the functions within get recreated and executed.</p>
                    <p>The useCallback hook prevents a function from being called on every render.</p>
                    <p>useCallback works by only rendering once the props or dependencies have changed.</p>
                    <p>This can pervent loops from occuring and can increase performance of an application.</p>
                </div>
                <div className='call__section'>
                    <h2>Without useCallback</h2>
                    <p>Their are two functions in the code below</p>
                    <ol>
                        <li>A timer that produces a console.log every 5 seconds.</li>
                        <li>A input that has an output of 3 numbers based on the current number, and will console.log the input.</li>
                    </ol>
                    <p>Without useCallback, The timer and input function will console.log on every number change or 5 seconds.</p>

                    <p>This is how the code looks without useCallback</p>
                    <img src={Regular} alt="" />

                    <img src={NoCallback} alt="" />

                </div>
                <div className='call__section'>
                    <h2>With useCallback</h2>
                    <p>By adding useCallback to our GetItems function, the console.log will only run once we change the sum within.</p>
                    <p>The console.log for the timer function will execute as the function executes with every render. </p>
                    <div className='call__code' >
                        <div className='call__input'>
                            <input
                                type="number"
                                value={sum}
                                onChange={e => setSum(parseInt(e.target.value))}
                            />
                            <List getItems={getItems} />

                        </div>

                        <div className='call__input'>
                            <p> The count is at {count}</p>
                        </div>
                    </div>
                    <img src={WCallback} alt="" />
                    <img src={FullCallback} alt="" />

                </div>
            </div>
        </div >
    )
}

export default UseCallback