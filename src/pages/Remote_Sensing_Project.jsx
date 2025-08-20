import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";

const TITLE = "R_S_Project | " + Config.SITE_TITLE;
const DESC =
  "This site is dedicated to comprehensive world mapping and the study of geography.";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Remote extends React.Component {
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

        <nav className="Remote_top-links">
          <ul>
            <li><a href="#Remote_sensing">• Remote Sensing</a></li>
            <li><a href="#Arab_Peninsula">• Arab Peninsula Landcover Classification using multi satellite data</a></li>
            <li><a href="#2005_2021">• Hampshire Methane Emission 2005–2021</a></li>
            <li><a href="#Sesan_2_Dam">• Geomorphic Changes Downstream of Lower Sesan 2 Dam</a></li>
            <li><a href="#Kakadu_2013_2021">• Impact of Climatic Factors in Kakadu (2013–2021)</a></li>
            <li><a href="#CCD_PCA">• CCD PCA Flood Detection in Desert Region</a></li>
          </ul>
        </nav>

        <main className="Remote_container">
          <section className="Remote_main-heading" id="Remote_sensing">
            <div
              className="Remote_opinion-heading-container"
              onClick={this.toggleDropdown}
              style={{ cursor: "pointer" }}
            >
              <h1 className="Remote_opinion-heading">Projects Navigation</h1>
              <span className="Remote_dropdown-icon">▽</span>
            </div>

            <div className="Remote_fade-line"></div>

            {dropdownOpen && (
              <div className="Remote_opinion-dropdown" id="dropdown" style={{ display: "block" }}>
                <p>
                  <b>Remote sensing</b> is the process of collecting information
                  about the Earth's surface without direct physical contact,
                  typically through sensors mounted on satellites, aircraft, or
                  drones. It involves capturing electromagnetic radiation
                  reflected or emitted by objects on the surface, which is then
                  analyzed to derive meaningful data about land, water,
                  atmosphere, and vegetation. Remote sensing technology plays a
                  critical role in monitoring environmental changes, natural
                  disasters, and land cover dynamics with high spatial and
                  temporal resolution.
                </p>
                <h3>Applications of Remote Sensing</h3>
                <p><b>• Land Use and Land Cover Mapping:</b> Identifying and monitoring changes in forests, agricultural land, urban areas, and wetlands.</p>
                <p><b>• Disaster Management:</b> Tracking and assessing the impact of natural disasters such as floods, earthquakes, landslides, and wildfires.</p>
                <p><b>• Agricultural Monitoring:</b> Assessing crop health, estimating yields, and detecting drought stress using vegetation indices like NDVI.</p>
                <p><b>• Climate and Weather Monitoring:</b> Observing atmospheric changes, temperature variations, and greenhouse gas emissions.</p>
                <p><b>• Forest Management:</b> Detecting deforestation, forest degradation, and illegal logging activities.</p>
                <p><b>• Coastal Monitoring:</b> Monitoring coastline changes, erosion, and coral reef health.</p>
                <p><b>• Urban Planning:</b> Mapping urban expansion, infrastructure development, and land-use planning.</p>
                <p><b>• Biodiversity and Habitat Conservation:</b> Identifying critical habitats and monitoring changes in ecosystems to aid conservation efforts.</p>
                <p><b>• Geological Studies:</b> Identifying mineral resources, monitoring volcanic activity, and assessing earthquake risks.</p>
              </div>
            )}
          </section>

          <section className="Remote_side-image-title" id="Arab_Peninsula">
            <div className="Remote_main-image-left">
              <img src="./img vid/13.png" alt="Arab Peninsula landcover classification map" />
            </div>
            <div className="Remote_main-title-right">
              <hr />
              <h2>Arab Peninsula Landcover Classification using multi satellite data</h2>
              <hr />
              <p>
                The Arab Peninsula Landcover Classification project involved mapping and classifying land cover types...
              </p>
            </div>
          </section>

          <section className="Remote_sub-images-layout">
            <div className="Remote_left-sub-images">
              <img src="./img vid/14.png" alt="Urban area satellite view 1" />
              <img src="./img vid/15.png" alt="Urban area satellite view 2" />
            </div>
            <div className="Remote_right-sub-image">
              <img src="./img vid/16.png" alt="Urban area satellite view 3" />
            </div>
          </section>

          <section className="Remote_side-image-title" id="2005_2021">
            <div className="Remote_main-image-left">
              <img src="./img vid/17.png" alt="Methane emission map of Hampshire" />
            </div>
            <div className="Remote_main-title-right">
              <hr />
              <h2>Hampshire Methane Emission 2005–2021</h2>
              <hr />
              <p>
                This study analyzed methane emissions across Hampshire, southern England, 
                using data from the National Atmospheric Emissions Inventory (NAEI) and 
                land cover datasets from Digimap for 2007, 2015, and 2021. Methane 
                emissions were mapped using Inverse Distance Weighting (IDW) interpolation 
                in QGIS to visualize spatial emission patterns and trends from 2005 to 2021.
              </p>
              <p>
                <b>Emission Sources: </b>
                The "Processing & Distribution of Petroleum Products" sector was the 
                dominant methane emitter, with notable emissions from the water, sewerage, 
                and waste treatment sectors.
              </p>
              <p>
                <b>Trends: </b>
                Methane emissions showed a peak around 2010 (800 tonnes), followed by a 
                significant reduction of over 300 tonnes by 2021. This decrease reflects 
                improvements in industrial practices, stricter regulations, and 
                technological advancements.
              </p>
            </div>
          </section>

          <section className="Remote_sub-images-layout">
            <div className="Remote_left-sub-images imag">
              <img src="./img vid/18.png" alt="Methane emission sub-map 1" />
            </div>
            <div className="Remote_right-sub-image imag">
              <img src="./img vid/19.png" alt="Methane emission sub-map 2" />
            </div>
          </section>

          <section className="Remote_side-image-title" id="Sesan_2_Dam">
            <div className="Remote_main-image-left">
              <img src="./img vid/20.png" alt="Geomorphic changes map near Lower Sesan 2 Dam" />
            </div>
            <div className="Remote_main-title-right">
              <hr />
              <h2>Geomorphic Changes Downstream of Lower Sesan 2 Dam</h2>
              <hr />
              <p>
                This project investigates the <b>hydro-geomorphological impacts of the Lower Sesan 2 (LS2) Dam</b> 
                in the Mekong River Basin using Landsat 8 imagery and hydrological analyses. 
                The Normalized <b>Difference Water Index</b> (NDWI) was employed to delineate and monitor the 
                reservoir area over time, while <b>erosion and deposition patterns were assessed using discharge, 
                precipitation, and total suspended solids (TSS) data.</b> 
                Sen’s slope analysis highlighted changes in flow dynamics before and after dam construction, with 
                observed increases in discharge. Stable precipitation patterns were recorded across both periods, 
                suggesting limited influence on geomorphic changes. <b>TSS concentrations during the construction 
                phase were linked to increased downstream deposition, emphasizing the dam’s effect on sediment 
                transport dynamics.</b> This analysis provides essential insights into how dam infrastructure affects 
                hydrology and geomorphology, informing sustainable water resource management and environmental 
                mitigation strategies.
              </p>
            </div>
          </section>

          <section className="Remote_sub-images-layout">
            <div className="Remote_right-sub-image imag div">
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vQJ06kBAmTx175h7H35LQ0Dby7P589OiiBgI2R9T1uxzShzw6n9nVNsqxcjTf_xsg/pubembed?start=true&loop=true&delayms=3000"
                frameBorder="0"
                width="640"
                height="389"
                allowFullScreen
                title="Remote Sensing Presentation"
              ></iframe>
            </div>
          </section>

          <section className="Remote_side-image-title" id="Kakadu_2013_2021">
            <div className="Remote_main-image-left">
              <img src="./img vid/21.png" alt="Forest fire and land cover change in Kakadu" />
            </div>
            <div className="Remote_main-title-right">
              <hr />
              <h2>
                Impact of Climatic Factors on Forest Fires and Land Cover in Kakadu (2013–2021)
              </h2>
              <hr />
              <p>
                This project investigates the <b>factors influencing forest fires and land cover</b> changes 
                in Kakadu National Park, Northern Territory, Australia, from 2013 to 2021. Using 
                Landsat-derived indices such as the <b>Normalized Difference Vegetation Index (NDVI) 
                and Normalized Burn Ratio (NBR)</b>, large wildfire events were analyzed for their 
                impact on vegetation. Post-fire NBR values increased due to spectral changes from 
                burning, while NDVI consistently declined, indicating reduced vegetation health and 
                density. Statistical analyses confirmed these patterns, demonstrating the effectiveness 
                of these indices in monitoring fire-induced landscape changes.
              </p>
              <p>
                <b>Climate variables (precipitation, temperature, specific humidity, and soil moisture)</b> 
                were analyzed through box plots to identify seasonal variations. The analysis revealed 
                significant seasonal fluctuations, particularly in precipitation and soil moisture, 
                which were lower during the middle months, increasing fire susceptibility due to 
                drier vegetation conditions. However, Mann-Kendall trend analysis indicated no 
                statistically significant trends in any climate variables over the study period. 
                Land cover changes, including reductions in forest cover, fluctuations in grasslands, 
                and the effects of fires on shrublands and savannas, were also assessed as critical 
                factors for fire management and conservation planning.
              </p>
            </div>
          </section>

          <section className="Remote_sub-images-layout">
            <div className="Remote_right-sub-image imag">
              <iframe 
                src="https://docs.google.com/presentation/d/e/2PACX-1vQt_oC55jfph9hHMgXyFlCHEwH0ZIAp5IMRJDRF0UwvEMbJLyNhP0G3LLYkeh3huA/pubembed?start=true&loop=true&delayms=3000" 
                frameBorder="0" 
                width="480" 
                height="299" 
                allowFullScreen
                title="Kakadu Project Presentation"
              ></iframe>
            </div>
          </section>

          <section className="Remote_side-image-title" id="(2013-2021)">
            <div className="Remote_main-image-left">
              <iframe 
                width="480" 
                height="299" 
                src="https://www.youtube.com/embed/B6yixvg-j_8?si=Nx2rWmq-II-a6Rd_" 
                title="CCD PCA Flood Detection Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="Remote_main-title-right">
              <hr />
              <h2>CCD PCA analysis for Flood Detection in Desert Region</h2>
              <hr />
            </div>
          </section>  
        </main>
      </>
    );
  }
}

export default Remote;
