import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../product/product";
import { toast } from "react-toastify";

export const getCategory = createAsyncThunk(
  "category/getCategory",
  async () => {
    try {
      let { data } = await axios.get(`${API}/Category/get-categories`);
      toast.success("Category Get Successfully", { autoClose: 1000 });
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (id, { dispatch }) => {
    let token = localStorage.getItem("Admin");
    try {
      await axios.delete(`${API}/Category/delete-category?id=${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Brands removed Successfully", { autoClose: 1000 });
      dispatch(getCategory());
    } catch (error) {
      toast.error("Here Something Incorrect", { autoClose: 1000 });
      console.error(error);
    }
  }
);

export const addCategory = createAsyncThunk(
  "category/addCategory",
  async (category, { dispatch }) => {
    let token = localStorage.getItem("Admin");
    try {
      await axios.post(`${API}/Category/add-category`, category, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(getCategory());
      toast.success("Add Category Successfully", { autoClose: 1000 });
    } catch (error) {
      toast.error("Here Something Incorrect", { autoClose: 1000 });
      console.error(error);
    }
  }
);

export const editCategory = createAsyncThunk(
  "category/editCategory",
  async (elem , {dispatch}) => {
    let token = localStorage.getItem("Admin");
    try {
      await axios.put(`${API}/Category/update-category`, elem, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Edit Category Successfully", { autoClose: 1000 });
      dispatch(getCategory())
    } catch (error) {
      console.error(error);
      toast.error("Here Something Incorrect", { autoClose: 1000 });
    }
  }
);

export const Category = createSlice({
  name: "category",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default Category.reducer;
