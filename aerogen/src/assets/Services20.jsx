import './Services20.css';

import React from "react";
import "./Services20.css";

function Services20({ backgroundImage }) {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

        <img src="picture.webp" alt="Top Left Logo" className="top-left-image" />

     <div className="hero-overlay4">
  

  {/*}
  <h1 className="hero-title4">
   
  </h1>
 */}
  <p className="hero-description4">
    <p className="hero-subtitle4"> SERVICES INCLUDED</p>
     <hr className="divider4" />
     &#10003; Plane ready to operate<br />
    &#10003; Crew<br />
    &#10003; Maintenance<br />
    &#10003; Insurance<br />
    &#10003; Operational charges and costs included
    <br/>
    <br/>
    <br/>
    
    In this form of leasing we provide other airlines, also in a very short time and worldwide, with our planes and pilots. Including some of our cabin crew may also be required in isolated cases. When a company contracts a Damp Lease service, it provides the rest of the crew.
These flights are operated under the client’s flight numbering and the rest of the operating costs, such as catering, fuel, airport charges, handling, permits to overfly, etc. are managed by the client.
  </p>
</div>

    </div>
  );
}


export default Services20;