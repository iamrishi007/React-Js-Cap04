// import { useState } from 'react'

import { useState } from "react"
import Timer from "./componant/Timer"



function App() {

  const [showComponent, setShowComponent] = useState(false)

  return (
    <>
      <div style={{textAlign :"center", margin:'20px auto'}}>
        <button style={{height:"50px",width:"100px",color:'aqua'}} onClick={() => setShowComponent(!showComponent)} >Toggale</button>

        {showComponent ? <Timer /> : <p>Please Click To Toggle Button....</p>}
      </div>
    </>
  )
}

export default App
