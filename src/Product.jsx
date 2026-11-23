import React from 'react'
const Product = (props) => {
  return (
    <div className="flex flex-col items-center">
      <img src={props.shoes.imgUrl} alt="상품" className="w-4/5 h-auto rounded-lg mb-3" />
      <h4 className="text-lg font-bold text-gray-900">{props.shoes.title}</h4>
      <p className="text-gray-500 mt-1">{props.shoes.price}</p>
    </div>
  )
}

export default Product


