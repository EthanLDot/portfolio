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
        src="/images/anheuser-busch.png"
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
                Work in progress. More information soon!
              </p>
              <p className={styles.experienceText}>&nbsp;</p>
              <p className={styles.experienceText}>
                Work in progress. More information soon!
              </p>
              <p className={styles.experienceText}>&nbsp;</p>
              <p className={styles.experienceText}>
                Work in progress. More information soon!
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
            src="/images/vector-10.svg"
          />
          <img
            className={styles.expandDownTop}
            alt=""
            src="/images/vector-91.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default ExperiencePage;
