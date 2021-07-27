import React from "react";
import Photo from "../images/a.jpeg"

function About() {
  return (
    <div>
      <form>
      <img src={Photo} alt ="logo"/>
      <h1>Tech Q Ware Technologies Private Limited</h1>
        <h1> About Overview</h1>
        <p>* Premier Software Development & Internet Marketing Agency.</p>
        <p>
          * Our Client-Oriented-ness has enabled us to develop several channel
          partners
          <br /> and also results in solid client retention/ repeat client rate.
        </p>
        <p>
          * We are optimally priced for comparable Web design and Internet
          Marketing <br /> services 
          offered by organizations in US and the UK.{" "}
        </p>
        <p>
          * We are a privately held company with our offices at NCR (DELHI),
          India.{" "}
        </p>
        <p>
          * With an excellent blend of solid business domain understanding,
          technical expertise multiplied <br />
          by deep knowledge of latest cost effective IT Innovations.{" "}
        </p>
        <p>
          * We provide a quality driven approach towards software development
          and provides
          <br /> end-to-end customized solutions.
        </p>
        <h4 center="left">visit Company Website</h4>
        <a href= "http://techqware.com" target="blank"> visit here</a>
      </form>
    </div>
  );
}
export default About;
