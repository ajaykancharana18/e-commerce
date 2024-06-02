import React from 'react'
import { TbArrowDown, TbArrowRight } from 'react-icons/tb'


const ProductHd = (props) => {

    const product = props;
    const item = product.product
    // console.log(item)

    return (
        <div className='flex flex-col px-4 py-4 bg-slate-200'>
            <div className='flex items-center flex-wrap justify-start gap-2 font-semibold '>
                Home <TbArrowRight  /> shop <TbArrowRight  /> {item.category} <TbArrowRight  /> <div >{item.name}</div>
            </div>

        </div>
    )
}

export default ProductHd