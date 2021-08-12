import React from 'react'
import {Row, Col} from "react-bootstrap"
import CateringMenuCard from "../components/CateringMenuCard"

const CateringMenu = () => {
    const list = [{
        item1:"10 Layer Burrito",
        item2:"Enchiladas con Veggies",
        item3:"Quesadilla Supreme",
        item4:"Pico de Gallo",
        title: "Menu 1"}, 
        {
            item1:"Malai Kofta",
            item2:"Shahi Rajma",
            item3:"Methi Pulao",
            item4:"Butter Masala Naan",
            title: "Menu 2"},
        {
            item1:"Sambhar",
            item2:"Rava Idli",
            item3:"Dahi Vada",
            item4:"Tomato Chutney",
            title: "Menu 3"},                            
        {
            item1:"Pesto Sunflower Twist",
            item2:"Pineapple Asparagus Cheese Pocket",
            item3:"Canaloni",
            item4:"Pesto Cheese Pin Wheels",
            title: "Menu 4"}, 
        {
            item1:"Paneer Tikka Burger",
            item2:"Scrambled Tofu",
            item3:"Pav Bhaji",
            item4:"Dry Fruit Halwa",
            title: "Menu 5"}, 
        {
            item1:"Paneer Bhurji",
            item2:"Bhari Bhindi",
            item3:"Biryani",
            item4:"Green Chili Naan",
            title: "Menu 6"}, 
        {
            item1:"Papdi Chaat",
            item2:"Dahi Puri",
            item3:"Bhel Puri",
            item4:"Tamarind & Green Chutneys",
            title: "Menu 7"},
        {
            item1:"Well-dressed Pizza",
            item2:"Baked Baby Potatoes",
            item3:"Masala Fries",
            item4:"Sweet and Spicy Sauce",
            title: "Menu 8"}, 
        {
            item1:"Orro / Baingan Bhartha",
            item2:"Sev Tomato Saak",
            item3:"Bhakhri",
            item4:"Juvar Rotla",
            title: "Menu 9"}, 
        {
            item1:"Paneer Tikka Masala",
            item2:"Baingan Bhartha",
            item3:"Herbs Naan",
            item4:"Pulao",
            title: "Menu 10"}, 
        {   
            item1:"Sunflower Twist",
            item2:"Masala Fries",
            item3:"Quinoa Biryani",
            item4:"Mango Shrikhand",
            title: "Menu 11"}, 
        
            {    
                item1:"Mini Taco Bowls",
                item2:"Foccacia Bread",
                item3:"Sabudana Biryani",
                item4:"Coconut Cream Raita",
                title: "Menu 12"}, 
            {    
                item1:"Pizza",
                item2:"Masala Fries",
                item3:"Crispy Veggie Salad",
                item4:"Mango Kheer",
                title: "Menu 13"},
            {    
                item1:"Chili Paneer",
                item2:"Quinoa Biryani",
                item3:"Butter Naan",
                item4:"Mint Sauce",
                title: "Menu 14"}, 
            {    
                item1:"Papdi Chaat",
                item2:"Foccacia Open Sandwich",
                item3:"Bhajia (Fritters)",
                item4:"Nutty Stuffed Cucumber",
                title: "Menu 15"}, 
            {    
                item1:"Veggie Bake",
                item2:"Zucchini Balls",
                item3:"Gaajar Halwa",
                item4:"Spicy Tamarind Chutney",
                title: "Menu 16"}, 
            {    
                item1:"Manchurian",
                item2:"Crispy Nashta Puri",
                item3:"Stuffed Capsicum",
                item4:"Sour Cream Curd",
                title: "Menu 17"}, 
            {    
                item1:"Paneer Salsa Wrap",
                item2:"Veggie Calzone",
                item3:"Baby Potato Salad",
                item4:"Mango Mousse",
                title: "Menu 18"}, 
            {    
                item1:"Malai Kofta",
                item2:"Masala Morio",
                item3:"Bhature",
                item4:"Kadhi",
                title: "Menu 19"}, 
            {    
                item1:"Tikhaari",
                item2:"Stuffed Potato Paneer Curry",
                item3:"Bhakhri",
                item4:"Sabudana Biryani",
                title: "Menu 20"},
            
            ]

    return (
            <Row
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  width: "100%",
                  margin: "auto",
                }}
              >
                {list.map((item) => {
                  return (
                    <Col style={{ margin: "1rem" }}>
                      <CateringMenuCard item={item} />
                    </Col>
                  );
                })}
            </Row>
        
    )
}

export default CateringMenu
