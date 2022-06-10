import "./App.css";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import BasicExample from "./components/Card";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", fontWeight: 200 }}>
        Welcome to NORTH & SOUTH FACE
      </h1>
      <div>
      {/* {data.map((a, id)=>(
        <h3 key={id}>{a.title}</h3>
      ))} */}
      
        {Array.from(data).map((a, id) => (
          <Card key={id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={a.image} />
            <Card.Body>
              <Card.Title>{a.title}</Card.Title>
              <Card.Text>{a.description}</Card.Text>
              <Card.Text>{a.category}</Card.Text>
            </Card.Body>
          </Card>
        ))}
        ;
      </div>
    </div>
  );
}

export default App;
