import { useState } from 'react'
import '../App.css'
function Counter() {

     const [count, setCount] = useState(1)

     return (
          <>
               <h1>Counter Is {count}</h1>
               <button onClick={() => setCount(count + 1)}>Increase</button>
               <button onClick={() => setCount(count - 1)}>Decrease</button>
          </>
     )
}

export default Counter