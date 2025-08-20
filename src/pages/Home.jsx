import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Config from "../Config.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const TITLE = "Home  | " + Config.SITE_TITLE;
const DESC =
  "This site is dedicated to comprehensive world mapping and the study of geography.";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Home extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>{TITLE}</title>
          <link rel="canonical" href={CANONICAL} />
          <meta name="description" content={DESC} />
          <meta name="theme-color" content={Config.THEME_COLOR} />
        </Helmet>

        <header className="header-section">
          <video autoPlay muted loop className="header-video">
            <source src="/public/img vid/Video.mp4" type="video/mp4" />
          </video>
          <div className="header-overlay">
            <div className="text-content">
              <h1>
                Hi, I'm Hamid Gulzar <br /> your Geo Spatial Support
              </h1>
            </div>
            <div className="image-content">
              <img
                src="/public/img vid/asdasd.jpg"
                alt="Project preview"
                className="video-thumbnail clickable-image"
              />
            </div>
          </div>
        </header>

        <section className="recent-work">
          <hr />
          <h2 className="section-title">Recent Work</h2>
          <hr />
          <div className="work-content">
            <div className="work-image">
              <img
                src="/public/img vid/37.png"
                alt="Diagram showing climate impact assessment"
              />
            </div>
            <div className="work-description">
              <h3>Publication Alert</h3>
              <p>
                New article, “Assessment of Land Deformation and Groundwater
                Depletion using Sentinel-1 PS InSAR, GRACE, and Borehole Data,”
                is published in Remote Sensing Applications: Society and
                Environment (Impact Factor: 4.5). The study integrates satellite
                and borehole data to monitor land deformation and groundwater
                changes.
                <br />
                🔗{" "}
                <a href="https://doi.org/10.1016/j.rsase.2025.101639">
                  https://doi.org/10.1016/j.rsase.2025.101639
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="swot-section">
          <hr />
          <h2 className="section-title">UAE 2024 Climate Change Report</h2>
          <hr />
          <div className="swot-content">
            <div className="swot-images-left">
              <img
                src="/public/img vid/1.png"
                alt="SWOT map of UAE climate data"
              />
            </div>
            <div className="swot-text-image">
              <div className="swot-description UAE">
                <p>
                  Climate change poses significant challenges for the United
                  Arab Emirates (UAE), a country already characterized by its
                  arid climate and high temperatures. Rising global temperatures
                  are exacerbating heatwaves, leading to increased water scarcity
                  and higher energy demands for cooling. The UAE also faces
                  threats from rising sea levels, flash flooding, and droughts.
                  In response, the UAE has taken proactive measures such as
                  investing in renewable energy, promoting water conservation,
                  and committing to net-zero emissions by 2050. These efforts
                  highlight the UAE’s recognition of climate risks and its
                  dedication to sustainable development.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="swot-section" style={{ borderTop: "none" }}>
          <hr />
          <h2 className="section-title">SWOT Satellite Data Processing</h2>
          <hr />
          <div className="swot-content">
            <div className="swot-images-left">
              <img
                src="/public/img vid/2.png"
                alt="SWOT satellite data visualization of water distribution"
              />
            </div>
            <div className="swot-text-image">
              <div className="swot-description">
                <p>
                  The Surface Water and Ocean Topography (SWOT) satellite,
                  launched on December 16, 2022, a collaborative mission between
                  NASA and CNES (French Space Agency), is designed to provide
                  high-resolution measurements of water elevation changes, slope,
                  and river width coverage across Earth's surface. Using advanced
                  radar interferometry, SWOT can monitor water levels in lakes,
                  rivers, and oceans, enabling scientists to track changes in
                  water storage, flow dynamics, and flood patterns. Recently,
                  SWOT's data has been made open access. This data is invaluable
                  for improving water resource management, predicting floods and
                  droughts, and understanding the impacts of climate change on
                  freshwater systems. SWOT's ability to measure river width and
                  slope also aids in modeling river discharge and assessing the
                  health of aquatic ecosystems, making it a critical tool for
                  sustainable water management and disaster preparedness.
                </p>
              </div>
              <img
                src="/public/img vid/3.png"
                alt="Map of Ethiopia generated from SWOT satellite data"
                className="swot-bottom-image clickable-image"
              />
            </div>
          </div>
        </section>

        <section className="centered-image-section">
          <div className="centered-image-container">
            <img
              src="/public/img vid/4.png"
              alt="Comparison of water levels dataset 1"
            />
            <img
              src="/public/img vid/5.png"
              alt="Comparison of water levels dataset 2"
            />
          </div>
        </section>

        <div id="imageModal" className="modal">
          <span className="close">&times;</span>
          <img className="modal-content" id="modalImage" alt="" />
        </div>

        <section className="la-wildfire-section">
          <hr />
          <h2 className="section-title">Los Angeles Wildfire and NOx Change</h2>
          <hr />
          <div className="la-wildfire-content">
            <div className="la-image-40">
              <img
                src="/public/img vid/6.png"
                alt="Map showing wildfire spread in Los Angeles"
              />
            </div>

            <div className="la-image-60">
              <img
                src="/public/img vid/7.png"
                alt="Map showing nitrogen oxide changes in Los Angeles"
              />
            </div>
          </div>
        </section>

        <section className="major-projects">
          <hr />
          <h2 className="section-title">Major Projects</h2>
          <hr />

          <div className="project-row">
            <div className="media-block">
              <img
                src="/public/img vid/8.png"
                alt="Visualization from remote sensing project"
              />
              <a href="./Remote">
                <button className="project-btn">Remote Sensing Projects</button>
              </a>
            </div>

            <div className="media-block">
              <img
                src="/public/img vid/9.png"
                alt="Visual from UAE climate change report"
              />
              <a href="./UAE">
                <button className="project-btn">
                  UAE Climate Change Report 2024
                </button>
              </a>
            </div>

            <div className="media-block">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/e-ViOIcBTgI?si=nqAfZWItiV7poWEn"
                title="Flood Detection using Sentinel 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <a href="https://www.youtube.com/watch?v=e-ViOIcBTgI&t=17s">
                <button className="project-btn">
                  Flood Detection using Sentinel 1
                </button>
              </a>
            </div>
          </div>

          <div className="extra-buttons">
            <Link to="./About">
              <button className="nav-btn">About Me</button>
            </Link>
            <Link to="./Project">
              <button className="nav-btn">All Projects</button>
            </Link>
            <a
              href="https://www.linkedin.com/in/hamid-gulzar-534104231"
              style={{
                textDecoration: "none",
                fontSize: "2rem",
                color: "#1b4154",
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </section>

        <section className="contact-banner">
          <h2>Get in touch at hamidgul.gis@gmail.com</h2>
        </section>
      </>
    );
  }
}

export default Home;
