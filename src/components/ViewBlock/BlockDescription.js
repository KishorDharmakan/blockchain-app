import React from 'react';
import { Link } from 'react-router-dom';
import './ViewBlock.css';

export const BlockDescription = (props) => {
    /* 
    Removed this for using the ImageCarousel
     <img className="card-img-top" src={props.productVal.product_photo} alt="Card imge " />

     Removed this to use bigger image card
     <div className="card cardstyle rounded mx-auto d-block">
                <span className="badge badge-pill badge-secondary"><h4>Category: {props.productVal.product_category}</h4></span>
                <div>
                    <h5 className="card-title productprice">{props.productVal.product_name}</h5>
                </div>
                <ImageCarousel imageReference={props.productVal.product_photo}/>
                <div className="card-body">
                    <h5 className="card-title productprice">{props.productVal.product_price}</h5>
                    <p className="card-text">{props.productVal.product_description}</p>
                </div>
                <Link to={`/products/edit/${props.productVal.product_id}`} className="btn btn-primary add-product-button" > Edit Product </Link>
            </div>
    */
    return (            
        <div className="card text-center">
            <div className="card-header">
                <h4>Block: {props.productVal.product_category}</h4>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.productVal.product_name}</h5>
                <p className="card-text">{props.productVal.product_description}</p>
                <Link to={`/products/edit/${props.productVal.product_id}`} className="btn btn-primary add-product-button" > Edit Product </Link>
            </div>
            <div className="card-footer text-muted">
                {props.productVal.product_price}
            </div>
        </div>
    )

}