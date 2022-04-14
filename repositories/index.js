import HomeRepo from "./HomeRepo";
import CategoryRepo from "./CategoryRepo";

export default ($axios) => ({
  home: HomeRepo($axios),
  category: CategoryRepo($axios)
})
