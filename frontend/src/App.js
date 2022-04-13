import './App.css';
import React from "react";
import Header from "./component/layout/Header/Header.js"
import Footer from "./component/layout/Footer/Footer.js"
import Home from "./component/Home/Home.js"
import {  BrowserRouter as Router, Switch,Route} from "react-router-dom";
import WebFont from "webfontloader"
import ProductDetails from "./component/Product/ProductDetails.js"





function App() {

  React.useEffect(()=>{

    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"],
      },
    });
  },[]);


  return (
   <div>
   
   <Router>

   <Header />

      <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/product/:id" exact={true} component={ProductDetails}/>

      </Switch>

      <Footer />

    </Router>
   
   </div>

  );
}

export default App;
