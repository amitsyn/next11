import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from "next/link";
import ProductItem from '../components/ProductItem'
import Button from '@mui/material/Button';


export default function Home({ product }) {
  return (
    <>
     
      <h2>List of Products</h2>
      {
        product.map(prod => {
          return (
            <div key={prod.id}>
              <Link href={`products/${prod.id}`}>

                <div className='row'>
                  <div className="col-md-6">
                    <img src={prod.image} />
                  </div>
                </div>

                <p>{prod.title}</p>
              </Link>
             
            </div>
          )
        })
      }
    
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json();
  console.log(data)

  return {
    props: {
      product: data
    }
  }
}

