import { 
  ProductDetailsAndImages,
  RelatedProduct
 } from "@components";

 //Product page component
const ProductDetailPage = () => {
  return (
    <div className="product-page">
      <ProductDetailsAndImages/>
      <RelatedProduct/>
    </div>
  )
}

export default ProductDetailPage;