import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState(() => {

    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];

  });

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);



  // ==========================
  // ADD TO CART
  // ==========================

  const addToCart = (product) => {

    const exist = cartItems.find(
      item => item.id === product.id
    );

    if (exist) {

      const updated = cartItems.map(item =>

        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item

      );

      setCartItems(updated);

    }

    else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1
        }
      ]);

    }

  };



  // ==========================
  // INCREASE QUANTITY
  // ==========================

  const increaseQty = (id) => {

    const updated = cartItems.map(item =>

      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1
          }
        : item

    );

    setCartItems(updated);

  };



  // ==========================
  // DECREASE QUANTITY
  // ==========================

  const decreaseQty = (id) => {

    const updated = cartItems.map(item =>

      item.id === id
        ? {
            ...item,
            quantity:
              item.quantity > 1
                ? item.quantity - 1
                : 1
          }
        : item

    );

    setCartItems(updated);

  };



  // ==========================
  // REMOVE PRODUCT
  // ==========================

  const removeItem = (id) => {

    const updated = cartItems.filter(

      item => item.id !== id

    );

    setCartItems(updated);

  };



  // ==========================
  // CLEAR CART
  // ==========================

  const clearCart = () => {

    setCartItems([]);

  };



  // ==========================
  // TOTAL PRICE
  // ==========================

  const getTotal = () => {

    return cartItems.reduce(

      (total, item) =>

        total + (item.price * item.quantity),

      0

    );

  };



  return (

    <CartContext.Provider

      value={{

        cartItems,

        addToCart,

        increaseQty,

        decreaseQty,

        removeItem,

        clearCart,

        getTotal

      }}

    >

      {children}

    </CartContext.Provider>

  );

}

export default CartProvider;