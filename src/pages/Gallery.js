import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CallUs from "../components/CallUs";
import CarouselPage from "../components/CarouselPage";
import GalleryCard from "../components/GalleryCard";

const Gallery = () => {
  const list = [
    {
      title: "White Curd Chutney",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201083/Radha%27s%20Kitchen/White_Curd_Chutney_if0vkh.jpg",
    },
    {
      title: "Velvet Coconut Soup",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201082/Radha%27s%20Kitchen/Velvet_Coconut_Soup_m6y9rb.jpg",
    },
    {
      title: "Vegetable Cutlets",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201081/Radha%27s%20Kitchen/Vegetable_Cutlets_bpeaz1.jpg",
    },
    {
      title: "Vedmi Sweet Roti",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201080/Radha%27s%20Kitchen/Vedmi_Sweet_Roti_vveeys.jpg",
    },
    {
      title: "Tandoor Veg Tikka",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201067/Radha%27s%20Kitchen/Tandoor_Veg_Tikka_adnjtk.jpg",
    },
    {
      title: "Tofu",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201066/Radha%27s%20Kitchen/tofu_kzszhc.jpg",
    },
    {
      title: "Stir Fry Crispy Salad",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201066/Radha%27s%20Kitchen/Stir_Fry_Crispy_Salad_k2udvy.jpg",
    },
    {
      title: "Taco Salad",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201066/Radha%27s%20Kitchen/Taco_Salad_x6mtkp.jpg",
    },
    {
      title: "Sunflower Twist",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201065/Radha%27s%20Kitchen/Sunflower_Twist_uefn7u.jpg",
    },
    {
      title: "Stuffed Nachos",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201065/Radha%27s%20Kitchen/stuffed_nachos_zfi9yr.jpg",
    },
    {
      title: "Sizzler",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201064/Radha%27s%20Kitchen/Sizzler_yrpqt5.jpg",
    },
    {
      title: "Spinach Tikki",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201064/Radha%27s%20Kitchen/Spinach_Tikki_blphat.jpg",
    },
    {
      title: "Spinach Shorba",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201064/Radha%27s%20Kitchen/Spinach_Shorba_xhx9of.jpg",
    },
    {
      title: "Shrikhand",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201064/Radha%27s%20Kitchen/Shrikhand_kkfcay.jpg",
    },
    {
      title: "TSpicy Kinva",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201063/Radha%27s%20Kitchen/Spicy_Kinva_k7q2qe.jpg",
    },
    {
      title: "Sabudana Paneer Kababs",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201063/Radha%27s%20Kitchen/Sabudana_Paneer_Kababs_tjk1el.jpg",
    },
    {
      title: "Shahi Paneer Tukda",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201063/Radha%27s%20Kitchen/Shahi_Paneer_Tukda_1_zf5dis.jpg",
    },
    {
      title: "Samosa",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201062/Radha%27s%20Kitchen/Samosa_ao6m8l.jpg",
    },
    {
      title: "Sabudana Kheer",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201062/Radha%27s%20Kitchen/Sabudana_Kheer_xbgpvk.jpg",
    },
    {
      title: "Roasted Potatoes",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201061/Radha%27s%20Kitchen/Roasted_potatoes_bbzlzw.jpg",
    },
    {
      title: "Potato Cauliflower Masala",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201063/Radha%27s%20Kitchen/Spicy_Kinva_k7q2qe.jpg",
    },
    {
      title: "Potato Chakri",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201061/Radha%27s%20Kitchen/Potato_Chakri_q3dgcw.jpg",
    },
    {
      title: "Potato Salad",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201061/Radha%27s%20Kitchen/Potato_Salad_fcuhvr.jpg",
    },
    {
      title: "Dish",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201061/Radha%27s%20Kitchen/photo_16_dj2rw2.jpg",
    },
    {
      title: "Dish",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201059/Radha%27s%20Kitchen/photo_17_mjsda9.jpg",
    },
    {
      title: "Dish",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201059/Radha%27s%20Kitchen/photo_15_a8aevm.jpg",
    },
    {
      title: "Dish",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201058/Radha%27s%20Kitchen/photo_13_lt6okd.jpg",
    },
    {
      title: "Dish",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201057/Radha%27s%20Kitchen/photo_14_avwgcc.jpg",
    },
    {
      title: "Dish",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201057/Radha%27s%20Kitchen/photo_10_obe8ej.jpg",
    },
    {
      title: "Dish",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201056/Radha%27s%20Kitchen/photo_9_bymxvs.jpg",
    },
    {
      title: "Dish",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201055/Radha%27s%20Kitchen/photo_8_soe1os.jpg",
    },
    {
      title: "Orange Rabadi",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201055/Radha%27s%20Kitchen/Orange_Rabadi_a1qwaz.jpg",
    },
    {
      title: "Morio",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201054/Radha%27s%20Kitchen/Morio_jwx1zs.jpg",
    },
    {
      title: "Mango Cream Smoothie",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201054/Radha%27s%20Kitchen/Mango_Cream_Smoothie_dkov7q.jpg",
    },
    {
      title: "Methi Theplaa",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201054/Radha%27s%20Kitchen/Methi_Theplaa_epnchz.jpg",
    },
    {
      title: "Gulaab Jamun",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201054/Radha%27s%20Kitchen/Gulaab_Jamun_t5fx4u.jpg",
    },
    {
      title: "Gulab",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201054/Radha%27s%20Kitchen/gulab_o1ckp3.jpg",
    },
    {
      title: "Guava Smoothie",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201054/Radha%27s%20Kitchen/Guava_Smoothie_xjihd6.jpg",
    },
    {
      title: "Ghughraa",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201053/Radha%27s%20Kitchen/Ghughraa_grwi0p.jpg",
    },
    {
      title: "Gaajar Paneer Rolls",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201046/Radha%27s%20Kitchen/Gaajar_Paneer_Rolls_lcjk1f.jpg",
    },
    {
      title: "Dish",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201040/Radha%27s%20Kitchen/d4_rv5tyk.jpg",
    },
    {
      title: "Dish",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201040/Radha%27s%20Kitchen/d3_mmvlty.jpg",
    },
    {
      title: "Dish",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201040/Radha%27s%20Kitchen/d2_rpb5xh.jpg",
    },
    {
      title: "Coleslaw",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201040/Radha%27s%20Kitchen/Coleslaw_p8yots.jpg",
    },
    {
      title: "Crispy Nashta Puri",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201040/Radha%27s%20Kitchen/Crispy_Nashta_Puri_qbjjvp.jpg",
    },
    {
      title: "Coconut Dry Nuts",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201040/Radha%27s%20Kitchen/Coconut_Dry_Nuts_wqirty.jpg",
    },
    {
      title: "Dhokla",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201040/Radha%27s%20Kitchen/d1_jgfmhp.jpg",
    },
    {
      title: "Crystal Spicy Paneer Pulao",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201040/Radha%27s%20Kitchen/Crystal_Spicy_Paneer_Pulao_ef6yjl.jpg",
    },
    {
      title: "Coconut Cream Raita",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201039/Radha%27s%20Kitchen/Coconut_Cream_Raita_wbviic.jpg",
    },
    {
      title: "Chili Paneer",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201038/Radha%27s%20Kitchen/Chili_Paneer_rwzqnk.jpg",
    },
    {
      title: "Dish",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201038/Radha%27s%20Kitchen/c6_s0d9sb.jpg",
    },
    {
      title: "Dish",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201038/Radha%27s%20Kitchen/c5_lwledv.jpg",
    },
    {
      title: "Dish",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201038/Radha%27s%20Kitchen/c2_agzgbz.jpg",
    },
    {
      title: "Buckwheat Paneer Salad",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201038/Radha%27s%20Kitchen/Buckwheat_Paneer_Salad_doarhr.jpg",
    },
    {
      title: "Dish",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201038/Radha%27s%20Kitchen/c1_zcnzm6.jpg",
    },
    {
      title: "Dish",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201037/Radha%27s%20Kitchen/c4_uwmg8e.jpg",
    },
    {
      title: "Bread",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201037/Radha%27s%20Kitchen/bread_l1dufj.jpg",
    },
    {
      title: "Bread",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201037/Radha%27s%20Kitchen/bread_3_juqxvw.jpg",
    },
    {
      title: "Bread",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201037/Radha%27s%20Kitchen/bread_2_atsz7z.jpg",
    },
    {
      title: "Bhindi Masala",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201036/Radha%27s%20Kitchen/Bhindi_Masala_c2plze.jpg",
    },
    {
      title: "Buckwheat Khichdi",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201036/Radha%27s%20Kitchen/Buckwheat_Khichdi_rhsu8u.jpg",
    },
    {
      title: "Dish",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201036/Radha%27s%20Kitchen/c3_c6avhn.jpg",
    },
    {
      title: "Bhaakhri",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201036/Radha%27s%20Kitchen/Bhaakhri_ien9hb.jpg",
    },
    {
      title: "Apple Mango Tarts",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201036/Radha%27s%20Kitchen/Apple_Mango_Tarts_c7bz3u.jpg",
    },
    {
      title: "Boats",
      imgUrl:
        "https://res.cloudinary.com/radhacooking/image/upload/v1624201036/Radha%27s%20Kitchen/boats_fzmwzk.jpg",
    },
      
    
  ];
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
      <Row
        style={{ display: "flex", justifyContent: "center", margin: "auto" }}
      >
        {list.map((item) => {
          return <GalleryCard item={item} />;
        })}
      </Row>
      <div style={{display:"flex", alignItems: "center",justifyContent: "center",width:"100%"}}><p><CallUs/></p></div>
    </div>
  );
};

export default Gallery;
