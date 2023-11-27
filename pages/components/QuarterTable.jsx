import React , {useState} from 'react';
import Separator from './separator';

const QuarterTable = () => {


    const [selectedSection, setSelectedSection] = useState('q3');

    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };
 
     // Content for different sections
     const contentMap = {
         'h2': 
         <div className="milestones-container row">
            <h2 className="quarter-title">Second half of 2024</h2>
            <div className='list_wrapper'>
                <ul className="milestone-list">
                    <li>Application v2 release: deep ML/AI integration, Big data analytical reporting tool</li>
                    <li>Break-even point</li>
                    <li>Alternative monetization hypotheses tests</li>
                    <li>New regions scale-up</li>
                    <li>100,000 users</li>
                    <li>Fundraise Series A round</li>
                    <li>Micro IPO MENA region</li>
                </ul>
            </div>
         </div>,
         'h1': 
         <div className="milestones-container row">
            <h2 className="quarter-title">First half of 2024</h2>
            <div className='list_wrapper'>
                <ul className="milestone-list">
                    <li>Full-feature application v1 release: mobile+web applications</li>
                    <li>Monetization launch</li>
                    <li>Token launch</li>
                    <li>Intensive online marketing, referral program, content marketing</li>
                    <li>20,000 users</li>
                    <li>Fundraise Seed Round</li>
                </ul>
            </div>
        </div>,
         'q4':   
         <div className="milestones-container row">
            <h2 className="quarter-title">Fourth quarter of 2023</h2>
            <div className='list_wrapper'>
                <ul className="milestone-list">
                    <li>MVP release (mobile application)</li>
                    <li>Tier1 media publications</li>
                    <li>5,000 users</li>
                    <li>Partnership program with accelerators</li>
                    <li>Pre-seed closure $300,000</li>
                </ul>
            </div>
        </div>,
         'q3': (
             <div className="milestones-container row">
                 <h2 className="quarter-title">Third quarter of 2023</h2>
                 <div className='list_wrapper'>
                     <ul className="milestone-list">
                         <li>Ideation</li>
                         <li>Team building</li>
                         <li>Customer research</li>
                         <li>Prototype launch</li>
                         <li>Setting up Unimotech AI LTD, UK</li>
                         <li>Raised $75,000 in Pre-seed</li>
                         <li>First users - 192</li>
                     </ul>
                 </div>
             </div>
         ),
     };

  return (
    <>
    <div className="row timeline-container_header">
        <h1 className="header_text">Roadmap 2024</h1>
        <img src="./images/nasdaq.png" className="nasdaq_image"alt="" />
    </div>
    <div className="timeline-container">
    <div className="row">
        <div className={`timeline-section h2 ${selectedSection === 'h2' ? 'active' : 'gray'}`} onClick={() => handleSectionClick('h2')} style={{position: 'relative', top: '52px', height: '59px'}}>
            <div className="q_text">
                H2 2024
            </div>
        </div>
        <div className={`timeline-section h1 ${selectedSection === 'h1' ? 'active' : 'gray'}`} onClick={() => handleSectionClick('h1')} style={{position: 'relative', top: '114px', height: '59px'}}>
            <div className="q_text">
                H1 2024
            </div>
        </div>
        <div className={`timeline-section q4 ${selectedSection === 'q4' ? 'active' : 'gray'}`} onClick={() => handleSectionClick('q4')}style={{position: 'relative', top: '175px', height: '59px'}}>
            <div className="q_text">
            Q4 2023
            </div>
        </div>
        <div className={`timeline-section q3 ${selectedSection === 'q3' ? 'active' : 'gray'}`} onClick={() => handleSectionClick('q3')}>
            <div className="q_text">
                Q3 2023
            </div>
        </div>
    </div>
    <div className="separator" style={{top: "234px"}}></div>

    <div className="separator" style={{top: "173px"}}></div>

    <div className="separator" style={{top: "110px"}}></div>

  
    <span className="axis-label result">Result</span>
    <span className="axis-label time">Time</span>
    </div>

        {contentMap[selectedSection]}
    </>
    
  );
};

export default QuarterTable;
