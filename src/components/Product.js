import React,{useState, useEffect} from "react";
import Loading from "./Loading";
import './style/product.css'

const Product = () => {
    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState();
    const [query, setQuery] = useState('electronics');
 
    const fetchProductData = async ()=>{
        const data = await fetch(`https://ecommerce-api-production-ec1e.up.railway.app/products/${query}`)
        setDetails(await data.json());
        setLoading(true)
    }
    useEffect(() => {
      fetchProductData()
    //   setLoading(true)
    }, [query])
    
  return (
    !loading ? <Loading/>
    :
    <div className="product-container">
      <section className="left-sec">
        <button onClick={()=> setQuery("electronics")}>Electronics</button>
        <button onClick={()=> setQuery("jewelery")}>Jewelery's</button>
        <button onClick={()=> setQuery("mensclothing")}>MensClothing</button>
        <button onClick={()=> setQuery("womensclothing")}>WomenClothing</button>
      </section>
      <section className="right-sec">
       <ul>
        {details.map((val,idx)=><li>{val.title}</li>)}
       </ul>
      </section>
    </div>
  );
};

export default Product;
