import React,{useEffect, useState} from 'react'
import Loading from './Loading'
import './style/homedetail.css'

const Homedetails = () => {
    const [loading, setLoading] = useState(false)
    const [details, setDetails] = useState()
    const fetchHomeDetails = async()=>{
        const data = await fetch('https://ecommerce-api-production-ec1e.up.railway.app/home')
        const updateData = await data.json();
       setDetails(updateData)
       setLoading(true)
    }
  
    useEffect(() => {
        fetchHomeDetails()
    }, [])
    console.log(details)
  return (
    !loading ? <Loading/>
        :
    <div className='homedetail-container'>
    <section className='contant'>
      <h1>{details.heading}</h1>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ea a, commodi accusantium rem deserunt tempora dolor suscipit vitae! Vel soluta quasi dolorum minus saepe rerum earum ducimus eum sit recusandae dignissimos minima ipsa, excepturi, labore repellendus dolor, fugit aperiam?</p>
  <button>ExploreMore</button>    
    </section>
    </div>
  )
}

export default Homedetails