export const getAllProductData = async () => {
  const response = await fetch(`https://fakeapi.net/products`);
  const json = await response.json();
  return json.data();
};
