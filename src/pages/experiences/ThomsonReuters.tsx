import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Experience.module.css";
import { useEffect} from "react";
const ExperiencePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onExpandDownDoubleClick = useCallback(() => {
    navigate("/portfolio/contents");
  }, [navigate]);

  useEffect(() => {
    document.title = "Portfolio | Thomson Reuters";  
  }, []);

  return (
    <div className={styles.experiencePage}>
      <img
        className={styles.experiencePageChild}
        alt="thomson reuters-style office ai-generated"
        src={require('../../images/thomson-reuters.png')}
      />
      <div className={styles.rhsFrame}>
        <div className={styles.frame}>
          <div className={styles.experienceHeader}>
            <h1 className={styles.sampleItem}>Thomson Reuters</h1>
            <div className={styles.frame1}>
              <div className={styles.locationDateContainer}>
                <p className={styles.experienceText}>Eagan, Minnesota</p>
                <p className={styles.experienceText}>06/2023 - 09/2023</p>
              </div>
            </div>
          </div>
          <div className={styles.scrollableText}>
          <div className={styles.experienceText}>
              <p className={styles.experienceText}>
              In late 2022, I landed a software engineering internship with Thomson Reuters, a multinational conglomerate specializing in various industries. Upon the start of my assignment, I was assigned to the global trade division, which with the help of our corporate partners facilitates billions per year in traded goods.
              </p>
              <p className={styles.experienceText}>&nbsp;</p>
              <p className={styles.experienceText}>
              One of our key team goals was to debut a new SQL analyzer tool, which had to be built from the ground up because we had unique guidelines for best practices. At the beginning of my internship, I was responsible for completing some backend C# code that ran the parser logic for specific SQL rules. This included writing test cases with expected outputs. We then continued by wrapping our code in an ASP.NET Web API app and then focused on developing a functional API with a Read endpoint. Work was done on Swagger UI to simplify testing and present information on the API usage more easily. Finally, a controller was added for this service as well as a basic interface, using components designed by our UI teams and constructed with Angular. I was also put to work on a new Power Automate flow meant to enhance resolution rates by reminding support engineers to respond to technical support escalation tickets in a timely manner, depending on who the last respondent was.              </p>
              <p className={styles.experienceText}>&nbsp;</p>
              <p className={styles.experienceText}>
              The SQL analyzer is still a work in progress. However, during that summer, I still managed to learn about a number of new technologies and tools, while building the front and backend of a corporate web app. In addition, I got to stay in the beautiful Twin Cities metro area and got to network with other interns and employees, including the CEO Steve Hasker.
              </p>
            </div>
          </div>
        </div>
        <button
          className={styles.expandDownDouble}
          onClick={onExpandDownDoubleClick}
        >
          <img
            className={styles.expandDownTop}
            alt=""
            src={require('../../images/vector.png')}
          />
          <img
            className={styles.expandDownTop}
            alt=""
            src={require('../../images/vector.png')}
          />
        </button>
      </div>
    </div>
  );
};

export default ExperiencePage;
