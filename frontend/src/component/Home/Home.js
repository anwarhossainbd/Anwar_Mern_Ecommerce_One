import React, { Fragment } from 'react' ;
import "./Home.css";
import Product from "./Product.js"

const product ={
  name:"Blue Tshirt",
  images:[{url:"https://i.ibb.co/DRST11n/1.webp"}] ,
  price:"3000",
  _id:"anwar"
}


const Home = () => {
  return (
    <Fragment>
      <div className="banner">
         <p>Welcome to Ecommerce</p>
         <h1>Find Amazing Products Below</h1>

         <a href="#container">
             <button>
                Go Down 
             </button>
         </a>
      </div>


      <h2 className="homeHeading">Featured Prodcts</h2>

      <div className="container" id="container">
      
      <Product product={product} />

      </div>

    </Fragment>
  )
}

export default Home


