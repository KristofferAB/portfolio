import React from "react";
import "../styles/AboutMe.css";
import image1 from "../images/meg3.jpg";
import image2 from "../images/Meg2.png";
import image3 from "../images/meg4.jpg";
import image4 from "../images/meg5.jpg";

function AboutMe() {
  return (
    <>
      <div className="about-box" id="aboutMe">
        <h1 className="heading-primary">About Me</h1>
        <div className="images-box">
          <div className="images">
            <img src={image1} alt="bilde av meg "></img>
            <img src={image2} alt="bilde av meg "></img>
            <img src={image3} alt="bilde av meg "></img>
            <img src={image4} alt="bilde av meg "></img>
            {/* <img src={image5} alt="bilde av meg "></img> */}
          </div>

          <div>
            <ul className="information-list">
              <li className="information-1 list-unit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.62,87.62,0,0,1-6.4,32.94l-44.7-27.49a15.92,15.92,0,0,0-6.24-2.23l-22.82-3.08a16.11,16.11,0,0,0-16,7.86h-8.72l-3.8-7.86a15.91,15.91,0,0,0-11-8.67l-8-1.73L96.14,104h16.71a16.06,16.06,0,0,0,7.73-2l12.25-6.76a16.62,16.62,0,0,0,3-2.14l26.91-24.34A15.93,15.93,0,0,0,166,49.1l-.36-.65A88.11,88.11,0,0,1,216,128ZM143.31,41.34,152,56.9,125.09,81.24,112.85,88H96.14a16,16,0,0,0-13.88,8l-8.73,15.23L63.38,84.19,74.32,58.32a87.87,87.87,0,0,1,69-17ZM40,128a87.53,87.53,0,0,1,8.54-37.8l11.34,30.27a16,16,0,0,0,11.62,10l21.43,4.61L96.74,143a16.09,16.09,0,0,0,14.4,9h1.48l-7.23,16.23a16,16,0,0,0,2.86,17.37l.14.14L128,205.94l-1.94,10A88.11,88.11,0,0,1,40,128Zm102.58,86.78,1.13-5.81a16.09,16.09,0,0,0-4-13.9,1.85,1.85,0,0,1-.14-.14L120,174.74,133.7,144l22.82,3.08,45.72,28.12A88.18,88.18,0,0,1,142.58,214.78Z"></path>
                </svg>
                <span> Norway | Brasil</span>
              </li>
              <li className="information-2 list-unit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M232,112a24,24,0,0,0-24-24H136V79a32.06,32.06,0,0,0,24-31c0-28-26.44-45.91-27.56-46.66a8,8,0,0,0-8.88,0C122.44,2.09,96,20,96,48a32.06,32.06,0,0,0,24,31v9H48a24,24,0,0,0-24,24v23.33a40.84,40.84,0,0,0,8,24.24V200a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V159.57a40.84,40.84,0,0,0,8-24.24ZM112,48c0-13.57,10-24.46,16-29.79,6,5.33,16,16.22,16,29.79a16,16,0,0,1-32,0ZM40,112a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v23.33c0,13.25-10.46,24.31-23.32,24.66A24,24,0,0,1,168,136a8,8,0,0,0-16,0,24,24,0,0,1-48,0,8,8,0,0,0-16,0,24,24,0,0,1-24.68,24C50.46,159.64,40,148.58,40,135.33Zm160,96H56a8,8,0,0,1-8-8V172.56A38.77,38.77,0,0,0,62.88,176a39.69,39.69,0,0,0,29-11.31A40.36,40.36,0,0,0,96,160a40,40,0,0,0,64,0,40.36,40.36,0,0,0,4.13,4.67A39.67,39.67,0,0,0,192,176c.38,0,.76,0,1.14,0A38.77,38.77,0,0,0,208,172.56V200A8,8,0,0,1,200,208Z"></path>
                </svg>
                <span>16.02.1999</span>
              </li>
              <li className="list-unit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M200,224H150.54A266.56,266.56,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25a88,88,0,0,0-176,0c0,31.4,14.51,64.68,42,96.25A266.56,266.56,0,0,0,105.46,224H56a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16ZM56,104a72,72,0,0,1,144,0c0,57.23-55.47,105-72,118C111.47,209,56,161.23,56,104Zm112,0a40,40,0,1,0-40,40A40,40,0,0,0,168,104Zm-64,0a24,24,0,1,1,24,24A24,24,0,0,1,104,104Z"></path>
                </svg>
                <span> Oslo, Norway</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-boxes">
          <div>
            <h2 className="heading-tertiary">Who am I?</h2>
            <p className="about-text">
              I’m Kristoffer, a 25-year-old enthusiast with a passion for house
              music, playing bass guitar, and staying active through volleyball
              and social engagements. I’m known for my creativity, humor, and
              genuine care for others. I thrive on finding innovative solutions
              to problems and always strive to see the bigger picture. My
              diverse interests and proactive approach help me bring a unique
              perspective to everything I do.
            </p>
          </div>
          <div>
            <h2 className="heading-tertiary">Ambitions</h2>
            <p className="about-text">
              I am dedicated to excell as a programmer and frontend-developer,
              where I feel my skills and creativity shine. However, I am also
              eager to broaden my expertise by delving into backend technologies
              and becoming a well-rounded full-stack developer. I am committed
              to continuous learning and professional growth, and I believe that
              a positive and supportive work environment is essential for both
              personal and career development. My goal is to enhance my
              capabilities, embrace new challenges, and make a meaningful impact
              in my carrer!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
