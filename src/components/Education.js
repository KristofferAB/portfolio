import React from "react";
import UIO from "../images/Ole-Johan_Dahls_hus_(UIO).jfif";
import Oslomet from "../images/Pilestredet-32(OsloMet).jpg";
import NIH from "../images/Norges_idrettshøgskole(NIH).jpg";

function Education() {
  return (
    <>
      <section className="container" id="education">
        <h1 className="heading-secondary">Education</h1>
        <div className="card-container">
          <div className="card-div">
            <img src={UIO} className="E-img" alt="Bilde av UIO"></img>
            <h2 className="heading-tertiary UIO">Universitet i Oslo</h2>

            <h3 className="card-subheading">Master</h3>
            <ul className="E-list">
              <li className="list-line">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                </svg>
                <span>Informatikk</span>
              </li>
              <li className="list-line">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path>
                </svg>
                <span>2023-2025</span>
              </li>
            </ul>
          </div>
          <div className="card-div">
            <img src={Oslomet} className="E-img" alt="Bilde av Oslomet"></img>
            <h2 className="heading-tertiary Oslomet">Oslomet</h2>
            <h3 className="card-subheading">Bachelor</h3>
            <ul className="E-list">
              <li className="list-line">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                </svg>
                <span>Informasjonsteknologi</span>
              </li>
              <li className="list-line">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-38.34-85.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L116,164.69l42.34-42.35A8,8,0,0,1,169.66,122.34Z"></path>
                </svg>
                <span>2020-2023</span>
              </li>
            </ul>
          </div>
          <div className="card-div">
            <img
              src={NIH}
              className="E-img"
              alt="Bilde av Norges Idrettshøgskole"
            ></img>
            <h2 className="heading-tertiary NIH">Norges Idrettshøgskole</h2>
            <h3 className="card-subheading">Årstudie</h3>
            <ul className="E-list">
              <li className="list-line">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                </svg>
                <span>Idrett og Samfunn</span>
              </li>
              <li className="list-line">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-38.34-85.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L116,164.69l42.34-42.35A8,8,0,0,1,169.66,122.34Z"></path>
                </svg>
                <span>2019-2020</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
