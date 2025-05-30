import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { toast } from "react-toastify";
export const API = import.meta.env.VITE_API_URL;

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id) => {
    try {
      let { data } = await axios.get(
        `${API}/Product/get-product-by-id?id=${id}`
      );
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getColor = createAsyncThunk("product/getColor", async () => {
  try {
    let { data } = await axios.get(`${API}/Color/get-colors`);
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

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
  async (id) => {
    let token = localStorage.getItem("Admin");
    try {
      await axios.delete(`${API}/Product/delete-product?id=${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Sub Category removed Successfully", { autoClose: 1000 });
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
    // const navigate = useNavigate()
    try {
      await axios.post(`${API}/Product/add-product`, elem, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast("Added Successfully", { autoClose: 2000 });
      // navigate("/dashboard/products")
      dispatch(getProduct());
    } catch (error) {
      toast.error("Here Something Wrong !!!", { autoClose: 2000 });
      console.error(error);
    }
  }
);

export const deleteImage = createAsyncThunk(
  "product/deleteImage",
  async (id) => {
    let token = localStorage.getItem("Admin");
    try {
      await axios.delete(
        `${API}/Product/delete-image-from-product?imageId=${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast("Deleted Successfully", { autoClose: 2000 });
    } catch (error) {
      console.error(error);
    }
  }
);

export const addImages = createAsyncThunk(
  "product/addImages",
  async (files) => {
    let token = localStorage.getItem("Admin");
    try {
      await axios.post(`${API}/Product/add-image-to-product`, files, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast("Add Image Successfully", { autoClose: 2000 });
    } catch (error) {
      console.error(error);
    }
  }
);

export const editProduct = createAsyncThunk(
  "product/editProduct",
  async (pro, { dispatch }) => {
    let token = localStorage.getItem("Admin");
    try {
      await axios.put(
        `${API}/Product/update-product?Id=${pro.id}&BrandId=${pro.brand}&ColorId=${pro.color}&ProductName=${pro.namePro}&Description=${pro.disc}&Quantity=${pro.quentity}&Size=${pro.size}&Weight=${pro.weight}&Code=${pro.code}}&Price=${pro.price}&HasDiscount=${pro.stock}&DiscountPrice=${pro.discPrice}&SubCategoryId=${pro.sub}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast("Edit Product Successfully", { autoClose: 2000 });
      dispatch(getProduct());
    } catch (error) {
      console.error(error);
    }
  }
);

export const Products = createSlice({
  name: "product",
  initialState: {
    data: [],
    dataId: [],
    dataCol: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.dataId = action.payload;
    });
    builder.addCase(getColor.fulfilled, (state, action) => {
      state.dataCol = action.payload;
    });
  },
});

export default Products.reducer;
