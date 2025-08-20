import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";

const TITLE = "Disaster_D | " + Config.SITE_TITLE;
const DESC =
  "This site is dedicated to comprehensive world mapping and the study of geography.";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Disaster extends React.Component {
  toggleDropdown = () => {
    const dropdown = document.getElementById("dropdown");
    if (dropdown) {
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
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
      
        <nav className="Disaster_top-links">
          <ul>
            <li>
              <a href="#Remotesensing">Disaster Detection Through Remote Sensing</a>
            </li>
            <li>
              <a href="#Volcanic_Eruption">Volcanic Eruption and Disaster mapping in Tonga</a>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="Disaster_container">
          <section className="Disaster_main-heading" id="Remotesensing">
            <div className="Disaster_opinion-heading-container" onClick={this.toggleDropdown}>
              <h1 className="Disaster_opinion-heading">Disaster Detection Through Remote Sensing</h1>
              <span className="Disaster_dropdown-icon">▽</span>
            </div>
            <div className="Disaster_fade-line"></div>
            <div className="Disaster_opinion-dropdown" id="dropdown" style={{ display: "none" }}>
              <p>
                <b>Remote sensing </b>plays a crucial role in disaster detection, monitoring, and response by
                providing timely, accurate, and large-scale information on natural and human-induced hazards.
                Using satellite-based sensors and aerial imagery, remote sensing enables the identification of
                disaster-prone areas, the monitoring of evolving events, and post-event damage assessment.
                Optical sensors capture high-resolution images of surface changes, while radar-based sensors
                like Synthetic Aperture Radar (SAR) are invaluable for all-weather, day-and-night observations.
                Techniques such as Damage Proxy Mapping (DPM), InSAR, and change detection help quantify damage
                and assess areas at risk for better decision-making during emergencies.
              </p>
              <h3>Applications of Disaster Detection Through Remote Sensing</h3>
              <p>
                <b>• Flood Monitoring:</b> Identifying inundated areas and tracking flood progression using
                optical imagery and radar (e.g., Sentinel-1 SAR).
              </p>
              <p>
                <b>• Earthquake and Land Deformation:</b> Detecting ground displacement and infrastructure
                damage using InSAR techniques and damage proxy maps.
              </p>
              <p>
                <b>• Landslide Detection:</b> Monitoring slope stability and detecting landslide-prone areas
                using SAR and optical data.
              </p>
              <p>
                <b>• Wildfire Detection:</b> Identifying active fires, burn scars, and post-fire vegetation
                recovery using thermal imagery and vegetation indices (e.g., NDVI, NBR).
              </p>
              <p>
                <b>• Tsunami Impact Assessment:</b> Mapping coastal inundation and destruction following
                tsunamis using satellite imagery.
              </p>
              <p>
                <b>• Volcanic Eruption Monitoring:</b> Detecting volcanic ash plumes, lava flows, and surface
                deformations with optical and SAR data.
              </p>
              <p>
                <b>• Hurricane and Cyclone Damage Assessment: </b>Identifying wind damage to vegetation and
                infrastructure using post-storm imagery and radar backscatter changes.
              </p>
              <p>
                <b>• Drought Monitoring:</b> Using vegetation indices and soil moisture data to assess drought
                severity and vegetation stress.
              </p>
            </div>
          </section>

          <section className="Disaster_side-image-title" id="Volcanic_Eruption">
            <div className="Disaster_main-image-left">
              <img
                src="./img-vid/GeoColor_GEOS-West-Zoom-2022 JAN 15 04_00Z-to-2022 JAN 15 10_00Z.gif"alt="Overview Image" />
            </div>
            <div className="Disaster_main-title-right">
              <hr />
              <h2>Volcanic Eruption and Disaster mapping in Tonga</h2>
              <hr />
              <p>
                A volcano rising about 2,000 m from the seafloor has experienced several historical eruptions,
                notably in 1912, 1937, 1988, 2009, 2014–15, and 2021–22. Its most recent eruption, from 20
                December 2021 to 15 January 2022, sent an ash cloud 20 km into the stratosphere, creating a
                plume visible from Nukuʻalofa. The eruption's energy release was estimated at 61 megatons of TNT,
                exceeding the power of the largest nuclear bomb ever detonated.
              </p>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Disaster;
