import axios from "axios";

const fetchTest = () =>
  axios
    .get(`https://fakestoreapi.com/products`)
    .then((res) => res.data[0].title)
    .catch((err) => console.error(err));

export default fetchTest;
