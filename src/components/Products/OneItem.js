import React from 'react'

function OneItem({img, brand, name, price, oldPrice, cartButton, off}) {
    return (
        <div className="item">
                 <div className="item_image">
                     <img src={img} alt=""/>
                 </div>
                 <div className="item_brand">
                     <span><strong>{brand}</strong></span>
                 </div>
                 <div className="item_name">
                    <span className="dark">{name}</span>
                 </div>
                 <div className="item_price">
                     <span><strong>{price}</strong> <small><strike className="xs dark">{oldPrice}</strike> <span className="item_off">{off}</span></small></span>
                 </div>
                 <button>{cartButton}</button>
             </div>
    )
}

export default OneItem

