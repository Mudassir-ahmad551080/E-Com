import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrum from '../component/BreadCrum';
import ProductDisplay from '../component/ProductDisplay';
import Description from '../component/Description';
import RelatedProduct from '../component/RelatedProduct';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
    <BreadCrum product={product}/>
    <ProductDisplay product={product}/>
    <Description/>
    <RelatedProduct/>
    </div>
  )
}

export default Product