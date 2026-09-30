import React from "react";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Forex / CFD Operations",
    "Client Onboarding & KYC",
    "IB Partnerships",
    "MT5 Manager",
    "MetaTrader Administration",
    "Dealing Desk Coordination",
    "Market Analysis",
    "Bookmap",
    "NinjaTrader 8",
    "Client Acquisition"
];

const labelsSecond = [
    "Logistics Operations",
    "First/Last-Mile",
    "Hub Operations",
    "Inventory Management",
    "Shipment Tracking",
    "ERP Systems",
    "MIS Reporting",
    "KPI Management",
    "Team Leadership",
    "Kaizen & 5S",
    "SOP Implementation",
    "MS Excel"
];

const labelsThird = [
    "Digital Marketing",
    "Social Media Marketing",
    "Lead Generation",
    "Brand Management",
    "Premiere Pro",
    "After Effects",
    "Photoshop",
    "Filmora",
    "WordPress",
    "Web Hosting"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <ShowChartIcon sx={{ fontSize: 48 }} />
                    <h3>Forex Brokerage & Market Analysis</h3>
                    <p>Over four years of hands-on experience running CFD forex brokerage operations, from client onboarding and KYC to MT5 administration and dealing desk coordination. I also analyse institutional order flow on Gold (GC) futures using Bookmap and NinjaTrader 8, and work as an Introducing Broker.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Focus areas:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <LocalShippingIcon sx={{ fontSize: 48 }} />
                    <h3>Operations & Logistics</h3>
                    <p>Nine years in logistics and e-commerce operations, including leading first-mile and last-mile hubs at Flipkart's Instakart. I have managed large teams, daily shipment volumes in the thousands, peak-season sales events, and KPI reporting for senior management.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Focus areas:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <MovieCreationIcon sx={{ fontSize: 48 }} />
                    <h3>Digital Marketing & Media</h3>
                    <p>Co-founded Naomi Digital Media, producing video content, branding and social media campaigns for YouTubers, real estate developers, e-commerce brands and trading companies. I combine creative production with lead generation and client acquisition.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Focus areas:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;