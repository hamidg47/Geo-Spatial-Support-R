import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";

const TITLE = "About Me | " + Config.SITE_TITLE;
const DESC =
  "This site is dedicated to comprehensive world mapping and the study of geography.";
const CANONICAL = Config.SITE_DOMAIN + "/";


class About extends React.Component {
  render() {
    return (
      <>
           
        <Helmet>
          <title>{TITLE}</title>
          <link rel="canonical" href={CANONICAL} />
          <meta name="description" content={DESC} />
          <meta name="theme-color" content={Config.THEME_COLOR} />
        </Helmet>

         <section className="about">
            <h2 className="about_section-title">About Me</h2>
            <div className="about_fade-line"></div>

            <p class="about_p">Transforming data into actionable insights, I am a Geospatial Engineer and Remote Sensing Specialist with 6+ years of experience leveraging cutting-edge GIS technologies, machine learning, and satellite imagery to solve complex real-world challenges</p>

            <h4 className="about_heading">Expertise at</h4>
            <b><p className="about_subheading">GIS & Remote Sensing Tools</p></b>

            <div className="about_points">
              <p class="about_p">• QGIS,</p>
              <p class="about_p">• ArcGIS Pro</p>
              <p class="about_p">• SNAP ESA</p>
              <p class="about_p">• Google Earth Engine</p>
              <p class="about_p">• Pix4D</p>
              <p class="about_p">• Agisoft Metashape</p>
              <p class="about_p">• Jupyter Notebook</p>
              <p class="about_p">• R Studio</p>
              <p class="about_p">• Origin Pro</p>
              <b><p class="about_p">Programming</p></b>
              <p class="about_p">• Python, PHP, HTML, SQL, JavaScript</p>
              <b><p class="about_p">Hydrological Modeling</p></b>
              <p class="about_p">• Tree-Based Models (Decision Tree, Random Forest, Gradient Boosting)</p>
              <p class="about_p">• Sequential Models (RNN, GRU, LSTM)</p>
              <p class="about_p">• Spatial Models (CNN)</p>
              <p class="about_p">• Supervise/Unsupervised Algorithms</p>
              <b><p class="about_p">Thesis</p></b>
              <p class="about_p">Use of PS InSAR, Borehole and Grace Groundwater anomaly datasets to study impact on Lahore land deformation</p>

            </div>
            <h4 className="about_heading">Work experience</h4>
            <b><p className="about_subheading">Geospatial Engineer – Geospatial Support (2020–Present)</p></b>

            <div className="about_points">
              <p class="about_p">• Conducted disaster mapping for Sentinel Asia using SAR and optical imagery.</p>
              <p class="about_p">• Analyzed groundwater anomalies using GRACE/GRACE-FO data and detected land deformation via InSAR and altimetry.</p>
              <p class="about_p">• Performed flood simulations (1D/2D) using HecRAS for high precipitation, dam breakage, and river overflow scenarios.</p>
              <p class="about_p">• Developed palm detection models using Deep Learning techniques.</p>
              <p class="about_p">• Processed KhalifaSat imagery for orthorectification and orthomosaicing.</p>
              <p class="about_p">• Created a 10-meter land cover classification for the Arabian Peninsula using Sentinel-1 & 2 on Google Earth Engine.</p>
              <p class="about_p">• Groundwater forecasting using RNN and LSTM machine learning models with remote sensing and in-situ data.</p>
              <p class="about_p">• SWOT accuracy assessment using SWOT River Discharge algorithms and River Guage Discharge Data</p>
              <p class="about_p">•  CMIP6 historical and SSPs datasets used for River Discharge prediction and Projection by Machine Learning</p>
              <b><p class="about_p">GIS Consultant – Rahman Habib Consultant (2021)</p></b>
              <p class="about_p">• Designed lift irrigation maps, including base maps, LULC maps, and topography maps for the Mohar Lift Irrigation Project.</p>
              <b><p class="about_p">GIS Specialist – Urban Unit (2019)</p></b>
              <p class="about_p">• Mapped industrial land use for Faisalabad, Rawalpindi, and Gujranwala.</p>
              <p class="about_p">• Conducted georeferencing and parcel data updates for urban and rural areas.</p>
              <p class="about_p">• Supported SDPI Project by developing GIS-based blocks, updating enumeration areas, and mapping layouts for surveys.</p>
            </div>

            <h4 className="about_heading">Education</h4>
            <b><p className="about_subheading">Geospatial Engineer – Geospatial Support (2020–Present)</p></b>
            <div className="about_points">
              <p class="about_p">• MS in GIS & Remote Sensing (2022)</p>
              <p class="about_p">• BS (Hons) in Geography (2019)</p>
              <p class="about_p">• FSC (Pre-Engineering) (2015)</p>
              <p class="about_p">• Matric (Science) (2013)</p>
            </div>

            <h4 className="about-heading">Education</h4>
          <b><p className="about_subheading">Geospatial Engineer – Geospatial Support (2020–Present)</p></b>

          <div className="about_points">
            <p class="about_p">• MS in GIS & Remote Sensing (2022)</p>
            <p class="about_p">• BS (Hons) in Geography (2019)</p>
            <p class="about_p">• FSC (Pre-Engineering) (2015)</p>
            <p class="about_p">• Matric (Science) (2013)</p>
          </div>

          <div className="about_education-images">
            <img src="/public/img vid/10.png" alt="Degree 1" />
            <img src="/public/img vid/11.png" alt="Degree 2" />
          </div>
          <h1 className="about_heading">You can follow my lectures on YouTube</h1>

          <div className="about_video-gallery">
            <div className="about_video-item">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/e-ViOIcBTgI?si=nqAfZWItiV7poWEn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <p className="about_video-title">Flood Detection using Sentinel 1</p>
            </div>

            <div className="about_video-item">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/B6yixvg-j_8?si=Nx2rWmq-II-a6Rd_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <p className="about_video-title">CCD PCA analysis for flood detection in desert region</p>
            </div>

            <div className="about_video-item">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Cn8ZGPZWSAM?si=lGptgmHZwyeCfayL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <p className="about_video-title">Hydrological analysis</p>
            </div>
          </div>
         </section>
</>
    );
  }
}

export default About;