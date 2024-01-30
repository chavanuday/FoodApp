import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
  return(
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://dynamic.brandcrowd.com/asset/logo/7f982a19-779d-4dd3-b533-7a9f66474000/logo-search-grid-1x?logoTemplateVersion=1&v=637810055012670000"
        alt=""
      />
    </div>

    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
  );
};

const RestaurantCard = () => {
  return(
    <div className="res-card">
      <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/405645b3118d83e89db4c65361e43733" alt="" />
      <h3>Uday Foods</h3>
      <h4>Biryani, North India, Asian</h4>
    </div>
  )
}

const Body = () => {
  return(
    <div className="bod">
      <div className="search">Search</div>
      <div className="res-container">
        
        <RestaurantCard />
      </div>
    </div>
  )
}

const AppLayout = () =>{
  return (
    <div className="app">
      <Header/>
      <Body />
    </div>
  )
}
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<AppLayout />);
