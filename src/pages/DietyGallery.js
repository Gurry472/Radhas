import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CallUs from "../components/CallUs";
import CarouselPage from "../components/CarouselPage";
import GalleryCard from "../components/GalleryCard";

const DietyGallery = () => {
  const list2 = [
    {
      title: false,
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253824/3_yaprkk.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253824/2_wustk4.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253824/1_uvrrfu.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253824/4_xkmnbw.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253824/5_cd39qk.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253824/6_jjdnez.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253823/7_t6lvlu.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253822/8_zfy8ap.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253822/9_idmkdi.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253822/12_morn25.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253822/10_nfkitv.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253822/11_otymq9.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253821/15_qlwbwp.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253821/13_ufeqwb.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253821/14_smz8pu.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253819/19_ghzcxp.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253820/16_ujkmo9.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253819/20_x4tyzu.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253819/18_gxu887.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253819/17_t686qo.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253819/21_u2recw.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253819/22_s5otvc.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253818/23_zutwbm.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253817/24_i2tz38.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253817/26_lcyoif.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253817/27_sgwrgh.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253817/25_ptdff9.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253817/29_pkpt8e.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253817/28_tbzjok.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253808/30_nnntma.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253805/31_bpr6ec.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253805/32_mqypxe.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253805/33_lsatr7.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253805/34_vsbzkp.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253805/36_cehglx.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253805/37_vn50ls.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253805/38_dzdtqp.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253805/40_fnijre.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253802/59_cyoufn.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253804/50_cdqa5p.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253804/42_a4wzfh.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253804/45_slzrgv.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253804/44_dg2poj.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253803/46_hukuhu.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253803/48_hrbrld.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253804/49_sldy5s.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253803/51_nmr8u9.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253801/62_xhwdil.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253802/56_u42xqq.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253802/55_zo4utb.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253802/58_g9x2mn.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253802/54_sewjud.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253802/57_hj7mig.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253800/66_k8ge8w.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253801/63_nqwtmb.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253799/92_oup841.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253799/93_ihnohm.jpg",
    },
    {

      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1627253799/91_xn9pe7.jpg",
    },

  ]

  return (
    <div>
      <Row style={{ display: "flex", justifyContent: "center", margin: "auto" }}>
        <Row style= {{justifyContent:"centre", margin: "auto", padding: "40px"}}>
        <h2 style={{fontWeight:"800" }}>Diety Spa and Jewellery</h2>
        </Row>
        <Row style={{ display: "flex", justifyContent: "center", margin: "auto" }}>
        {list2.map((item) => {
          return <GalleryCard item={item} />;
        })}
        </Row>
      </Row>
      <div style={{display:"flex", alignItems: "center",justifyContent: "center",width:"100%"}}><p><CallUs/></p></div>
    </div>
  );
};

export default DietyGallery;
