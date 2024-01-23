<!DOCTYPE html>
<html lang="en">

<head>
     <meta charset="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>Boilerplate Code</title>
</head>

<body>
     <div id="root">
          Hello From React
     </div>
</body>
<script src="https://www.unpkg.com/react@18.2.0/umd/react.development.js"></script>
<script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>


</html>
<script type="text/babel">

     let root = document.getElementById('root')
     let rootElement = ReactDOM.createRoot(root)

     function RenderingButton({ run, setRun }) {
          return (
               <div>
                    <button onClick={() => {
                         { setRun(run + 4) }
                    }}>Increase runs by 4</button>

                    <button onClick={() => {
                         { setRun(run + 8) }
                    }}>Increase runs by 8</button>

                    <button onClick={() => {
                         { setRun(run + 3) }
                    }}>Increase runs by 3</button>


               </div>
          )
     }

     function WicketUpdate() {
          <button onClick={() => {
               { setWicket(wicket + 1) }
          }}>Update Wickets</button>
     }
     let CricketScoreboard = () => {
          let runData = React.useState(0)
          const [run, setRun] = runData

          let wicketData = React.useState(0)
          const [wicket, setWicket] = wicketData

          return (

               <>

                    <div>
                         <h1>Team Total Score Is {run}</h1>
                         <p>Wickets Is {wicket}</p>
                    </div>

                    <div>

                         {wicket < 10 ? (


                              <RenderingButton run={run} setRun={setRun} wicket={wicket} setWicket={setWicket} />

                         ) : (
                              <RenderingButton run={run} setRun={setRun} wicket={wicket} setWicket={setWicket} />

                         )}
                    </div>

               </>
          )
     }
     rootElement.render(<CricketScoreboard />)

</script>