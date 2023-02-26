import React from "react";
import { about } from "../ProjectData.js";
import { Heading } from "./TestHeading";

function About() {
  return (
    // <>
    <section className="about">
      <div className="container flex">
        {about.map((val, index) => (
          <React.Fragment key={index}>
            <div className="left" data-aos="fade-down-right">
              <img src={val.cover} alt="" />
            </div>
            <div className="right" data-aos="fade-down-left">
              <Heading title="About Me" />
              <p>{val.desc}</p>
              <p>{val.desc1}</p>
              <button>Download CV</button>
              <button className="primaryBtn">Download CV</button>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
    // </>
  );
}

export default About;
