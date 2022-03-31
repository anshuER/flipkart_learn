export const addItemToCart = (cartItems, cartItemToadd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToadd.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToadd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToadd, quantity: 1 }];
};

export const removeItem = (cartItems, cartItemToRemove) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id != cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};


export const totalItems=(initialItems,addedItems)=>{
  const total=initialItems.reduce(...initialItems+addedItems.quantity*addedItems.price,0)
  return total
}
