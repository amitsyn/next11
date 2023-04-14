
export default function Product({ product }) {
  return (
    <>
      <img src={product.image} height='500px ' width='300' />
      <h2>
        {product.id} {product.title}
        <h6>$Price : {product.price}</h6>
        <input
          type='number'
          style={{ width: "400px", margin: "100px" }}
          min="1"
          placeholder="Quantity"
        />
        <button >ADD </button>
        <div>
          <h6>$Describtion : {product.description}</h6>
          <h6>$Ratintg : {product.rating.rate}</h6>
        </div>
      </h2>
      <button style={{ color: 'red' }}>Delete</button>

    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()

  const paths = data.map(product => {
    return {
      params: {
        productId: `${product.id}`
      }
    }
  })
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps(context) {
  const { params } = context
  console.log(params.productId)
  let data = []
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
    data = await res.json()
  }
  catch {
    console.log('data')
  }
  return {
    props: {
      product: data
    }
  }
}