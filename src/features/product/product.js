import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
export const API = import.meta.env.VITE_API_URL;

export const getProduct = createAsyncThunk("product/getProduct", async () => {
  try {
    let { data } = await axios.get(`${API}/Product/get-products`);
    toast.success("Products Get Successfully" , {autoClose : 1000});
    return data.data;
  } catch (error) {
    console.error(error);
    toast.error("Here Something Wrong !!!" , {autoClose : 2000});
  }
});

export const Products = createSlice({
  name: "product",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default Products.reducer;
