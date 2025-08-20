import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";

const TITLE = "M_L_GIS | " + Config.SITE_TITLE;
const DESC =
  "This site is dedicated to comprehensive world mapping and the study of geography.";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Machine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggleDropdown = () => {
    this.setState((prev) => ({ dropdownOpen: !prev.dropdownOpen }));
  };

  render() {
    const { dropdownOpen } = this.state;

    return (
      <>
        <Helmet>
          <title>{TITLE}</title>
          <link rel="canonical" href={CANONICAL} />
          <meta name="description" content={DESC} />
          <meta name="theme-color" content={Config.THEME_COLOR} />
        </Helmet>

        <nav className="Machine_top-links">
          <ul style={{ textDecoration: "underline" }}>
            <li>
              <a href="#RemoteSensing">
                Machine Learning in GIS and Remote Sensing
              </a>
            </li>
            <li>
              <a href="#GroundwaterPrediction">
                Groundwater Prediction using Machine Learning
              </a>
            </li>
          </ul>
        </nav>

        <main className="Machine_container">
          {/* Section Heading and Dropdown */}
          <section className="Machine_main-heading" id="RemoteSensing">
            <div
              className="Machine_opinion-heading-container"
              onClick={this.toggleDropdown}
              style={{ cursor: "pointer", userSelect: "none" }}
            >
              <h1 className="Machine_opinion-heading">Projects Navigation</h1>
              <span className="Machine_dropdown-icon">
                {dropdownOpen ? "△" : "▽"}
              </span>
            </div>

            <div className="Machine_fade-line"></div>

            {dropdownOpen && (
              <div
                className="Machine_opinion-dropdown"
                id="dropdown"
                style={{ display: "block" }}
              >
                <p>
                  <b>Machine learning (ML)</b> has become a powerful tool in
                  remote sensing, enabling the extraction of valuable insights
                  from vast amounts of satellite and aerial imagery. By
                  leveraging algorithms that learn from data, ML can
                  automatically classify land cover, detect changes, and
                  identify patterns in complex datasets. Supervised learning
                  methods, such as Random Forest (RF), Support Vector Machines
                  (SVM), and deep learning models like Convolutional Neural
                  Networks (CNNs), are widely used for remote sensing tasks due
                  to their ability to handle high-dimensional data and extract
                  spatial and spectral features effectively.
                </p>
                <h3>Applications of Machine Learning in Remote Sensing</h3>
                <p>
                  <b>• Land Cover Classification: </b>ML is used to classify
                  vegetation, urban areas, water bodies, and soil types with
                  high accuracy.
                </p>
                <p>
                  <b>• Disaster Detection:</b> ML algorithms can rapidly
                  identify disaster-affected areas, such as flood zones,
                  landslides, and wildfire burn scars.
                </p>
                <p>
                  <b>• Crop Monitoring:</b> ML models analyze vegetation indices
                  to predict crop health, growth stages, and yield estimation.
                </p>
                <p>
                  <b>• Urban Change Detection:</b> Detecting urban sprawl,
                  infrastructure development, and land-use changes using
                  multi-temporal imagery.
                </p>
                <p>
                  <b>• Deforestation Monitoring:</b> Identifying deforestation
                  and forest degradation patterns over time for conservation
                  efforts.
                </p>
                <p>
                  <b>• Object Detection:</b> Locating specific features like
                  buildings, roads, and vehicles in high-resolution images.
                </p>
                <p>
                  <b>• Water Body Detection:</b> Monitoring changes in lakes,
                  rivers, and reservoirs for drought and flood management.
                </p>
                <p>
                  <b>• Climate Change Analysis:</b> Identifying trends in
                  glacier retreat, sea-level rise, and desertification using
                  time-series data. Machine learning enhances the speed,
                  scalability, and accuracy of remote sensing analyses, offering
                  critical support for environmental monitoring, disaster
                  response, and sustainable resource management.
                </p>
              </div>
            )}
          </section>

          {/* Groundwater Prediction Section */}
          <section
            className="Machine_side-image-title"
            id="GroundwaterPrediction"
          >
            <div className="Machine_main-image-left">
              <img
                src="./img-vid/26.png"
                alt="Machine learning groundwater prediction code visualization"
              />
            </div>
            <div className="Machine_main-title-right">
              <hr />
              <h2 className="Machine_h2">
                Groundwater Prediction using Machine Learning
              </h2>
              <hr />
              <p>
                This project used <b>Long Short-Term Memory (LSTM)</b> and{" "}
                <b>Random Forest (RF)</b> models to predict groundwater levels
                in the UAE. The models were trained using various climate
                factors, including the El Niño–Southern Oscillation (ENSO)
                index and GRACE terrestrial water anomaly data. Below is a
                detailed description of the model performance based on several
                key evaluation metrics.
              </p>
            </div>
          </section>

          {/* Graph and Metrics Sections */}
          <section className="Machine_sub-images-layout">
            <div className="Machine_left-sub-images">
              <img
                src="./img-vid/22.png"
                alt="LSTM model time series results"
              />
              <img
                src="./img-vid/23.png"
                alt="LSTM model 95 percent confidence interval graph"
              />
            </div>
            <div className="Machine_right-sub-image">
              <h4>LSTM Model Performance</h4>
              <p>
                The LSTM model's performance was evaluated using both training
                and testing datasets. The evaluation metrics are as follows:
              </p>

              <h4>Training Set Metrics:</h4>
              <ul>
                <li>Root Mean Square Error (RMSE): 1.61</li>
                <li>Nash-Sutcliffe Efficiency (NSE): 0.21</li>
                <li>Correlation Coefficient: 0.51</li>
                <li>Index of Agreement (IA): -1.54</li>
              </ul>

              <h4>Testing Set Metrics:</h4>
              <ul>
                <li>Root Mean Square Error (RMSE): 0.42</li>
                <li>Nash-Sutcliffe Efficiency (NSE): 0.71</li>
                <li>Correlation Coefficient: 0.85</li>
                <li>Index of Agreement (IA): 0.27</li>
              </ul>

              <p>
                The testing results indicate better model performance compared
                to training, with a high correlation coefficient (0.85) and a
                moderately good NSE value of 0.71.
              </p>
            </div>
          </section>

          <section className="Machine_sub-images-layout">
            <div className="Machine_left-sub-images">
              <img
                src="./img-vid/24.png"
                alt="Second LSTM time series output"
              />
              <img
                src="./img-vid/25.png"
                alt="Second LSTM 95 percent confidence interval graph"
              />
            </div>
            <div className="Machine_right-sub-image">
              <h4>LSTM Model Performance</h4>
              <p>
                The LSTM model's performance was evaluated using both training
                and testing datasets. The evaluation metrics are as follows:
              </p>

              <h4>Training Set Metrics:</h4>
              <ul>
                <li>Root Mean Square Error (RMSE): 1.61</li>
                <li>Nash-Sutcliffe Efficiency (NSE): 0.21</li>
                <li>Correlation Coefficient: 0.51</li>
                <li>Index of Agreement (IA): -1.54</li>
              </ul>

              <h4>Testing Set Metrics:</h4>
              <ul>
                <li>Root Mean Square Error (RMSE): 0.42</li>
                <li>Nash-Sutcliffe Efficiency (NSE): 0.71</li>
                <li>Correlation Coefficient: 0.85</li>
                <li>Index of Agreement (IA): 0.27</li>
              </ul>

              <p>
                The testing results indicate better model performance compared
                to training, with a high correlation coefficient (0.85) and a
                moderately good NSE value of 0.71.
              </p>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Machine;
