import { configureStore } from '@reduxjs/toolkit'
import Products from '../../features/product/product'
import Category from '../../features/category/catergory'
import Brand from '../../features/brands/brands'
import SubCategory from '../../features/sub category/subCategory'

export default configureStore({
  reducer: {
    product : Products ,
    category : Category ,
    brand : Brand ,
    subCategory : SubCategory
  }
})