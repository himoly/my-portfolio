import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Aug 2025 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Introducing Broker (IB)</h3>
            <h4 className="vertical-timeline-element-subtitle">StarTrader | Remote, UAE & India</h4>
            <p>
              Client acquisition, relationship management, order-flow market analysis, trader onboarding and education
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2025 - May 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Sales & Operations Officer</h3>
            <h4 className="vertical-timeline-element-subtitle">Rabab Markets | Dubai, UAE</h4>
            <p>
              Brokerage operations, client onboarding, MT5 administration, dealing desk coordination, team of 25-30
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2024 - Jan 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Administrative Operation Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">FXTray | Chandigarh, India</h4>
            <p>
              Operations and business development, KYC, MT5 Manager, digital marketing, team of 10-20
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2022 - Dec 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Operation Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">Unifi Forex | Goa, India</h4>
            <p>
              Forex brokerage operations, market analysis, IB coordination, led a 15-member team
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2020 - Jan 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Co-founder</h3>
            <h4 className="vertical-timeline-element-subtitle">Naomi Digital Media | Mumbai, India</h4>
            <p>
              Video production, branding, social media management and websites for YouTubers and commercial brands
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2015 - Sep 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Team Leader, Last Mile Operations</h3>
            <h4 className="vertical-timeline-element-subtitle">Instakart (Flipkart) | Mumbai, India</h4>
            <p>
              Hub operations, 40-50 person delivery workforce, KPI analytics, three internal performance and Kaizen awards
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2013 - Jan 2015"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Founder</h3>
            <h4 className="vertical-timeline-element-subtitle">HM Electronics | Mumbai, India</h4>
            <p>
              Designed, manufactured and sold water overflow control devices, about 10,000 units
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2012 - Jan 2013"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Large Parcel Incharge</h3>
            <h4 className="vertical-timeline-element-subtitle">Madhur Courier Services | Mumbai, India</h4>
            <p>
              Mother hub sorting and dispatch of 3,000-5,000 large parcels daily
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;