export default defineEventHandler(async (event) => {
  const res = await fetch('https://dummyjson.com/products?limit=4');
  const data = await res.json();

  return data.products;
});
