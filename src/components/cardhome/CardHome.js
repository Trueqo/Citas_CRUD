import React from "react";
import { BsCardList } from "react-icons/bs";
import { FaHandPaper, FaSistrix } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./cardhome.css";

const CardHome = ({ text, icon, link }) => {
  const navigate = useNavigate();
  const icons = {
    list: <BsCardList className="display-3" />,
    hand: <FaHandPaper className="display-3" />,
    search: <FaSistrix className="display-3" />,
  };
  return (
    <div
      className="col-12 col-sm-12 col-md-4 p-3"
      onClick={() => {
        navigate(link);
      }}
    >
      <div className="card d-flex flex-column align-items-center gap-3 bg-dark text-white py-5 mycard">
        {icons[icon]}
        <span className="fs-5">{text}</span>
      </div>
    </div>
  );
};

export default CardHome;
