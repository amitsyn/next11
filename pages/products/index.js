import Link from "next/link";
import ProductItem from '../../components/ProductItem'


export default function ProductList({product}) {
      return (
      <>
        <h2 className="Product-container">List of Products</h2>
        <ProductItem myProduct={product}/>
      </>
    )
  }
  
export  async function getStaticProps(){
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    console.log(data)
        return {
      props:{
        product:data
      }
    }
  }