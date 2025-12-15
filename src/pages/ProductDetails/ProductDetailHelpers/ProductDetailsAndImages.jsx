import {
  ProductImages,
  MainImage,
  ProductDiscriptionContainer
} from "@components";

import "../styles/ProductDetailsAndImages.css";

const ProductDetailsAndImages = () => {
  return (
    <div className="product-images-and-details">
      <ProductImages />
      <MainImage />
      <ProductDiscriptionContainer />
    </div>
  )
}

export default ProductDetailsAndImages;