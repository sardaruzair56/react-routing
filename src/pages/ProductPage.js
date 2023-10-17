import React from 'react'
import { Link } from 'react-router-dom'


const ProductPage = () => {

    const PRODUCT =
    [   {id:'p1', title:'Product 1'},
        {id:'p2', title:'Product 2'},
        {id:'p3', title:'Product 3'}
    ]
  return (
   <>
   <h1><strong>The Product Page</strong></h1>
   <ul>
    {PRODUCT.map((prod)=>(
        <li key={prod.id}>
            <Link to={prod.id}>{prod.title}</Link>
        </li>
    ))}
   </ul>
   </>
  )
}

export default ProductPage
