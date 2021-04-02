import React from 'react';
import './Home.css';
import Offer from './Offer';
import BestDeals from './BestDeals';
import Shoes from './Shoes';
import Accessories from './Accessories';
import Footer from './Footer';
// import HRX from '../Products/HRX';


function Home() {
    return (
        <div className="home">
            <div className="home_container">
                {/* <a href="https://www.netflix.com/in/" >
                <img className="home_image" src="https://wallpaperaccess.com/download/netflix-hd-712404"
                alt=""/>
                </a> */}
               <Offer/>
               <BestDeals/>
               <Shoes/>
               <Accessories/>
               <Footer/>
               {/* <HRX/> */}
                <div className="home_row">
                    {/* Product  */}
                    {/* Product  */}
                    {/* Product  */}
                    {/* Product  */}
                    {/* Product  */}
                </div>
                <div className="home_row">
                    {/* Product  */}
                    {/* Product  */}
                    {/* Product  */}
                    {/* Product  */}
                    {/* Product  */}
                    {/* Product  */}
                    {/* Product  */}
                    {/* Product  */}
                    {/* Product  */}
                    {/* Product  */}
                </div>
            </div>
        </div>
    )
}

export default Home

