import css from "./styles/home.module.css"
import ContentCard from "./components/Card";

//The main page
function App() {
  return (
    <div className={css.Home}>
      <h1 className={css.Name}>
        Welcome to NORTH & SOUTH FACE
      </h1>
    <ContentCard/>
    </div>
  );
}

export default App;
