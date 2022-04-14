export default ($axios) => ({
  getCategory() {
    return $axios.get('category')
  }
})
