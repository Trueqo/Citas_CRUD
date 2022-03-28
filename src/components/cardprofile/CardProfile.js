import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import imgProfile from "../../assets/img/AvatarMaker (1).svg";
import imgProfilebg from "../../assets/img/bg-chris.jpg";
import imgProfile2 from "../../assets/img/profile2.png";
import imgProfilebg2 from "../../assets/img/sanRafe.jpg"
import "./cardprofile.css";
const CardProfile = ({id}) => {

  const image = [{

    photo: imgProfile,
    Bg: imgProfilebg,
    name: "Christian Lazo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates quia illum ratione nobis velit deleniti, neque explicabo repudiandae expedita.",
    linkedin:"https://www.linkedin.com/in/christian-lazo-649531206/",
    github:"https://github.com/christianlazo2020"
  },
  {
    photo: imgProfile2,
    Bg: imgProfilebg2,
    name: "Julian Ochoa Barco",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates quia illum ratione nobis velit deleniti, neque explicabo repudiandae expedita.",
    linkedin:"https://www.linkedin.com/in/julian-ochoa-barco-165068127/",
    github:"https://github.com/Trueqo"
  }
]


  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card-profile">
        <div className="img1">
          <img src={image[id].Bg} alt="" />
        </div>
        <div className="img2">
          <img src={image[id].photo} alt="" />
        </div>
        <div className="main-text">
          <h2>{image[id].name}</h2>
          <p>
            {image[id].description}
          </p>
        </div>
        <div className="socials">
          <FaFacebookF className="social-item fs-4 me-3" />
          <a href={image[id].linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn className="social-item fs-4 me-3" /> </a>
          <a href={image[id].github} target="_blank" rel="noreferrer"><FaGithub className="social-item fs-4" /> </a>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
