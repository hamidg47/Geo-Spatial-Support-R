import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";

const TITLE = "Project | " + Config.SITE_TITLE;
const DESC =
  "This site is dedicated to comprehensive world mapping and the study of geography.";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Project extends React.Component {
  toggleDropdown = () => {
    const dropdown = document.getElementById("dropdown");
    if (dropdown) {
      dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
    }
  };

  render() {
    return (
      <>
      
        <Helmet>
          <title>{TITLE}</title>
          <link rel="canonical" href={CANONICAL} />
          <meta name="description" content={DESC} />
          <meta name="theme-color" content={Config.THEME_COLOR} />
        </Helmet>

        <header className="project_header">
          <img src="./img-vid/landsat_ts_cfo.gif" alt="Header" />
        </header>

        <section className="opinion-section">
          <div
            className="opinion-heading-container"
            onClick={this.toggleDropdown}
          >
            <h1 className="opinion-heading">Projects Navigation</h1>
            <span className="dropdown-icon">▽</span>
          </div>

          <div className="fade-line"></div>

          <div
            className="opinion-dropdown"
            id="dropdown"
            style={{ textDecoration: "underline" }}
          >
            <a href="./UAE Climate Report 2024.html">• UAE Climate Report 2024</a>
            <a href="./Remote Sensing Project.html">• Remote Sensing Projects</a>
            <a href="./Machine Learning in GIS.html">• Machine Learning Projects</a>
            <a href="./Land Deformation Detection.html">• Land Deformation Detection</a>
            <a href="./Disaster Detection.html">• Disaster Detection and Mapping</a>
          </div>
        </section>

        <section className="center-heading-section">
          <h5 className="center-heading">
            <a
              href="./UAE Climate Report 2024.html"
              style={{ textDecoration: "none", color: "white" }}
            >
              UAE Climate Change Report 2024
            </a>
          </h5>
        </section>

        <section className="info-section">
          <div className="info-content">
            <div className="info-text">
              <p className="description-text" style={{ fontSize: "28px" }}>
                <b>
                  This project, the UAE Climate Report 2024, explores the impacts
                  of climate change on the UAE region, highlighting key
                  environmental challenges such as rising temperatures, water
                  scarcity, and sea-level rise. It also proposes actionable
                  mitigation strategies, including renewable energy adoption,
                  water conservation, and sustainable urban planning, to support
                  the UAE's climate resilience and net-zero goals.
                </b>
              </p>
            </div>
            <div className="info-image">
              <img src="./img-vid/12.png" alt="Geospatial Insights" />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Project;
