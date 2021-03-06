import React,{Fragment, useEffect,useState} from 'react';
import "./Products.css";
import { getProduct,clearErrors } from '../../actions/productAction';
import {useSelector,useDispatch} from "react-redux"
import Loader from '../layout/Loader/Loader';
import ProductCard from "../Home/Product"
import Pagination from "react-js-pagination";
import { Slider, Typography } from '@material-ui/core';

import { useAlert } from 'react-alert';

import MetaData from "../layout/MetaData"

const categories= [
  "Laptop",
  "Mobile",
  "Electronic",
  "Food",
  "Cloth"
]


const Products = ({match}) => {

  const alert=useAlert();

  const dispatch =useDispatch() ;

  const [currentPage, setCurrentPage] = useState(1) ;
  const [price,setPrice]=useState([1000,50000]);
  const [category,setCategory]=useState();

  const [ratings,setRatings]=useState(0);




  const {products,loading,error,productsCount,resultPerPage} =useSelector(
    (state)=>state.products
  )

  const keyword=match.params.keyword ;

  const setCurrentPageNo=(e)=>{
   
    setCurrentPage(e)
  }

  const priceHandler =(event,newPrice)=>{
    setPrice(newPrice);
  }

  useEffect(() => {

    if(error){
      alert.error(error);
      dispatch(clearErrors())
    }
   
    dispatch(getProduct(keyword,currentPage,price,category,ratings))
  }, [dispatch,keyword,currentPage,price,category,ratings,error,alert]);




  return (
   <Fragment>

   
   {loading ? <Loader />:(
     <Fragment>

     <MetaData title="Products" />


     <h2 className="productsHeading">Products</h2>

     <div className="products">
      {
        products && products.map((product)=>(
          <ProductCard key={product._id} product={product} />
        ))
      }
     </div>

   
     <div className="filterBox">

     <Typography>Price</Typography>

     <Slider  
     value={price}
     onChange={priceHandler}
     valueLabelDisplay="auto"
     aria-labelledby='range-slider'
     min={1000}
     max={50000} />


     <Typography>Categories</Typography>

     <ul className="categoryBox">
     
     {categories.map((category)=>(

       <li className='category-link'
       key={category}
       onClick={()=>setCategory(category)}
       >
       {category}
       </li>
     ))}
     </ul>

     <ul className="categoryBox">


     <div className="rating">
     <Typography component="legend">Ratings Above</Typography>

     <Slider
     
     value={ratings}
     onChange={(e,newRating)=>{
      setRatings(newRating) ;
     }}

     aria-labelledby="continuous-slider"
     min={0}
     max={5}
     valueLabelDisplay="auto"

     />

     </div>

     
     </ul>

     </div>





     {resultPerPage < productsCount && (
      <div className="paginationBox">
      <Pagination
         activePage={currentPage}
         itemsCountPerPage={resultPerPage}
         totalItemsCount={productsCount}
         onChange={setCurrentPageNo}
         nextPageText="Next"
         prevPageText="Prev"
         firstPageText="First"
         lastPageText="Last"
         itemClass="page-item"
         linkClass="page-link"
         activeClass="pageItemActive"
         activeLinkClass="pagelinkActive" 
      />
</div>
     )}
     
     </Fragment>
   )}
   
   </Fragment>
  )
}

export default Products