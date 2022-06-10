import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import css from '../styles/card.module.css'
import { FaHeart } from "react-icons/fa";

function ContentCard() {
    const [data, setData] = useState("");
    const [favourite, setFavourite] = useState(false);

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
          <Card  className={css.card}>
            <Card.Img className={css.image} variant="top" src={a.image} />
            <Card.Body>
              <Card.Title className={css.title} >{a.title}</Card.Title>
              <Card.Text className={css.text} >{a.description}</Card.Text>
              <Card.Text className={css.cat}>{a.category}</Card.Text>
            </Card.Body>
            <button
              className={css.fave}
              onClick={() => setFavourite((favourite) => !favourite)}
            >
              <FaHeart color={favourite ? "grey" : "red"} />
            </button>
          </Card>
          </Col>
          </Row>
          ))}
    
    </div>
  );
}

export default ContentCard;