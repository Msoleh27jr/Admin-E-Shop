import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
export const API = import.meta.env.VITE_API_URL;

export const getProduct = createAsyncThunk("product/getProduct", async () => {
  try {
    let { data } = await axios.get(`${API}/Product/get-products`);
    toast.success("Products Get Successfully", { autoClose: 1000 });
    return data.data;
  } catch (error) {
    console.error(error);
    toast.error("Here Something Wrong !!!", { autoClose: 2000 });
  }
});

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, { dispatch }) => {
    let token = localStorage.getItem("Admin");
    try {
      await axios.delete(`${API}/Product/delete-product?id=${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Sub Category removed Successfully", { autoClose: 1000 });
      dispatch(getProduct());
    } catch (error) {
      toast.error("Here Something Incorrect", { autoClose: 1000 });
      console.error(error);
    }
  }
);

export const AddProducts = createAsyncThunk(
  "product/AddProduct",
  async (elem, { dispatch }) => {
    let token = localStorage.getItem("Admin");
    try {
      await axios.post(`${API}/Product/add-product`, elem, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Products Add Successfully", { autoClose: 1000 });
      dispatch(getProduct());
    } catch (error) {
      toast.error("Here Something Wrong !!!", { autoClose: 2000 });
      console.error(error);
    }
  }
);

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
