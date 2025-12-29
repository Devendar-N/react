import "../styles/ProductDetailsAndImages.css"; //stylesheet

//import images
import {
  ProductWithKit,
  ProductFrontView,
  ProductSideView,
  ProductTopView,
  ProductMainImage
} from "@images/index.js"

//Creating Image card
export const ImageCard = ({ imageSrc, imageAlt }) => (
  <div className="image-container">
    <img src={imageSrc} alt={imageAlt} />
  </div>
);

// Using Image card
export function ProductImages() {
  return (
    <div className="product-images">
      <ImageCard imageSrc={ProductWithKit} imageAlt="Product Image" />
      <ImageCard imageSrc={ProductFrontView} imageAlt="Product Image" />
      <ImageCard imageSrc={ProductSideView} imageAlt="Product Image" />
      <ImageCard imageSrc={ProductTopView} imageAlt="Product Image" />
    </div>
  )
}

//Main image
export const MainImage = () => (
  <div className="main-image-container">
    <img src={ProductMainImage} alt="Product-Image" />
  </div>
);
