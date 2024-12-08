import React from "react";

function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    
      alert("Checkout successful! Thank you for your purchase.");
      
  };

  return (
   <>
      <div style={{ paddingTop: "150px"}}>
        <div className="row" >
          <div className="col-md-2"></div>
          <div className="col-md-8 text-center my-5">
            {cartItems.length === 0 ? (
              <h1>Your cart is empty</h1>
            ) : (
              <>
                <h1>Cart Items</h1>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id} className="d-flex justify-content-between align-items-center border p-3">
                      <img src={item.image} alt={item.title} style={{ width: "100px", height: "100px" }} />
                      <div>
                        <h5>{item.title}</h5>
                        <p>$ {item.price}</p>
                      </div>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <h2>Total: $ {total.toFixed(2)}</h2>
                <button className="btn btn-primary my-5" onClick={handleCheckout}>Proceed to Checkout</button>
              </>
            )}
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
   </>
  );
}

export default Cart;
