import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Highlights</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={process.env.PUBLIC_URL + "/projects/orderflow.jpg"} className="zoom" alt="Order flow analysis" width="100%"/>
                <h2>Institutional Order-Flow Analysis</h2>
                <p>Level 2 market-data analysis of COMEX Gold (GC) futures using Bookmap and NinjaTrader 8, used to support market analysis and trader education.</p>
            </div>
            <div className="project">
                <img src={process.env.PUBLIC_URL + "/projects/naomi.jpg"} className="zoom" alt="Naomi Digital Media" width="100%"/>
                <h2>Naomi Digital Media</h2>
                <p>Co-founded a digital media business producing videos, branding and social media content for YouTubers with 50K to 100K subscribers, real estate developers and commercial brands.</p>
            </div>
            <div className="project">
                <img src={process.env.PUBLIC_URL + "/projects/hm-electronics.jpg"} className="zoom" alt="HM Electronics" width="100%"/>
                <h2>HM Electronics: Water Overflow Control</h2>
                <p>Designed, manufactured and sold water overflow control devices for residential societies, about 10,000 units across Mumbai and Agra, using live on-site demonstrations to win customers.</p>
            </div>
            <div className="project">
                <img src={process.env.PUBLIC_URL + "/projects/flipkart.jpg"} className="zoom" alt="Flipkart hub operations" width="100%"/>
                <h2>Flipkart Hub Operations</h2>
                <p>Led first-mile and last-mile hub operations, including clearing 12,000+ shipments during Big Billion Days, and built KPI dashboards covering 40 delivery hubs across Mumbai.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;