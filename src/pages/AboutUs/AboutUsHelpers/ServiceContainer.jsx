import {
    DeliveryIcon,
    CustomerSupport,
    Guarantee
} from "@images/index.js";

import "../styles/Employee.css";

//Service card
export const Service = ({
    ServiceImage,
    ServiceTitle,
    ServiceContent,
}) => {
  return (
    <div className="service">
            <div className="service-image"><img src= {ServiceImage} /></div>
            <div className="service-content-container">
                <div className="service-title">{ServiceTitle}</div>
                <div className="service-content">{ServiceContent}</div>
            </div>
        </div>
  )
}
//Accessing cards
export const ServiceContainer = () => {
  return (
    <div className="service-container">
        <Service ServiceImage ={DeliveryIcon} ServiceTitle= "FREE AND FAST DELIVERY" ServiceContent= "Free delivery for all order over $140" />
        <Service ServiceImage ={CustomerSupport} ServiceTitle= "24/7 CUSTOMER SERVICE" ServiceContent= "Friendly 24/7 customer support" />
        <Service ServiceImage ={Guarantee} ServiceTitle= "MONEY BACK GUARENTEE" ServiceContent= "We return money within 30 days" />
    </div>
  )
}

