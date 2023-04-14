import Link from 'next/link'
import React from 'react'

const ProductItem = ({myProduct}) => {
 
 return (
  <>
   
    <h2>List of Products</h2>
   
     { myProduct.map(item => {
      return (
        <div key={item.id}>
           <img src={item.image}/>
        </div>
)
      })
}
    
  </>
)
  
}
export default ProductItem
