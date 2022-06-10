import "./App.css";
import { useState, useEffect } from "react"

function App() {

  const[data, setData] = useState('')

  useEffect(()=>{

    const fetchData = async () =>{
      const res = await fetch ("https://fakestoreapi.com/products")
      const data = await res.json()
      setData(data)
    }
    fetchData()
  }, [])

 


  console.log(data)


  return <div className="App">Hi team
      <h1>Welcome to NORTH and SOUTH</h1>
      <div>
        {data.map((a, id)=>(
          <div key={id}>
          <h4>
            {a.title}
            </h4>
          <img src={a.image} alt={a.category}/>
          <p>{a.description}</p>
            <h6>{a.category}</h6>
          </div>
        )
        )}
      </div>
      </div>;
}

export default App;
