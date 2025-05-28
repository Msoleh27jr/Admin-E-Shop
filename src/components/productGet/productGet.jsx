import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API, getProduct } from "../../features/product/product";
import { Link } from "react-router-dom";

const paginationModel = { page: 0, pageSize: 5 };

const ProductGet = () => {
  const data = useSelector((state) => state.product.data);
  const columns = [
    {
      field: "image",
      headerName: "Product",
      width: 100,
      renderCell: (params) => (
        <img
          src={`${API}/images/${params.value}`}
          alt="product"
          style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 8 }}
        />
      ),
    },
    { field: "id", headerName: "Product", width: 300 },
    { field: "firstName", headerName: "Inventory", width: 200 },
    { field: "lastName", headerName: "Category", width: 200 },
    { field: "Payment", headerName: "Price", width: 150 },
    {
      field: "Order",
      headerName: "Action",
      width: 150,
      sortable: false,
      renderCell: (id) => (
        <div className="flex items-center my-3 gap-5" title="">
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log(id.value);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 text-blue-600 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log(id.value);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 text-red-600 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  const rows = [];
  const dispatch = useDispatch();
  {
    data?.products?.map((e) => {
      return rows.push({
        image: e.image,
        id: e.productName,
        firstName: `In Stock ${e.quantity}`,
        lastName: e.categoryName,
        Payment: `$${e.price}`,
        Order: e.id,
      });
    });
  }

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <div className="relative">
      <Link to={'/dashboard/addProduct'}>
        <button className="absolute right-0 top-[-70px] py-2 bg-blue-600 px-5 rounded-[5px]">
          + Add Order
        </button>
      </Link>
      <section className="flex justify-between md:flex-row flex-col gap-5 my-7">
        <div className="flex items-center gap-5">
          <div className="flex items-center border-1 border-gray-600 p-2 md:w-[250px] rounded-[5px] h-[50px]">
            <input type="text" placeholder="Search..." className="outline-0" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <fieldset className="border-1 p-2 border-gray-600 rounded-[5px]">
            <legend className="text-[13px] px-1">Filter</legend>
            <select className="outline-0">
              <option value="Newest">Newest</option>
              <option value="Newest">Newest</option>
              <option value="Newest">Newest</option>
              <option value="Newest">Newest</option>
            </select>
          </fieldset>
        </div>
        <div className="flex items-center gap-3 md:justify-start justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </div>
      </section>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[1, 2]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
};

export default ProductGet;
