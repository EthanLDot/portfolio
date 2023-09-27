import { FunctionComponent } from "react";
import styles from "./Licensing.module.css";
import {Link} from 'react-router-dom';
const ExperiencePage: FunctionComponent = () => {

  return (
    <div className={styles.experiencePage}>
      <div className={styles.rhsFrame}>
        <div className={styles.frame}>
          <div className={styles.experienceHeader}>
            <h1 className={styles.sampleItem}>Image Sources</h1>
          </div>
          <div className={styles.scrollableText}>
            <div className={styles.experienceText}>
              <li className={styles.experienceText}>
              <img src={require('../images/anheuser-busch@3x.png')} alt="anheuser busch factory" />
                Image by John W. Iwanski via Flickr, licensed under <a href="https://creativecommons.org/licenses/by-nc/2.0/">CC BY-NC 2.0</a>
              </li>
              <li className={styles.experienceText}>
              <img src={require('../images/coding-minds-academy@3x.png')} alt="coding classes" />
                Image by Katherine Connor via Jacobs School of Engineering, licensed under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>
              </li>
              <li className={styles.experienceText}>
              <img src={require('../images/roottech@3x.png')} alt="remote learning" />
                Image by Katerina Holmes via Pexels, licensed under <a href="https://creativecommons.org/licenses/publicdomain/">Copyright-Only Dedication</a>
              </li>
              <li className={styles.experienceText}>
              <img src={require('../images/taxi-time-prediction@3x.png')} alt="portuguese taxi" />
                Image by Jsoral under Wikimedia Commons, licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
              </li>
              <li className={styles.experienceText}>
              <img src={require('../images/uc-san-diego@3x.png')} alt="ucsd rady school" />
                Image by Weststk under Wikimedia Commons, licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
              </li>
              <li className={styles.experienceText}>
              <img src={require('../images/ucsd-zoo@3x.png')} alt="group of flamingos" />
                Image by Pedro Szekely via Flickr, licensed under <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC BY-SA 2.0</a>
              </li>
              <li className={styles.experienceText}>
              <img src={require('../images/anheuser-busch.png')} alt="anheuser busch clydesdales" />
                Image by Defense Visual Information Distribution Service via Picryl, licensed under <a href="https://creativecommons.org/publicdomain/mark/1.0/">Public Domain</a>
              </li>
              <li className={styles.experienceText}>
                All other images AI-generated from <a href="https://creator.nightcafe.studio">Nightcafe</a> or from personal gallery.
              </li>
            </div>
          </div>
        </div>
        <Link to="/portfolio/contents">
            <button
            className={styles.expandDownDouble}
            >
            <img
                className={styles.expandDownTop}
                alt=""
                src={require('../images/vector.png')}
            />
            <img
                className={styles.expandDownTop}
                alt=""
                src={require('../images/vector.png')}
            />
            </button>
        </Link>
      </div>
    </div>
  );
};

export default ExperiencePage;
