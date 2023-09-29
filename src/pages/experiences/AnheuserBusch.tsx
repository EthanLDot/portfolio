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
    document.title = "Portfolio | Anheuser-Busch";  
  }, []);

  return (
    <div className={styles.experiencePage}>
      <img
        className={styles.experiencePageChild}
        alt=""
        src={require('../../images/anheuser-busch.png')}
      />
      <div className={styles.rhsFrame}>
        <div className={styles.frame}>
          <div className={styles.experienceHeader}>
            <h1 className={styles.sampleItem}>Anheuser Busch</h1>
            <div className={styles.frame1}>
              <div className={styles.locationDateContainer}>
                <p className={styles.experienceText}>St. Louis, Missouri</p>
                <p className={styles.experienceText}>06/2022 - 08/2022</p>
              </div>
            </div>
          </div>
          <div className={styles.scrollableText}>
          <div className={styles.experienceText}>
              <p className={styles.experienceText}>
              In late 2021, I accepted a position for Anheuser Busch's Tech Trainee internship. This allowed me to work with an established team in the headquarters of one of the largest beverage companies in the world.
              </p>
              <p className={styles.experienceText}>&nbsp;</p>
              <p className={styles.experienceText}>
              After some initial work on rewriting Sharepoint documentation for the North American tech teams, I was then tasked to work on a new project for Anheuser that involved finding new ways for IT Support to interact with users and identifying a solution based on user feedback. We took a design thinking approach, and internal focus grouping suggested that our users wanted an online and 24-7 solution more efficient than calling an actual service agent or writing out a ticket request form. Thus, we decided to build a chatbot agent as that would minimize monetary development cost and extra training.
              </p>
              <p className={styles.experienceText}>&nbsp;</p>
              <p className={styles.experienceText}>
              The backbone of our chatbot agent was constructed with Microsoft Power Apps, and I also built a simple interface on top of it using HTML/CSS/JS that would blend in with our IT support landing page. After some initial supervised testing with employees from non-tech departments, I took their feedback and made some improvements before changing the bot logic to make an HTTP request to an existing API endpoint that would assist with service ticket production. Throughout the development of this project, I was in constant communication with my manager, other members of the information technology department, and outside contractors to collaborate on development.
              </p>
              <p className={styles.experienceText}>&nbsp;</p>
              <p className={styles.experienceText}>
              Early estimates suggested the chatbot would increase resolution rates by 5% and reduce service agent workload by 10%. In fact, the project itself continues to this day; additional integrations with Azure AD, Azure Cognitive Services, and Bot Composer Framework build off of the foundation I helped set. Deployment was just the beginning, the focus now is on continual improvement, user adoption, and integration. I was also honored to be able to live in St. Louis, Missouri while developing my soft skills and technical skills in Anheuser-Busch's fast-paced, yet casual environment.
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
