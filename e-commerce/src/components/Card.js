import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import css from '../styles/card.module.css'

function ContentCard() {
    const [data, setData] = useState("");

    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch("https://fakestoreapi.com/products");
          const data = await res.json();
          setData(data);
        };
        fetchData();
      }, []);
    
  return (
    <div className={css.cont}>
    
    {Array.from(data).map((a, id) => (
        <Row key={id} className={css.row}>
        <Col className={css.col} >
          <Card  style={{ width: "12rem" }}>
            <Card.Img className={css.image} variant="top" src={a.image} />
            <Card.Body>
              <Card.Title>{a.title}</Card.Title>
              <Card.Text>{a.description}</Card.Text>
              <Card.Text>{a.category}</Card.Text>
            </Card.Body>
          </Card>
          </Col>
          </Row>
          ))}
    
    </div>
  );
}

export default ContentCard;