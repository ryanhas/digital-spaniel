import { workmenu } from "../site/site";
import { useState } from "react";
import Link from "./Link"

const Work = () => {
  const [showInfo, setShowInfo] = useState(false)

  const handleMouseEnter = (e) => {
    if(e.target.innerHTML === "Brand Strategy") {
      setShowInfo(true)
    }
  }

  return (
    <section id="work">
        <div className="work-left">
          {showInfo && 
            <div className="work-left-content">
            <h2 className="header-land-title">What are <br/> <span className="header-title-grey">we capable of</span></h2>
            <p>
            By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.
            </p>
            <Link>Our process</Link>
            </div>
          }
        </div>
    <div className="work-right">
      {workmenu.map((menu, index) => {
        return (
          <div key={index} className="menu-list">
            <h2 key={index} className="work-menu-item">{menu.title}</h2>

            {menu.submenu.map((submenu, index) => {
              return (
                <div key={submenu}
                     className="work-menu-subitem"
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={() => setShowInfo(false)}>
                  <h2>{submenu}</h2>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
    </section>
  );
  };
  
  export default Work;
  