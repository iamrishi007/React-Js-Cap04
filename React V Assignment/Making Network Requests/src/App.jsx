import { useState } from 'react'
import DataDisplay from './componant/DataDisplay'

function App() {


  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)


  async function fetchData() {

    setIsLoading(true)
    try {


      const apiUrl = await fetch('https://jsonplaceholder.typicode.com/posts')
      const apiData = await apiUrl.json()
      setData(apiData)
      setIsLoading(false)

    } catch (error) {
      setError(error.message)
      setIsLoading(false)
    }

  }


  return (
    <>

      <h>Network Request</h>
      <br />
      <br />
      <button onClick={fetchData}>Get Data</button>

      {isLoading && <DataDisplay />}

      {error && <p>{error}</p>}
      {data.map((el) => <div key={"Uniq"} style={{ border: "1px solid black", margin: "10px", textAlign: "center" }}>
        <p>Id :{el.id}</p>
        <h3>title :{el.title}</h3>
        <h2>body :{el.body}</h2>

      </div>)}

    </>
  )
}

export default App
