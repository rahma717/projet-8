import React, { useState } from "react";
import './Collapse.css';

function Collapse({ title, content }) {
    const [open, setOpen] = useState(false);
  
    const handleToggle = () => {
      setOpen(!open);
    };
  
    return (
      <div className={`collapse ${open && "active"}`}>
        <div className="collapse_title" onClick={handleToggle}>
          <p>{title}</p>
          <img
            src="./images/ArrowBack.png"
            alt="fleche douverture"
            className={`collapse_icon ${open ? "active" : ""}`}
          />
        </div>
        {open && <div className={`collapse_content ${open && "active"}`}>
          <p className={`collapse_content-text ${open && "active"}`}>{content}</p>
        </div>}
      </div>
    );
  }
  
  export default Collapse;