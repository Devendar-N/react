import { Star,Return, Delivery } from "@images/index.js";
import { IoHeartOutline } from "react-icons/io5";
import { useState } from "react";

import "../styles/ProductDetailsAndImages.css";

export const ProductDiscription = () => {
  return (

    // product details
    <div className="product-details">
      <div className="product-name">Havic HV G-92 Gamepad</div>
      <div className="product-reviews">
        <div className="review-star">
          <div>
            <img src={Star} alt="Star" />
          </div>
          <div>
            <img src={Star} alt="Star" />
          </div>
          <div>
            <img src={Star} alt="Star" />
          </div>
          <div>
            <img src={Star} alt="Star" />
          </div>
          <div>
            <img src={Star} alt="Star" />
          </div>
        </div>
        <div className="product-review-count">(150 Reviews)</div>
        <div className="product-stock">In Stock</div>
      </div>
      <div className="product-price">$192.00</div>
      <div className="product-discription">
        PlayStation 5 Controller Skin High quality vinyl with air channel
        adhesive for easy bubble free install & mess free removal Pressure
        sensitive.
      </div>
    </div>
  );
};

export const ProductColour = () => {

  //shows the selected colour of the product
  const [count, setCount] = useState(0);
  const [selectedColour, setselectedColour] = useState(null);

  return (
    <div className="product-specification">
      <div className="product-available-colours">
        <div className="colour-text">Colours:</div>
        <div className="product-change-colour">

          {/* using ternary to activate the border around the selected colour */}
          <button className ={` product-colour-blue ${selectedColour === "blue" ? "activate-colour" : ""}`} onClick={() => setselectedColour("blue")}></button>
          <button className ={` product-colour-red ${selectedColour === "red" ? "activate-colour" : ""}`} onClick={() => setselectedColour("red")}></button>
        </div>
      </div>

      <div className="purchase-details">
        <div className="product-quantity-container">
          <button className="quantity-minus" onClick={() => count > 0 && setCount(count - 1)} > - </button>

          <div className="quantity-display" id="product-quantity-display">
            {count}
          </div>

          <button className="quantity-plus" onClick={() => setCount(count + 1)}> + </button>
        </div>

        <button className="buy-now-button">
          <div className="text-buy-now">Buy Now</div>
        </button>

        <button className="wishlist">
          <IoHeartOutline size={24} className="wishlist-icon" />
        </button>
      </div>
    </div>
  );
};


export const ProductReturn = () => {
  return (
    <div className="delivery-and-return-details">
      <div className="delivery-details-container">
        <img src= {Delivery} alt="" />
        <div className="delivery-and-return-content">
          <div className="delivery">Free Delivery</div>
          <div className="postal-code">
            Enter your postal code for Delivery Availability
          </div>
        </div>
      </div>
      <div className="return-details-container">
        <img src= {Return} alt="" />
        <div className="delivery-and-return-content">
          <div className="delivery">Return Delivery</div>
          <div className="return-details">
            Free 30 Days Delivery Returns.
            <span className="span-details">Details</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductDiscriptionContainer = () => {
  return (
    <div className="product-discription-container">
      <ProductDiscription />
      <ProductColour />
      <ProductReturn/>
    </div>
  );
};

