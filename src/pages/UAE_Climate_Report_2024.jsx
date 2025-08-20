import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";

const TITLE = "UAE_C_Report 2024 | " + Config.SITE_TITLE;
const DESC =
  "This site is dedicated to comprehensive world mapping and the study of geography.";
const CANONICAL = Config.SITE_DOMAIN + "/";

class UAE extends React.Component {
  toggleDropdown = (id) => {
    const dropdown = document.getElementById(id);
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

        <main className="UAE_container">
          <h1 className="UAE_climate-title">UAE Climate Change Report 2024</h1>

          <div className="UAE_climate-content">
            <div className="UAE_climate-description">
              <h1 className="UAE_h1">
                The UAE Climate Change Report 2024 outlines key environmental
                shifts affecting the region. It includes updated research on
                rising temperatures, water scarcity, carbon emissions, and
                government strategies for climate resilience and sustainability.
                It is a vital document for policymakers, researchers, and
                citizens alike.
              </h1>
            </div>

            <div className="UAE_doc-preview-full">
              {/* IFRAME PDF (desktop only) */}
              <iframe
                className="UAE_pdf-embed"
                src="/public/uae-climate-report.pdf#toolbar=0&navpanes=0&view=FitH"
                title="UAE Climate Report PDF"
              ></iframe>

              {/* Poster Image PDF (mobile only) */}
              <a
                className="UAE_pdf-download-mobile"
                href="./uae-climate-report.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/public/img vid/9.png"
                  alt="Cover preview of UAE Climate Report PDF"
                />
              </a>
            </div>
          </div>

          {/* Dropdown Sections */}
          <section className="UAE_main-heading" id="Remote_sensing">
            <div
              className="UAE_opinion-heading-container"
              onClick={() => this.toggleDropdown("dropdown1")}
            >
              <h1 className="UAE_opinion-heading">Major Findings</h1>
              <span className="UAE_dropdown-icon">▽</span>
            </div>
            <div className="UAE_fade-line"></div>
            <div className="UAE_opinion-dropdown" id="dropdown1">
              {/* ... All your paragraph content here remains unchanged ... */}
            </div>
          </section>

          {/* Second Dropdown */}
          <section className="UAE_main-heading" id="Remote_sensing_2">
            <div
              className="UAE_opinion-heading-container"
              onClick={() => this.toggleDropdown("dropdown2")}
            >
              <h1 className="UAE_opinion-heading">
                Technological advancements to address climate change in the UAE
              </h1>
              <span className="UAE_dropdown-icon">▽</span>
            </div>

            <div className="UAE_fade-line"></div>

            <div className="UAE_opinion-dropdown" id="dropdown2">
              {/* ... Your paragraph & list content remains unchanged ... */}
            </div>

            {/* Image Section (Centered) */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
                flexWrap: "wrap",
                marginTop: "50px",
              }}
            >
              <img
                src="/public/img vid/35.jpg"
                alt="Satellite map illustrating UAE climate patterns"
                style={{ maxWidth: "100%", width: "33rem" }}
              />
              <img
                src="/public/img vid/36.jpg"
                alt="Graph depicting UAE climate change statistics"
                style={{ maxWidth: "100%", width: "400px" }}
              />
            </div>

            <p className="UAE_main-title">
              <span className="UAE_highlight">
                I played a central role in this project, handling every aspect
                from data collection, analysis, mapping, plotting, and report
                writing to design. The report highlights the global to Gulf
                regional to UAE-specific impacts of climate change, emphasizing
                the heavy precipitation events of February and April 2024 as a
                wake-up call for Gulf countries to address global warming.
              </span>
            </p>

              <h2
                style={{
                  color: "#004b73",
                  marginTop: "22px",
                  marginBottom: "12px",
                }}
              >
                Major focus was on
              </h2>

              <ol className="UAE_ol">
                <li className="UAE_li">
                  <strong>Precipitation Pattern Analysis</strong>
                  <ul className="UAE_ul">
                    <li className="UAE_li">
                      Analyzed ground and satellite data (GPM, CHIRPS, PERSIANN CDR) to
                      study UAE precipitation trends.
                    </li>
                    <li className="UAE_li">
                      Linked 2024 heavy rainfall events to climate change impacts.
                    </li>
                  </ul>
                </li>
                <li className="UAE_li">
                  <strong>Urban Flooding Events</strong>
                  <ul className="UAE_ul">
                    <li className="UAE_li">
                      Mapped flooding in Dubai, Abu Dhabi, Al Ain, Kalba, Fujairah using
                      geospatial tools.
                    </li>
                    <li className="UAE_li">
                      Assessed impacts and suggested improved drainage and urban planning.
                    </li>
                  </ul>
                </li>
                <li className="UAE_li">
                  <strong>Groundwater Estimation</strong>
                  <ul className="UAE_ul">
                    <li className="UAE_li">
                      Used GRACE data to evaluate groundwater decline.
                    </li>
                    <li className="UAE_li">
                      Predicted future trends using machine learning (ML).
                    </li>
                  </ul>
                </li>
                <li className="UAE_li">
                  <strong>Sea-Level Rise Impact</strong>
                  <ul className="UAE_ul">
                    <li className="UAE_li">
                      Analyzed risks to UAE coasts, including flooding, erosion, and
                      saltwater intrusion.
                    </li>
                    <li className="UAE_li">
                      Proposed coastal adaptation strategies.
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

      </main>
      </>
    );
  }
}

export default UAE;