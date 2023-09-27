import { FunctionComponent } from "react";
import "./global.css"
import CardContainer from "./components/CardContainer";
import "./App.css";
import {Link} from 'react-router-dom';
import { useEffect} from "react";
const HomePage: FunctionComponent = () => {
  // const navigate = useNavigate();

  useEffect(() => {
    document.title = "Portfolio | Ethan Lee";  
  }, []);

  return (
    <div className="homePage">
      <footer className= "footer">
        <button
          className= "expandDownDouble"
          // onClick={onExpandDownDoubleClick}
        >
          <Link to="/portfolio/contents">
            <img
              className="expandDownTop"
              alt=""
              src={require('./images/vector.png')}
            />
            <img
              className="expandDownBottom"
              alt=""
              src={require('./images/vector.png')}
            />
          </Link>
        </button>
      </footer>
      <main className="content">
        <span className="title">
          I make technology cool for everyone.
        </span>
      </main>
      <CardContainer />
    </div>
  );
};

export default HomePage;
