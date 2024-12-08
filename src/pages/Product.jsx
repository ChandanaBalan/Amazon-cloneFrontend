import React from 'react';
import { useLocation } from 'react-router-dom';

function Product({addToCart}) {
    const location = useLocation(); // Access the state object from the navigation
    const { product } = location.state || {}; // Retrieve the passed product details

    if (!product) {
        return <p>Product not found</p>; // Handle the case where no product data is provided
    }

    return (
        <>
            <div style={{ paddingTop: '150px' }}>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        
                        <img src={product.image} alt={product.title} style={{ width: '100%', height: '500px' }} />

                    </div>
                    <div className="col-md-4 p-5" >
                       <div className='d-flex justify-content-center align-items-center flex-column' style={{height: '500px' }} >
                       <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <h6>Rating: {"⭐".repeat(Math.round(product.rating))}</h6>
                            <div className='d-flex justify-content-between w-100 mt-5'>
                                <h4>$ {product.price}</h4>
                                
                                <button className='btn-cart p-3 rounded' onClick={()=>addToCart(product)}>Add to cart</button>
                            </div>
                       </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </>
    );
}

export default Product;
