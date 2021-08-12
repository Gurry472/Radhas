import React from "react";
import { Row, Col } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    large: {
      width: "50px",
      height: "50px",
    },
  },
}));

const CourseCardTop = () => {
  const classes = useStyles();
  return (
    <div style={{display: "flex", alignItems: "center",justifyContent:"center" ,padding:"10px",margin:"1rem"}}>
      <div style={{display: "flex", alignItems: "center",justifyContent:"center" ,padding:"10px"}}>
        <img
          src="https://res.cloudinary.com/radhacooking/image/upload/v1624966872/image0_wymajv.jpg"
          style={{ width: "70px", height: "70px", borderRadius: "35px",border:"0.5px solid gray" }}
        />
      </div>
      <div style={{marginTop:"1rem"}}>
        <h4 style={{fontWeight:"880"}}>Mrs. Aradhana (RadhaRupa) Taank</h4>
        </div>
    </div>
  );
};

export default CourseCardTop;
