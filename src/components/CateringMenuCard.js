import React from "react";
import { Button } from "react-bootstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const CateringMenuCard = ({ item }) => {
  let { item1, title, item2, item3, item4, ImgUrl } = item;
  return (
    <Flippy
      flipOnHover={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{
        height: "250px",
        margin: "auto",
        width: "270px",
        borderRadius: "50px",
      }} /// these are optional style, it is not necessary
    >
      <FrontSide
        style={{
          filter: "blur(0.5px)",
          backgroundImage: `URL(${ImgUrl})`,
          backgroundPosition: "center",
          backgroundColor: "rgba(252,70,107,1)",
          backgroundSize: "cover",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          fontSize: "20px",
          color: "black",
          textAlign: "center",
          zIndex: "2",
          borderRadius: "10px",
        }}
      >
        <p
          style={{
            fontSize: "2.5rem",
            lineHeight: "35px",
            color: "#212661",
            textShadow: "2px white",
            fontWeight: "800",
            opacity: "0.7",

          }}
        >
          {title}
        </p>
      </FrontSide>
      <BackSide
        style={{
          alignItems: "center",
          backgroundColor: "#252b70",
          justifyContent: "row",
          fontSize: "16px",
          borderRadius: "8px",
          color: "white",
        }}
      >
        <p style={{  color: "white", fontSize: "16px" }}>
          {item1}
        </p>
        <p style={{  color: "white", fontSize: "16px" }}>
          {item2}
        </p>
        <p style={{ color: "white", fontSize: "16px" }}>
          {item3}
        </p>
        <p style={{  color: "white", fontSize: "16px" }}>
          {item4}
        </p>
      </BackSide>
    </Flippy>
  );
};

export default CateringMenuCard;
