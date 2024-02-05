import { useState, useEffect } from "react"

export const PostItem = () => {
     const [data, setData] = useState([])
     const [pages, setPages] = useState(1)
     const [loading, setLoading] = useState(true)
     const [Error, setError] = useState(null)


     const ApiData = async () => {
          setLoading(true)
          try {
               const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${pages}`);
               const resData = await res.json();
               setData(resData)
               setLoading(false)
               console.log(loading);
          } catch (error) {
               setError(Error)
               setLoading(false)
          }
     };

     useEffect(() => {
          ApiData();
          console.log(pages);
     }, [pages]);



     return (
          <>

               {data.map((elm) => <div key={"Uniq"} style={{ width: "400px", border: "1px solid red", textAlign: "center", margin: "20px auto" }}>
                    <h3> Id: {elm.id}</h3>
                    <h2>{elm.title}</h2>
                    <h3>{elm.body}</h3>

               </div>)}

               <div style={{ textAlign: "center" }}>
                    <button style={{ margin: '10px' }} onClick={(() => setPages(pages - 1))} disabled={pages == 1 ? true : false}>Prev Page</button>

                    <button style={{ margin: '10px' }} onClick={(() => setPages(pages + 1))} disabled={pages == 10 ? true : false}>Next Page</button>
               </div>

          </>
     )
}

export default PostItem