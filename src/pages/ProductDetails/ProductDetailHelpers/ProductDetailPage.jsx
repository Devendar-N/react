import { 
  ProductDetailsAndImages,
  RelatedProduct
 } from "@components";
const ProductDetailPage = () => {
  return (
    <div className="product-page">
      <ProductDetailsAndImages/>
      <RelatedProduct/>
    </div>
  )
}

export default ProductDetailPage;