import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./global.css"
import CardContainer from "./components/CardContainer";
import "./App.css";
const HomePage: FunctionComponent = () => {
  // const navigate = useNavigate();

  const onLinkedInContainerClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/ethan-lee-2847981b0/");
  }, []);

  const onGithubContainerClick = useCallback(() => {
    window.open("https://github.com/EthanLDot");
  }, []);

  // const onExpandDownDoubleClick = useCallback(() => {
  //   navigate("/portfolio-page");
  // }, [navigate]);

  return (
    <div className="homePage">
      <footer className= "footer">
        <button
          className= "expandDownDouble"
          // onClick={onExpandDownDoubleClick}
        >
          <img
            className="expandDownTop"
            alt=""
            src="images/vector-9.svg"
          />
          <img
            className="expandDownBottom"
            alt=""
            src="images/vector-9.svg"
          />
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
