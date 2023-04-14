import React from 'react'

export default function User({product1}) {
  return (
    <>
      <h2>{product1.username}</h2>
    </>
  )
}



export async function getStaticPaths() {
    const res1 = await fetch('https://jsonplaceholder.typicode.com/users')
    const data1 = await res1.json()
  
    const paths = data1.map(user => {
      return {
        params: {
          postId: `${user.id}`
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
    console.log(params.postId)
    let data1 = []
    try {
      const res1 = await fetch(`https://jsonplaceholder.typicode.com/users/${params.postId}`)
      data1 = await res1.json()
    }
    catch {
      console.log('data')
    }
    return {
      props: {
        product1: data1
      }
    }
  }