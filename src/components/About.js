import React from "react";
import Links from "./Links"

function About(prop) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {prop.bio && prop.bio.length > 1 ? <p>{prop.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github = {prop.github} linkedin = {prop.linkedin}/>
    </div>
  );
}

export default About;
