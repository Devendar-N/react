import "../styles/RelatedProduct.css";
import {
  Heart,
  Eye,
  GameController,
  Keyboard,
  Monitor,
  Cooler,
  YellowStar
} from "@images/index.js";
export const RelatedProduct = () => {
  return (
    <div className="product-suggestion">
      <div className="related-container">
        <div className="red-box"></div>
        <div className="related-item">Related Item</div>
      </div>
      <div className="related-products">
        <div className="product">
          <SuggestedProducts offerPrice="-40%" productImage={GameController} heartIcon={Heart} viewIcon={Eye} />
          <SuggestedProductDetails productName="HAVIT HV-G92 Gamepad" offerPrice="$120" originalPrice="$160" star={YellowStar} reviewCount="(88)" />
        </div>
        <div className="product">
          <SuggestedProducts offerPrice="-35%" productImage={Keyboard} heartIcon={Heart} viewIcon={Eye} />
          <SuggestedProductDetails productName="AK-900 Wired Keyboard" offerPrice="$960" originalPrice="$1160" star={YellowStar} reviewCount="(75)" />
        </div>
        <div className="product">
          <SuggestedProducts offerPrice="-30%" productImage={Monitor} heartIcon={Heart} viewIcon={Eye} />
          <SuggestedProductDetails productName="IPS LCD Gaming Monitor" offerPrice="$370" originalPrice="$400" star={YellowStar} reviewCount="(99)" />
        </div>
        <div className="product">
          <SuggestedProducts productImage={Cooler} heartIcon={Heart} viewIcon={Eye} />
          <SuggestedProductDetails productName="RGB liquid CPU Cooler" offerPrice="$160" originalPrice="$170" star={YellowStar} reviewCount="(65)" />
        </div>
      </div>
    </div>
  )
}

export const SuggestedProducts = ({
  offerPrice,
  productImage,
  heartIcon,
  viewIcon
}) => {
  return (
    <div className="related-product-details">
      {offerPrice && (<div className="related-product-offer">{offerPrice}</div>)}
      <div className="related-product-image"><img src={productImage} alt="product-image" /></div>
      <div className="related-product-icons">
        <button type="button" className="heart"><img src={heartIcon} alt="heart" /></button>
        <button type="button" className="eye"><img src={viewIcon} alt="view" /></button>
      </div>
      <button type="button" className="add-to-cart">Add To Cart</button>
    </div>
  )
}

export const SuggestedProductDetails = ({
  productName,
  offerPrice,
  originalPrice,
  star,
  reviewCount
}) => {
  return (
    <div className="related-product-price-details">
      <div className="related-product-name">{productName}</div>
      <div className="related-product-price">
        <div className="related-product-offer-price">{offerPrice}</div>
        <div className="related-product-original-price">{originalPrice}</div>
      </div>
      <div className="related-product-reviews-count">
        <div className="related-product-star">
          <div><img src={star} alt="star" /></div>
          <div><img src={star} alt="star" /></div>
          <div><img src={star} alt="star" /></div>
          <div><img src={star} alt="star" /></div>
          <div><img src={star} alt="star" /></div>
        </div>
        <div className="related-product-review-count"> {reviewCount} </div>
      </div>
    </div>
  )
}

