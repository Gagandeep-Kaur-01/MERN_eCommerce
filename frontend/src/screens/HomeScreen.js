import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { lisrProducts, listProduct } from '../actions/productActions'
// import products from '../products'
// import axios from 'axios'



const HomeScreen = () => {
  const dispatch = useDispatch()

  // dispatching data using redux
  useEffect(() => {
    dispatch(listProduct())    
    }, [dispatch]
  )

   // fetch data from backend
   //   const [products, setProducts] = useState([])
   //   useEffect(() => {
   //     const fetchProducts = async () => {
   //       const { data } = await axios.get('/api/products')
   //       setProducts(data)
   //     }
   //     fetchProducts()    
      // console.log(data)
   //   }, [])



  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen