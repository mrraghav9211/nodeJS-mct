import React,{useState, useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Productdetail from "./Productdetail";
import './style/product.css'

const Product = ({setId, setData}) => {
  const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState();
    const [query, setQuery] = useState('electronics');
    const [arr, setArr] = useState([])
    // const [data, setData] = useState()
 
    const fetchProductData = async ()=>{
        const data = await fetch(`https://ecommerce-api-production-ec1e.up.railway.app/products/${query}`)
        setDetails(await data.json());
        setLoading(true)
    }
    useEffect(() => {
      fetchProductData()
    //   setLoading(true)
    }, [query])
    
    function render(e){
      setArr([0]);
      setId(e.target.id)
      setData(details)
      navigate('/productdetail')
    }
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
        {details.map((val,idx)=>(
          <>
          <li id={val._id} onClick={render}>{val.title}</li></>
        ))}
       </ul>
       {/* {arr.map(() => {
         return <Productdetail data={data} details={details}/>
     })} */}
      </section>
    </div>
  );
};

export default Product;
