import React, { useState, useEffect, useRef } from "react";
import './App.css';
//  product page data
const products = [
  { id: 1, name: "Bag", price: 50, img: "/Images/bag.jpg" },
  { id: 2, name: "Laptop", price: 45000, img: "/Images/Laptop.jpg"},
  { id: 3, name: "Watch", price: 100, img: "/Images/watch.jpg" },
    { id: 4, name: "Book", price: 80, img: "/Images/book.jfif" },
  { id: 5, name: "Bottle", price: 150, img: "/Images/bottle.webp" },
  { id: 6, name: "Glasses", price: 100, img: "/Images/glasses.jpg" },
  { id: 7, name: "phone", price: 15000, img: "/Images/phone.jpg" }

];

const App = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [page, setPage] = useState<string>("home"); // home page or cart page
  const cartRef = useRef<HTMLDivElement>(null);
  const [total, setTotal] = useState<number>(0);
const [checkoutDone, setCheckoutDone] = useState<boolean>(false);


  // Function to add item to the cart
  const addToCart = (product: any) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Scrolling to cart section when page changes to cart from home
  useEffect(() => {
    if (page === "cart" && cartRef.current) {
      cartRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [page]);
  useEffect(() => {
  const sum = cart.reduce((acc, item) => acc + item.price, 0);
  setTotal(sum);
}, [cart]);

  return (
    <div>
      <div className="floating-cart" onClick={() => setPage("cart")}>
  <img src="/Images/cart1.png" alt="Cart" />
  {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
  <span className="cart-label">View Cart</span>
</div>
       {/* Home items  */}
      {page === "home" && (
        <div>
          <h1>Back to School Essentials</h1>
          <div className="products">
            {products.map((product) => (
              <div key={product.id} className="product">
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
          {/* <button onClick={() => setPage("cart")}>View Cart</button> */}
        </div>
      )}

{/* cart items */}
      {page === "cart" && (
        <div ref={cartRef} className="cart">
          <h2>🛒 Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="cart-items">
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.img} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>
              ))}
            </div>
          )}
          {cart.length > 0 && (
  <>
    <div className="total-price">Total: ₹{total}</div>
    <button onClick={() => {
      setCheckoutDone(true);
      setTimeout(() => {
        setCart([]);
        setPage("home");
        setCheckoutDone(false);
      }, 1000); // Simulates success message then redirect
    }}>
      Checkout
    </button>
  </>
)}
{checkoutDone && <p className="checkout-success">✔ Checkout successful!</p>}

{/* <div className="cart-button" onClick={() => setPage("cart")}>
  <img src="/Images/cart1.png" alt="Cart" />
  {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
  <span className="cart-text">View Cart</span>
</div>         */}
</div>
      )}
    </div>
  );
};

export default App;
