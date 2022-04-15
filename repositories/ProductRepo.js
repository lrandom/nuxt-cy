export default ($axios) => ({
  getProducts(categoryId) {
    return $axios.get('/products/category/' + categoryId);
  }
})
