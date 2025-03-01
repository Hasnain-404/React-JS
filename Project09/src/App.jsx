import React from 'react'
import StoreCard from './components/StoreCard'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [productData, setproductData] = useState([])

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=10`)
      .then((res) => res.json())
      .then((data) => {
        setproductData(data)
      })
  }, []);

  return (
    <div className=' flex flex-wrap gap-4 ml-40 mt-5'>
      {productData.map((product) => (<StoreCard title={product.title} price={product.price} description={product.description} image={product.image} key={product.key} />))}
    </div>
  )


}

export default App