import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CallUs from "../components/CallUs";
import CarouselPage from "../components/CarouselPage";
import GalleryCard from "../components/GalleryCard";

const PaintingGallery = () => {

  const list3 = [
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253804/41_sfdr2w.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253801/85_rj2vxg.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253804/43_cmfmc1.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253803/47_n8k540.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253802/52_uoud8u.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253802/81_ekt475.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253802/82_fhkvx5.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253802/83_vaysgq.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253802/84_q9uz5v.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253801/88_wg0bwf.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253801/87_lwefew.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253801/86_f3hr3o.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253800/89_dvbt4k.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253800/90_puaz6v.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253798/102_n2eiqy.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253798/79_bpuzmy.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253798/78_k0h5ra.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253798/103_ffdd2t.jpg",
    },
  ]
  return (
    <div>
      <Row style={{ display: "flex", justifyContent: "center", margin: "auto" }}>
        <Row style= {{justifyContent:"centre", margin: "auto", padding: "40px"}}>
        <h1 id="painting" style={{fontWeight:"800" }}>Painting</h1>
        </Row>
        <Row style={{ display: "flex", justifyContent: "center", margin: "auto" }}>
        {list3.map((item) => {
          return <GalleryCard item={item} />;
        })}
        </Row>
      </Row>
      <div style={{display:"flex", alignItems: "center",justifyContent: "center",width:"100%"}}><p><CallUs/></p></div>
    </div>
  );
};

export default PaintingGallery;
