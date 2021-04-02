import React from 'react';
import './Offer.css';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick"; 

function Offer() {
        var images = [    
            { img: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/14/dc6cf926-8dfe-4161-b4d0-e78c622df2771615743989381-Desktop-Shop-Now.gif' },    
            { img: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/15/e6e7a966-4f47-40d4-be26-3114b26633cc1615819239655-HRX_Desk.jpg' },    
            { img: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/14/92d441e5-422c-425b-91a6-0da8c398f55c1615735151174-cat-fest-dk-mar.jpg' },    
            // { img: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/16/426e1dcb-08a4-45b2-8bd2-9582e782435f1615884872897-Kurtas_Desk.jpg' },    
               
          ];   
    var imgSlides = () =>  
    images.map(num => (  
      <div className="imgpad">  
          <img className="imgdetails" src= {num.img} width="100%" alt=""/>    
      </div> 
      ));
    return (
        <div className="offers">
            <p className="free_shipping"><strong>Free shipping</strong> only for you <ArrowForwardIosSharpIcon/><ArrowForwardIosSharpIcon/></p>
            <Slider  
    dots={true}  
        slidesToShow={1}  
        slidesToScroll={1}  
        autoplay={true}  
        arrows={true}  
        autoplaySpeed={2000}>{imgSlides()}</Slider>  
    </div>
        
    );
}

export default Offer
