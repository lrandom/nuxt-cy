import HomeRepo from "./HomeRepo";
import CategoryRepo from "./CategoryRepo";
import ProductRepo from "./ProductRepo";
export default ($axios) => ({
  home: HomeRepo($axios),
  category: CategoryRepo($axios),
  product: ProductRepo($axios)
})
