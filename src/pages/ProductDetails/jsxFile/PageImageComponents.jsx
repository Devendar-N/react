import "@Productcss/ProductDetailsAndImages.css";
import {
  ProductWithKit,
  ProductFrontView,
  ProductSideView,
  ProductTopView,
  ProductMainImage
} from "@images/images"

export const ImageCard = ({ imageSrc, imageAlt }) => (
  <div className="image-container">
    <img src={imageSrc} alt={imageAlt} />
  </div>
);

export const MainImage = () => (
  <div className="main-image-container">
    <img src={ProductMainImage} alt="Product-Image" />
  </div>
);
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
