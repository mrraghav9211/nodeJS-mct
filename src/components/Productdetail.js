import React from 'react'
import './style/productdetails.css'

const Productdetail = ({id, data}) => {
    const filterdata = data.filter((val)=> val._id == id);
    console.log(filterdata)
    // console.log(id, data)
  return (
    <div className='productdetail-container'>
        <h1>{filterdata[0].category} Category</h1>
        <div className='flex'>
           <div className='left'>
            <img src={filterdata[0].image} alt="" />
           </div>
           <div className='right'>
           <h3>Product Name</h3>
           <p>{filterdata[0].title}</p>
           <h3>Product Price</h3>
           <p>{filterdata[0].price}</p>
           <h3>Product description</h3>
           <p>{filterdata[0].description}</p>
           <h3>Product Rating</h3>
           <p>{filterdata[0].rating.rate}</p>
           </div>
        </div>
    </div>
  )
}

export default Productdetail;