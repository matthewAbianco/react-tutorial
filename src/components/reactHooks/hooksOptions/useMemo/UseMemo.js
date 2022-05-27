import React, { useState, useMemo } from 'react'
import './UseMemo.css'
import UMemo from './assets/UMemo.png'

const UseMemo = () => {

    const [count, setCount] = useState(0);
    const [input, setInput] = useState('')


    const slowFunction = (num) => {
        for (let i = 1; i < 1_000_000_000; i++) {
            num += 1;
        }
        return num;
    };


    const calculation = useMemo(() => slowFunction(count), [count]);
    const increment = () => {
        setCount((c) => c + 1);
    };


    return (
        <div className='umemo__container'>
            <div className='umemo__content'>
                <div className='umemo__section'>
                    <h1>useMemo</h1>
                    <p>The useMemo and useCallback hook are very similar.</p>
                    <p>While useCallback holds the value of a function, useMemo holds the value of a return statement.</p>
                    <p>The value of useMemo is that it can hold the value of functions that take alot of time to calculate.</p>
                </div>
                <div className='umemo__section'>
                    <h2>Working With useMemo</h2>
                    <p>Below are two functions, a slow function and a fast function.</p>
                    <p>Because the slow function is wrapped with useMemo, it will not cause a render when we use our fast function, making the page much faster.</p>
                    <p>The slow function will always be slow, but it will only be slow when its value gets changed.</p>
                </div>
                <div className='umemo__section'>
                    <h2>Simple function</h2>
                    <input type='text' onChange={e => setInput(e.target.value)} value={input} />
                </div>
                <div className='umemo__section'>
                    Count: {count}
                    <button onClick={increment}>+</button>
                    <h2>Expensive Calculation</h2>
                    {calculation}
                    <p></p>
                    {slowFunction}
                    <img src={UMemo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default UseMemo