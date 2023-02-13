import React from "react";
import "./footer.css";
import { AiFillGithub } from "react-icons/ai";
import { GoLogoGithub } from "react-icons/go";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="about-container">About</div>
            <div className="project-github">
                <a
                    href="https://github.com/mlove42/Medium_Clone"
                    target="_blank"
                >
                    {/* <AiFillGithub /> */}
                    <GoLogoGithub />
                </a>
            </div>
        </div>
    );
};

export default Footer;
