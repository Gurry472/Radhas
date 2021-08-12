import React from 'react'
import { Col, Row } from 'react-bootstrap';
import FlipCard from '../components/FlipCard';

const Deity = () => {
    const list = [
        {
          title: "Services for your Deities",
          description:"Repair, Paint, Rejuvenate, Bathing, Fragrant oil Massaging, and Shringar for your Deities",
          url: "/diety-gallery"
        },
        {
          title: "Customised 'Vaaghas'",
          description:"Customised ‘vaaghas’ for summer, winter, Janmashthami, festivals and Ekadasi",
          url: "/diety-gallery"
        },
        {
          title: "Tulasi pot skirts",
          description:'Customised Tulasi pot skirts',
          url: "/diety-gallery"
        },
        {
            title: "Customised jewellery",
            description:'Customised jewellery made to order with colourful gemstones, crystals and more materials to choose from',
            url: "/diety-gallery"
          },
          {
            title: "Altar Décor",
            description:'Altar décor, setting up altars and changing ‘vaaghas’ of your Deities at home each Ekadasi',
            url: "/diety-gallery"
          },
          {
            title: "Customised Altar for your home",
            description:'We can create design of your customised Altar for your home and take orders to have it made from scratch or you may order ready-made Altars',
            url: "/diety-gallery"
          },
    
      ];
    return (
        <div>
            <h1 style = {{textAlign: "center", textShadow: "0 2px 2px #3a387e", color: "#eb588d"}}>DEITY SPA & JEWELLERY</h1>
            <h4 style = {{textAlign: "center", margin:"50px"}}>Spiritual Spa Services for your Deities! All Deity sizes and of material enjoy our Spiritual Spa.</h4>
            <Row
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  width: "100%",
                  margin: "auto",
                  fontWeight: "800px",
                }}
              >
                {list.map((item) => {
                  return (
                    <Col style={{ margin: "1rem" }}>
                      <FlipCard item={item} />
                    </Col>
                  );
                })}
              </Row>
        </div>
    )
}

export default Deity
