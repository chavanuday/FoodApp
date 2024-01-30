import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
  return(
  <div className="Header">
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

const AppLayout = () =>{
  return (
    <div className="app">
      <Header/>
    </div>
  )
}
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<AppLayout />);
