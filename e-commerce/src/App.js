import "./App.css";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ContentCard from "./components/Card";

function App() {


  return (
    <div className="App">
      <h1 style={{ textAlign: "center", fontWeight: 200 }}>
        Welcome to NORTH & SOUTH FACE
      </h1>
    <ContentCard/>
    </div>
  );
}

export default App;
