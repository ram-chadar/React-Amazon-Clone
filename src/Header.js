import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";

import "./Header.css";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ basket }] = useStateValue();
  return (
    <nav className="header">
      {/* logo on left */}
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/* search box */}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* 3 links */}
      <div className="header_nav">
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_oprionLineOne">Hello Ram</span>
            <span className="header_oprionLineTwo">Sign In</span>
          </div>
        </Link>

        <Link className="header_link">
          <div className="header_option">
            <span className="header_oprionLineOne">Returns</span>
            <span className="header_oprionLineTwo">Orders</span>
          </div>
        </Link>

        <Link className="header_link">
          <div className="header_option">
            <span className="header_oprionLineOne">Your</span>
            <span className="header_oprionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_oprionLineTwo header_BasketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>

      {/* Basket Icon */}
    </nav>
  );
}

export default Header;
