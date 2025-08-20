import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";

const TITLE = "L_D_D | " + Config.SITE_TITLE;
const DESC =
  "This site is dedicated to comprehensive world mapping and the study of geography.";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Land extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
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

        {/* Top Navigation Links */}
        <nav className="Land_top-links">
          <ul>
            <li>
              <a href="#Remote_sensing">
                • Land Deformation and Its Detection Using Remote Sensing
              </a>
            </li>
            <li>
              <a href="#Delhi_Groundwater">
                • Delhi Groundwater depletion causing Land deformation
              </a>
            </li>
            <li>
              <a href="#PS_InSAR">
                • Use of PS InSAR, Borehole and Grace Groundwater anomaly
                datasets to study impact on Lahore land deformation
              </a>
            </li>
            <li>
              <a href="#Landslide">
                • Landslide and land Deformation due to Earthquake in Khost
                City, Afghanistan 22-June-2022 and Damage Proxy mapping
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="Land_container">
          {/* Section Heading and Dropdown */}
          <section className="Land_main-heading" id="Remote_sensing">
            <div
              className="Land_opinion-heading-container"
              onClick={this.toggleDropdown}
              style={{ cursor: "pointer" }}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  this.toggleDropdown();
                }
              }}
              aria-expanded={dropdownOpen}
              aria-controls="dropdown"
            >
              <h1 className="Land_opinion-heading">
                Land Deformation and Its Detection Using Remote Sensing
              </h1>
              <span className="Land_dropdown-icon">
                {dropdownOpen ? "△" : "▽"}
              </span>
            </div>
            <div className="Land_fade-line"></div>

            {dropdownOpen && (
              <div
                className="Land_opinion-dropdown"
                id="dropdown"
                style={{
                  display: "block",
                  marginTop: "10px",
                  lineHeight: "1.8",
                }}
              >
                <p>
                  Land deformation, including subsidence, uplift, and lateral
                  shifts, occurs due to various natural and anthropogenic
                  factors such as tectonic activity, groundwater extraction,
                  mining, and infrastructure development. Remote sensing,
                  particularly <b>Interferometric Synthetic Aperture Radar (InSAR)</b>,
                  has revolutionized the monitoring of land deformation by
                  providing precise, high-resolution measurements over large
                  areas. Sentinel-1, a radar satellite mission from the
                  European Space Agency (ESA), is widely used for deformation
                  studies due to its all-weather, day-and-night imaging
                  capabilities.
                </p>
                <p>
                  Advanced InSAR techniques, such as{" "}
                  <b>Persistent Scatterer InSAR (PS InSAR)</b> and{" "}
                  <b>Small Baseline Subset (SBAS)</b>, allow for long-term
                  monitoring of slow-moving deformations by analyzing phase
                  changes in radar signals over multiple acquisitions. PS InSAR
                  is effective in urban environments with stable reflectors
                  like buildings, while SBAS is suitable for detecting broader
                  ground movements over vegetated or rural regions.{" "}
                  <b>Differential InSAR (D-InSAR)</b> is another widely used
                  technique that compares two SAR images acquired at different
                  times to measure surface displacement with{" "}
                  <b>millimeter-level accuracy.</b>
                </p>
                <p>
                  For <b>landslide detection</b>, remote sensing techniques
                  such as <b>InSAR, optical imagery, and LiDAR</b> are used to
                  analyze slope instability, ground movement patterns, and
                  post-landslide changes. Sentinel-1’s{" "}
                  <b>InSAR time-series analysis</b> provides early warnings of
                  slope deformation, while high-resolution optical data from
                  Sentinel-2 or commercial satellites helps classify
                  landslide-affected areas. Integrating these remote sensing
                  techniques enhances disaster preparedness, risk assessment,
                  and mitigation strategies for land deformation and associated
                  hazards.
                </p>
              </div>
            )}
          </section>

          {/* Section: Image + Title Side-by-Side */}
          <section className="Land_side-image-title" id="Delhi_Groundwater">
            <div className="Land_main-image-left">
              <img
                src="/public/img vid/27.jpg"
                alt="Delhi groundwater depletion analysis"
              />
            </div>
            <div className="Land_main-title-right">
              <hr />
              <h2>Delhi Groundwater depletion causing Land deformation</h2>
              <hr />
              <p>
                Groundwater depletion in Delhi and its associated land
                deformation were analyzed using Sentinel-1 SAR data and the
                Small Baseline Subset (SBAS) technique by processing Single Look
                Complex (SLC) interferograms. The observed land deformation in
                the Delhi region was around -3 mm per 12 days, with the majority
                concentrated in the New Delhi area. Additionally, GRACE-derived
                groundwater anomalies indicated a significant depletion of
                groundwater, with a total loss of over 50 cm from 2003 to 2022.
                The area of analysis covered a 0.5° x 0.5° grid.
              </p>
            </div>
          </section>

          {/* Section: Sub Images Layout */}
          <section className="Land_sub-images-layout">
            <div className="Land_left-sub-images">
              <img src="/public/img vid/28.png" alt="Urban subsidence zone 1" />
              <img src="/public/img vid/29 .png" alt="Urban subsidence zone 2" />
            </div>
            <div className="Land_right-sub-image">
              <img src="/public/img vid/30.jpg" alt="Urban subsidence zone 3" />
            </div>
          </section>

          <section className="Land_side-image-title" id="PS_InSAR">
            <div className="Land_main-image-left">
              <img
                src="/public/img vid/31.jpg"
                alt="PS InSAR and groundwater anomaly in Lahore"
              />
            </div>
            <div className="Land_main-title-right">
              <hr />
              <h2>
                Use of PS InSAR, Borehole and Grace Groundwater anomaly datasets
                to study impact on Lahore land deformation
              </h2>
              <hr />
              <p>
                New article, “Assessment of Land Deformation and Groundwater
                Depletion using Sentinel-1 PS InSAR, GRACE, and Borehole Data,”
                is published in Remote Sensing Applications: Society and
                Environment (Impact Factor: 4.5). The study integrates satellite
                and borehole data to monitor land deformation and groundwater
                changes.
                <br />🔗{" "}
                <a
                  href="https://doi.org/10.1016/j.rsase.2025.101639"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.1016/j.rsase.2025.101639
                </a>
              </p>
            </div>
          </section>

          <section className="Land_side-image-title" id="Landslide">
            <div className="Land_main-image-left">
              <img
                src="/public/img vid/32.png"
                alt="Landslide and deformation in Khost City"
              />
            </div>
            <div className="Land_main-title-right">
              <hr />
              <h2>
                Landslide and land Deformation due to Earthquake in Khost City,
                Afghanistan 22-June-2022 and Damage Proxy mapping
              </h2>
              <hr />
              <p>
                The earthquake that struck Khost City, Afghanistan, on June 22,
                2022, triggered significant landslides and land deformation,
                causing extensive damage to infrastructure and livelihoods. For
                monitoring earthquake-induced land deformation,{" "}
                <b>Damage Proxy Mapping (DPM)</b> using{" "}
                <b>Sentinel-1 Synthetic Aperture Radar (SAR)</b> is a vital
                tool. DPM identifies areas of structural damage by analyzing
                changes in radar backscatter before and after the event. In this
                case, Sentinel-1 SAR imagery revealed significant deformation
                patterns and damage zones caused by earthquake in Khost City.
                Advanced{" "}
                <b>Interferometric Synthetic Aperture Radar (InSAR)</b>
                techniques, such as <b>D-InSAR</b>, measured ground displacement
                with high accuracy.
              </p>
            </div>
          </section>

          {/* Section: Two Images Side by Side in Center */}
          <section className="Land_two-images-section">
            <div className="Land_two-images-wrapper">
              <img
                src="/public/img vid/33.png"
                alt="Damage proxy mapping before earthquake"
              />
              <img
                src="/public/img vid/34.png"
                alt="Damage proxy mapping after earthquake"
              />
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Land;
