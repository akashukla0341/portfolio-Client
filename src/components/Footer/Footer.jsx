import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Akash Shukla. As a skilled Full Stack Developer, I excel in creating high-performance web applications from front-end interfaces to back-end systems. Proficient in JavaScript, Python, React, Node.js, and Django, I transform complex requirements into seamless, user-friendly solutions. I thrive in collaborative environments, continuously learning and leveraging the latest technologies to drive innovation.
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/akashukla0341/" target="black">
          <BsGithub />
        </a>
        <a href="https://github.com/akashukla0341/" target="blank">
          <BsInstagram />
        </a>
        <a href="https://github.com/akashukla0341/" target="blank">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
