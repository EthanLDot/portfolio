import { FunctionComponent, useCallback } from "react";
import HeaderCard from "../components/HeaderCard";
import { useNavigate } from "react-router-dom";
import styles from "./PortfolioPage.module.css";
import { useEffect} from "react";
const PortfolioPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLinkedInContainerClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/ethan-lee-2847981b0/");
  }, []);

  const onGithubContainerClick = useCallback(() => {
    window.open("https://github.com/EthanLDot");
  }, []);

  const onThomsonReutersContainerClick = useCallback(() => {
    navigate("/portfolio/experience/thomson-reuters");
  }, [navigate]);

  const onAnheuserContainerClick = useCallback(() => {
    navigate("/portfolio/experience/anheuser-busch");
  }, [navigate]);

  const onCodingMindContainerClick = useCallback(() => {
    navigate("/portfolio/experience/coding-mind");
  }, [navigate]);

//   const onUCSDExpContainerClick = useCallback(() => {
//     navigate("/portfolio/experience/ucsd");
//   }, [navigate]);

//   const onRootTechContainerClick = useCallback(() => {
//     navigate("/portfolio/experience/roottech");
//   }, [navigate]);

//   const onUCSDContainerClick = useCallback(() => {
//     navigate("/portfolio/education/ucsd");
//   }, [navigate]);

//   const onYonseiContainerClick = useCallback(() => {
//     navigate("/portfolio/education/yonsei");
//   }, [navigate]);

//   const onUCSDZooContainerClick = useCallback(() => {
//     navigate("/portfolio/projects/ucsd-zoo");
//   }, [navigate]);

//   const onPortfolioContainerClick = useCallback(() => {
//     navigate("/portfolio/projects/portfolio");
//   }, [navigate]);

//   const onCovidStudyContainerClick = useCallback(() => {
//     navigate("/portfolio/projects/covid-study");
//   }, [navigate]);

//   const onTaxiPredictionContainerClick = useCallback(() => {
//     navigate("/portfolio/projects/taxi-prediction");
//   }, [navigate]);

//   const onHowPrivateContainerClick = useCallback(() => {
//     navigate("/portfolio/projects/how-private");
//   }, [navigate]);

//   const onTravelTodayContainerClick = useCallback(() => {
//     navigate("/portfolio/projects/travel-today");
//   }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  const redirectToLicenses = useCallback(() => {
    navigate("/portfolio/licensing");
  }, [navigate]);

  useEffect(() => {
    document.title = "Portfolio | Contents";  
  }, []);
  return (
    <div className={styles.portfolioPage}>
      <header className={styles.header}>
        <HeaderCard
          onLinkedInContainerClick={onLinkedInContainerClick}
          onGithubContainerClick={onGithubContainerClick}
        />
      </header>
      <main className={styles.frame}>
        <section className={styles.content}>
          <div className={styles.experienceGallery}>
            <h2 className={styles.galleryTitle}>Experiences</h2>
            <div className={styles.experiencesGalleryContents}>
              <div className={styles.roottech}
                // onClick={onRootTechContainerClick}
              >
                <h3 className={styles.experience}>RootTech</h3>
              </div>
              <div className={styles.ucSanDiego}
                // onClick={onUCSDExpContainerClick}
              >
                <h3 className={styles.experience}>UC San Diego</h3>
              </div>
              <div className={styles.codingMindsAcademy}
                onClick={onCodingMindContainerClick}
              >
                <h3 className={styles.experience}>Coding Mind Academy</h3>
              </div>
              <div className={styles.anheuserBusch}
                onClick={onAnheuserContainerClick}
              >
                <h3 className={styles.experience}>Anheuser Busch</h3>
              </div>
              <div className={styles.thomsonReuters}
                onClick={onThomsonReutersContainerClick}
              >
                <h3 className={styles.experience}>Thomson Reuters</h3>
              </div>
            </div>
          </div>
          <div className={styles.educationGallery}>
            <h2 className={styles.galleryTitle}>Education</h2>
            <div className={styles.educationGalleryContents}>
              <div className={styles.yonseiUniversity}
                // onClick={onYonseiContainerClick}
              >
                <h3 className={styles.experience}>Yonsei University</h3>
              </div>
              <div className={styles.ucSanDiego2}
                // onClick={onUCSDContainerClick}
              >
                <h3 className={styles.experience}>UC San Diego</h3>
              </div>
            </div>
          </div>
          <div className={styles.projectGallery}>
            <h2 className={styles.galleryTitle}>Projects</h2>
            <div className={styles.projectGalleryContents}>
              <div className={styles.howPrivateRu}
                // onClick={onTravelTodayContainerClick}
              >
                <h3 className={styles.experience}>Travel Today</h3>
              </div>
              <div className={styles.covidInfectionsStudy}
                // onClick={onCovidStudyContainerClick}
              >
                <h3 className={styles.experience}>
                  COVID Infections Study
                </h3>
              </div>
              <div className={styles.ucsdZoo}
                // onClick={onUCSDZooContainerClick}
              >
                <h3 className={styles.experience}>UC San Diego Zoo</h3>
              </div>
              <div className={styles.taxiTimePrediction}
                // onClick={onTaxiPredictionContainerClick}
              >
                <h3 className={styles.experience}>
                  Taxi Time Prediction
                </h3>
              </div>
              <div className={styles.howPrivateRu2}
                // onClick={onHowPrivateContainerClick}
              >
                <h3 className={styles.experience}>How Private RU?</h3>
              </div>
              <div className={styles.personalPortfolio}
                // onClick={onPortfolioContainerClick}
              >
                <h3 className={styles.experience}>Personal Portfolio</h3>
              </div>
            </div>
          </div>
          <div className={styles.note} 
          onClick={redirectToLicenses}
          >
            Image licensing
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.button}>
          <div className={styles.backButton} 
          onClick={onBackClick}
          >
            Back
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;
