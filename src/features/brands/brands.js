import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../product/product";
import { toast } from "react-toastify";

export const getBrands = createAsyncThunk("brand/getBrands", async () => {
  try {
    let { data } = await axios.get(`${API}/Brand/get-brands`);
    toast.success("Brands Get Successfully", { autoClose: 1000 });
    return data.data;
  } catch (error) {
    toast.error("Here Something Incorrect", { autoClose: 1000 });
    console.error(error);
  }
});

export const addBrand = createAsyncThunk(
  "brand/addBrand",
  async (nameBrand, { dispatch }) => {
    let token = localStorage.getItem("Admin");
    try {
      await axios.post(
        `${API}/Brand/add-brand?BrandName=${nameBrand}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(getBrands());
      toast.success("Add Brands Successfully", { autoClose: 1000 });
    } catch (error) {
      toast.error("Here Something Incorrect", { autoClose: 1000 });
      console.error(error);
    }
  }
);

export const deleteBrnad = createAsyncThunk(
  "brand/deleteBrand",
  async (id, { dispatch }) => {
    let token = localStorage.getItem("Admin");
    try {
      await axios.delete(`${API}/Brand/delete-brand?id=${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Brands removed Successfully", { autoClose: 1000 });
      dispatch(getBrands());
    } catch (error) {
      toast.error("Here Something Incorrect", { autoClose: 1000 });
      console.error(error);
    }
  }
);

export const Brand = createSlice({
  name: "brand",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default Brand.reducer;
