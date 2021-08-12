import React from "react";
import "./Footer.css";
import toast, { Toaster } from "react-hot-toast";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  const handleClick = () => {
    toast("Coming Soon..!! ", {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "white",
        backgroundColor: "#E986F2",
      },
    });
  };
  return (
    <footer class="footer">
      <Toaster />
      <div class="footer-left col-md-4 col-sm-6">
        <p class="about" style={{fontSize: "16px"}}>
          <span style={{fontSize:"18px"}}> About us</span>
          <p className= "text">Offer with love and even plain water will taste sweet. Prepare a meal
          from heart and it becomes an offering worthy to serve Kṛṣṇa. We
          believe everything belongs to Kṛṣṇa and Kṛṣṇa belongs to His beloved
          Srimati RadhaRani. We are a Kṛṣṇa conscious family in Stanmore, UK
          with our life and efforts dedicated to living a spiritually balanced
          life.</p>
        </p>

        <div class="icons">
          <a onClick={handleClick} href="https://m.youtube.com/channel/UCH6Ij-Clx8lqjmtGpinryBA">
            <YouTubeIcon style={{ color: "#FF0000" }} />
          </a>
          <a href="https://www.instagram.com/Radhas_Cooking/">
            <InstagramIcon style={{ color: "#fbad50" }} />
          </a>
        </div>
      </div>
      <div class="footer-center col-md-4 col-sm-6">
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="contactnumber"
        >
          <i class="fa fa-phone"></i>
          <div>
            <p> (+44) 079731 79833</p>
           </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="Ataank108@gmail.com">Ataank108@gmail.com</a>
          </p>
        </div>
      </div>
      <div
        class="footer-right col-md-4 col-sm-4"
        style={{ textAlign: "right" }}
      >
        <img className="logo-footer"
          src="https://res.cloudinary.com/dvc56ayit/image/upload/v1619803851/radha%27s/logo_gfos58.png"
          alt="logo"
          style={{ height: "8.5vh" }}
        />
        <div style={{ textAlign: "right", width: "100%", float:"right" }}>
        <p class="menu">
          <a href="/"> Home</a> |<a href="/services"> Services</a> |
          <a href="/contact"> Contact</a>
        </p>
        </div>

        <p class="name" style={{fontSize:"20px"}}> Website Developed by Singh Creators &copy; 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
