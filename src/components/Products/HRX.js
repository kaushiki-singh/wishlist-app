import React from 'react';
import './HRX.css';
import OneItem from './OneItem';
import {items} from './HRXitems';

const brand = "HRX by Hrithik Roshan";
const cartButton = "Add to Cart";


function HRX() {
    return (
         <div className="yourItems">
             {items.map((item, key) => {
                return  (
                    <OneItem 
                    key = {key}
                    
                    brand = {brand}
                   
                    cartButton = {cartButton}
                    {...item}
                    />

                );
             }
             )}


        </div>
    )
}

export default HRX
