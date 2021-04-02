import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <div className="header">
            <img className="header_logo"
             src="https://3.bp.blogspot.com/-BalaNVRwmhM/VoJmDzFmk0I/AAAAAAAA55I/OoVDKUax5zc/s400/WishList-logo.gif" alt=""/>
             <div className="header_nav">
                 <div className="header_option">
                     <span className="header_optionLine">
                         MEN
                     </span>
                     
                 </div>

                 <div className="header_option">
                 <span className="header_optionLine">
                         WOMEN
                     </span>
                    
                 </div>

                 <div className="header_option">
                 <span className="header_optionLine">
                        KIDS
                     </span>
                     
                 </div>

                 <div className="header_option">
                 <span className="header_optionLine">
                       HOME & LIVING
                     </span>
                     
                 </div>

                 <div className="header_option">
                 <span className="header_optionLine">
                        OFFERS
                     </span>
                     
                 </div>
             </div>

             <div className="header_search">
                 <input className="header_searchInput" type="text" placeholder="Search for products, brands and more"/>
                 {/*search Logo */}
                 <SearchIcon className="header_searchIcon"/>

             </div>
             <div className="header_nav">
                 <div className="header_option">
                     <span className="header_optionLine1">
                         Hello Guest 
                     </span>
                     <span className="header_optionLine2">
                         Sign In
                     </span>
                 </div>

                 <div className="header_option">
                 <span className="header_optionLine1">
                         Returns 
                     </span>
                     <span className="header_optionLine2">
                        & Orders
                     </span>
                 </div>

                 <div className="header_option">
                 <span className="header_optionLine1">
                         Your 
                     </span>
                     <span className="header_optionLine2">
                         Wish Hits
                     </span>
                 </div>

                 <div className="header_optionBasket">
                     <ShoppingCartIcon/>
                     <span className="header_optionLine2 header_basketCount">  0  </span>
                 </div>
             </div>
        </div>
    )
}

export default Header
