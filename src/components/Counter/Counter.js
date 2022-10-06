import { useState } from 'react'

const Counter = ({ children }) => {
    const initial = 10
    const [count, setCount] = useState(initial)

    const decrement = () => {
        if(count > 0)  {
            setCount(count - 1)
        }
    }

    const increment = () => {
        setCount(count + 1)
    }

    const reset = () => {
        setCount(initial)
    }


return (
    <div>
        <h1>{count}</h1>
        <button onClick={decrement}>Restart</button>
        <button onClick={increment}>Sumar</button>
        <button onClick={reset}>Reset</button>
    </div>
    )
}  

export default Counter