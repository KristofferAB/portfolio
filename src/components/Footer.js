import React from "react";
import "../styles/Footer.css";
import logo from "../images/logo.png";

function Footer() {
  return (
    <>
      <footer className="footer-box">
        <div className="logo-box">
          <img src={logo} alt="logo" className="logo"></img>
          <p>
            Copyright &copy; {new Date().getFullYear()} Kristoffer Alves Brekke.
            All rights reserved.
          </p>
        </div>
        <div>
          <h2 className="heading-tertiary">Links</h2>
          <ul className="list">
            <li className="list-element">
              <a href="#home">Home</a>
            </li>
            <li className="list-element">
              <a href="#projects">Projects</a>
            </li>
            <li className="list-element">
              <a href="#education">Education</a>
            </li>
            <li className="list-element">
              <a href="#aboutMe">About me</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="heading-tertiary">Contact Me</h1>
          <ul>
            <li className="list-element">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
              </svg>

              <span>kristoffer.abrekke@gmail.com</span>
            </li>
            <li className="list-element">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M231.87,114l-168-95.89A16,16,0,0,0,40.92,37.34L71.55,128,40.92,218.67A16,16,0,0,0,56,240a16.15,16.15,0,0,0,7.93-2.1l167.92-96.05a16,16,0,0,0,.05-27.89ZM56,224a.56.56,0,0,0,0-.12L85.74,136H144a8,8,0,0,0,0-16H85.74L56.06,32.16A.46.46,0,0,0,56,32l168,95.83Z"></path>
              </svg>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kristoffer.abrekke@gmail.com&su=Jobbtilbud&body=Hei%20Kristoffer..."
                target="_blank"
                rel="noopener noreferrer"
              >
                Send mail
              </a>
            </li>
            <li className="list-element">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
              </svg>
              <span>
                <a
                  href="https://www.linkedin.com/in/kristoffer-brekke-2a0b55239/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </span>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
