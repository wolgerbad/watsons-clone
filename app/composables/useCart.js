export default function useCart() {
  const cart = useState('cart', () => []);

  const cartLength = computed(
    () =>
      cart.value.length &&
      cart?.value?.reduce((acc, cur) => acc + cur.quantity, 0)
  );

  function addToCart(product) {
    if (!cart.value.length) return (cart.value = [{ ...product, quantity: 1 }]);
    const itemExists = cart.value?.find(
      (cartItem) => cartItem.id === product.id
    );

    console.log('cartLength', cartLength.value);

    console.log('itemExists', itemExists);
    if (!itemExists)
      return (cart.value = [...cart.value, { ...product, quantity: 1 }]);

    cart.value = cart.value?.map((cartItem) =>
      cartItem.id === itemExists.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  function removeCart(id) {
    const item = cart.value.find((cartItem) => cartItem.id === id);

    if (item.quantity === 1)
      return (cart.value = cart.value.filter((cartItem) => cartItem.id !== id));

    cart.value = cart.value.map((cartItem) =>
      cartItem.id === id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  onMounted(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cart.value = cartItems;
  });

  watch(
    cart,
    (val) => {
      localStorage.setItem('cart', JSON.stringify(val));
    },
    { deep: true }
  );

  return { cart, cartLength, addToCart, removeCart };
}
