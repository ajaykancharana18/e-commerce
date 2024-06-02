import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductHd from './ProductHd';
import ProductDisplay from './ProductDisplay';
import Productdescription from './Productdescription';
import RelatedProducts from './RelatedProducts';

const Product = () => {

    const {all_products} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_products.find((e)=> e.id === Number(productId))
    // const {catItems} = useContext(ShopContext)
    // console.log(catItems)
    // console.log(product)
       

    // const product = allproducts.map((pro) => {
    //   pro.id
    // })

    return (
        <div className='mt-16 flex flex-col '>
            <ProductHd product={product} />
            <ProductDisplay product={product} />
            <Productdescription />
            <RelatedProducts /> 
        </div>
    )
}

export default Product