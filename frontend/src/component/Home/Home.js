import React, { Fragment ,useEffect} from 'react' ;
import "./Home.css";
import Product from "./Product.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import MetaData from '../layout/MetaData';

import { getProduct } from '../../actions/productAction';
import {useSelector,useDispatch} from "react-redux"
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert';



const Home = () => {

const alert=useAlert()

const dispatch=useDispatch();

const {products,loading,error,productsCount} =useSelector(
  (state)=>state.products
)

  useEffect(()=>{

    if(error){
      return alert.error(error)
    }

    dispatch(getProduct())

  },[dispatch,error,alert])


  return (
   <Fragment>
   
   {loading ? (
     <Loader />
   ):(
    <Fragment>

    <MetaData title="Ecommerce" />


      <div className="banner">
         <p>Welcome to Ecommerce</p>
         <h1>Find Amazing Products Below</h1>

         <a href="#container">
             <button>
                 Scroll     <FontAwesomeIcon icon={faArrowDown} />

             </button>
         </a>
      </div>


      <h2 className="homeHeading">Featured Prodcts</h2>

      <div className="container" id="container">
      
     {products && products.map(product=>(
       <Product product={product} />
     ))}

      </div>

    </Fragment>
   )}
   
   </Fragment>
  )
}

export default Home


