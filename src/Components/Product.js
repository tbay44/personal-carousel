import React from 'react';
import {uniqueId} from '../Events/Events'

const Product = (props) => {
    return (
        <a href="#search-bar-root" >
    <div  className="Carousel-Product" onClick={
        (event) => {
            window.uniqueId = props.product_id
            window.dispatchEvent(uniqueId);
        }
    }>
        <img src={props.prime_pic}  />
        <p>{props.product_name}</p>
        <p className="Carousel-Price">{props.price}</p>
        <p className="Carousel-Shipping">{props.shipping === true? "Free Shipping" : "Not Free Shipping"} </p>
    </div>
    </a>
    )
}
export default Product  
