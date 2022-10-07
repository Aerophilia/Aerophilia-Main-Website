import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="container-fluid footer">
      <div className="footer_div">
        <div className="navigate">
          <h5>&nbsp;&nbsp;NAVIGATE</h5>
          <ul>
            <li>
              <i className="fa-solid fa-angle-right" />
              <a href="#about">&nbsp;&nbsp;About</a>
            </li>
            <li>
              <i className="fa-solid fa-angle-right" />
              <a href="#">&nbsp;&nbsp;Home</a>
            </li>
            <li>
              <i className="fa-solid fa-angle-right" />
              <a href="#events">&nbsp;&nbsp;Events</a>
            </li>
            <li>
              <i className="fa-solid fa-angle-right" />
              <a href="#footer">&nbsp;&nbsp;Contact</a>
            </li>
          </ul>
        </div>
        <div className="links">
          <h5>&nbsp;&nbsp;LINKS</h5>
          <ul>
            <li>
              <i className="fa-solid fa-angle-right" />
              <a href="/pages/privacy policy.txt">&nbsp;&nbsp;Privacy Policy</a>
            </li>
            <li>
              <i className="fa-solid fa-angle-right" />
              <a href="/pages/refund policy.txt">
                &nbsp;&nbsp;Refund &amp; Cancellation Policy
              </a>
            </li>
            <li>
              <i className="fa-solid fa-angle-right" />
              <a href="/pages/t&c.txt">&nbsp;&nbsp;Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
        <div className="reach_us" id="footer">
          <h5>&nbsp;&nbsp;REACH US</h5>
          <a href="https://aerophilia.in/"><img src="./Aerophilia-logo.png" alt="" width="50%" /></a>
          <p>
            Sahyadri College of Engineering and Management Mangaluru,{" "}
            <span> Dakshina Kannada District, Karnataka, India - 575007</span>
          </p>
          <p>
            <i className="fa-solid fa-at" />
            &nbsp;&nbsp;<a href="mailto:info@aerophilia.in">info@aerophilia.in</a>
          </p>
          <p>
            <i className="fa-solid fa-phone" />
            &nbsp;&nbsp;+919480382738
          </p>
          <div className="socials">
            <h6>
              <a href="https://instagram.com/aerophilia_2022?igshid=YmMyMTA2M2Y=">
                <i className="fa-brands fa-instagram" />
              </a>
            </h6>
            <h6>
              <a href="https://youtu.be/sIzURU8AUqg">
                <i className="fa-brands fa-youtube" />
              </a>
            </h6>
            <h6>
              <a href="https://bit.ly/3BBVjnU">
                <i className="fa-solid fa-location-dot" />
              </a>
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
}
