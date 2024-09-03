import React from "react";
import "../styles/Projects.css";
import Project from "./Project";
import Clock from "../images/Clock.png";
import EnTur from "../images/EnTurM.png";
import VScore from "../images/VScore.png";

import Master from "../images/Master.png";

function Projects() {
  return (
    <>
      <section className="Project-section" id="projects">
        <h1 className="heading-primary">Projects</h1>
        {/* <div className="projects"> */}

        <Project
          title="Vizualizing time"
          img={Clock}
          altText="Bilde av nettsiden til prosjektet Klokke"
          tags={["html", "css", "react"]}
          github="https://github.com/Stoff1602/Klokke"
          projectText="This project is a web application that offers a unique approach to visualize time without relying on traditional numbers or pointers. It features a custom interface that represents time through visual elements, enhancing user experience. Additionally, the app integrates an API to provide real-time information on sunrise and sunset times, adding a dynamic element to the visualization. "
        />
        <Project
          title="EnTur API"
          img={EnTur}
          altText="Bilde av forsiden til Entur api prosjektet"
          tags={["html", "css", "react"]}
          projectText="This application leverages the EnTur API to provide real-time departure information for public transportation based on your location. It simplifies your travel experience by allowing you to set and view departures from your frequently used bus stops, ensuring I have easy access to up-to-date transit schedules."
        />
        <Project
          title="Volleyabll Score Tracker"
          img={VScore}
          altText="Bilde av Kristoffer Brekke og Johannes"
          projectText="Developed with a friend, this application automates the traditional pen-and-paper method of tracking volleyball match scores that is used in lower divisions. It simplifies scorekeeping with an intuitive interface, automatically handling scoring, tracking who serves next, and displaying recent points. The app streamlines the process, making it easier and more efficient for players and referees alike."
          tags={["html", "css", "react"]}
          github="https://github.com/johannesnguyen/ProjectVB"
        />
        <Project
          title="Master Thesis"
          img={Master}
          projectText="In my master thesis, I will conduct a detailed analysis of the customer journey for customers of Bookis.no and compare this rich experience data with data from backend systems of Bookis.no."
          altText="Front page of the Master thesis"
          tags={["overleaf"]}
        />

        {/* </div> */}
      </section>
    </>
  );
}

export default Projects;
