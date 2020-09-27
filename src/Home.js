import React from "react";
import Banner from "./amazon-prime-banner.png";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img src={Banner} className="home_image" />

      <div className="home_row">
        <Product
          id="1"
          title="boAt BassHeads 900 On-Ear Wired Headphone with Super Extra Bass, in-line Mic, Snug Fit and Lightweight Foldable Design (Carbon Black)"
          price={1499}
          image="https://m.media-amazon.com/images/I/61xeIT6UHrL._AC_UY218_.jpg"
          rating={5}
        />

        <Product
          id="2"
          title="Redmi Note 8 Pro (Electric Blue, 6GB RAM, 64GB Storage with Helio G90T Processor)"
          price={15999.0}
          image="https://images-na.ssl-images-amazon.com/images/I/51da%2B8RxEWL._SX679_.jpg/I/61xeIT6UHrL._AC_UY218_.jpg"
          rating={4}
        />
      </div>

      <div className="home_row">
        <Product
          id="3"
          title="LG 260 L 3 Star Frost Free Double Door Refrigerator (GL-I292RPZL, Shiny Steel, Smart Inverter Compressor)"
          price={23990}
          image="https://images-na.ssl-images-amazon.com/images/I/51B%2BPLv%2BsvL._SY679_.jpg"
          rating={3}
        />

        <Product
          id="4"
          title="Philips HL7756/00 Mixer Grinder, 750W, 3 Jars (Black)"
          price={3318}
          image="https://images-na.ssl-images-amazon.com/images/I/51B0MPbLbXL._SX569_.jpg"
          rating={4}
        />
        <Product
          id="5"
          title="HP 15s Thin and Light Laptop (10th Gen i3-1005G1/4GB/256GB SSD + 1TB HDD/Windows 10 Home/MS Office 2019), du2067tu"
          price={42355}
          image="https://images-na.ssl-images-amazon.com/images/I/410mVzx3SxL.jpg"
          rating={5}
        />
      </div>

      <div className="home_row">
        <Product
          id="6"
          title="LuvBells® Smart Multi-Purpose Laptop Table with Dock Stand and Coffee Cup Holder/Study Table/Bed Table/Foldable and Portable/Ergonomic & Rounded Edges/Non-Slip Legs/Engineered Wood (Mint Blue)"
          price={1299}
          image="https://m.media-amazon.com/images/I/51MEGJ3o54L._AC_UY218_.jpg"
          rating={3}
        />
      </div>
    </div>
  );
}

export default Home;
