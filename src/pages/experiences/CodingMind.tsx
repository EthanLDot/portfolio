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
    document.title = "Portfolio | Unfinished Page";  
  }, []);

  return (
    <div className={styles.experiencePage}>
      <img
        className={styles.experiencePageChild}
        alt=""
        src={require('../../images/frame-10@2x.png')}
      />
      <div className={styles.rhsFrame}>
        <div className={styles.frame}>
          <div className={styles.experienceHeader}>
            <h1 className={styles.sampleItem}>Coding Mind Academy</h1>
            <div className={styles.frame1}>
              <div className={styles.locationDateContainer}>
                <p className={styles.experienceText}>Irvine, CA</p>
                <p className={styles.experienceText}>07/2020 - Present</p>
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
