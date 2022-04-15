export default {
  async getProducts({commit}) {
    let product = await this.$repositories.product.getProducts(4);
    commit('setProducts', product);
  }
}
