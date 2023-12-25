import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Kalyan Jana. I am a Full-Stack Developer and a
          tutorial on Youtube channel called <b> Code With Kalyan</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/KalyanJana" target="black">
          <BsGithub />
        </a>
        <a href="https://youtube.com/" target="black">
          <BsYoutube />
        </a>
        <a href="https://www.instagram.com/kalyanjana000/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
