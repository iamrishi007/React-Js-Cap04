import React, { useEffect, useState } from 'react'



function Timer() {

     const [sec, setSec] = useState(10)
     const [isLoading, setIsLoading] = useState(true)

     function handlePause() {
          setIsLoading(false)
     }

     function handleResume() {
          setIsLoading(true)
     }
     useEffect(() => {

          let interval;
          if (isLoading) {
               interval = setInterval(() => {
                    console.log("render");
                    setSec((prev) => {

                         if (prev <= 1) {
                              setIsLoading(false)
                              return 0
                         }
                         return prev - 1
                    })
               }, 1000)
          }
          return (() => {
               clearInterval(interval)
          })
     }, [isLoading])

     return (
          <div style={{ border: "1px solid red", backgroundColor: 'lightblue', width: "400px", height: "200px", padding: '10px', textAlign: "center", margin: '10px auto' }}>
               <h1>{sec}</h1>
               <br />
               <button style={{ color: "red", margin: '10px', height: "50px", width: "100px" }} onClick={handlePause}>Pause</button>
               <button style={{ color: "green", margin: '10px', height: "50px", width: "100px" }} onClick={handleResume}>Resume</button>
          </div>

     )
}

export default Timer



































// import React, { useEffect, useState } from 'react'


// function Timer() {
//      const [seconds, setSeconds] = useState(7)
//      const [isLoading, setIsLoading] = useState(true)

//      function handlePause() {
//           setIsLoading(false)
//      }

//      useEffect(() => {
//           let interval;
//           if (isLoading) {
//                interval = setInterval(() => {

//                     console.log(seconds);
//                     setSeconds((prev) => {

//                          if (prev <= 1) {

//                               setIsLoading(false)
//                               return 0
//                          }
//                          return prev - 1
//                     })
//                }, 1000)
//           }
//           return (() => {
//                clearInterval(interval)
//           })
//      },[isLoading])

//      return (
//           <>
//                <p>{seconds}</p>
//                <button onClick={handlePause}>Pause</button>

//           </>

//      )
// }

// export default Timer
