import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "id", headerName: "Order", width: 150 },
  { field: "firstName", headerName: "Date", width: 200 },
  { field: "lastName", headerName: "Customer", width: 200 },
  { field: "Payment", headerName: "Payment status", width: 200 },
  { field: "Order", headerName: "Order Status", width: 200 },
  {
    field: "age",
    headerName: "total",
    width: 90,
  },
];

const rows = [
  { id: "#12512B", lastName: "May 5, 4:20 PM", firstName: "Tom Anderson", Payment : 'Paid'  , Order : "Ready" ,  age: "$49.90" },
  { id: "#12512B", lastName: "May 5, 4:20 PM", firstName: "Tom Anderson", Payment : 'Paid'  , Order : "Ready" ,  age: "$49.90" },
  { id: "#12512B", lastName: "May 5, 4:20 PM", firstName: "Tom Anderson", Payment : 'Paid'  , Order : "Ready" ,  age: "$49.90" },
  { id: "#12512B", lastName: "May 5, 4:20 PM", firstName: "Tom Anderson", Payment : 'Paid'  , Order : "Ready" ,  age: "$49.90" },
  { id: "#12512B", lastName: "May 5, 4:20 PM", firstName: "Tom Anderson", Payment : 'Paid'  , Order : "Ready" ,  age: "$49.90" },
  { id: "#12512B", lastName: "May 5, 4:20 PM", firstName: "Tom Anderson", Payment : 'Paid'  , Order : "Ready" ,  age: "$49.90" },
  { id: "#12512B", lastName: "May 5, 4:20 PM", firstName: "Tom Anderson", Payment : 'Paid'  , Order : "Ready" ,  age: "$49.90" },
];

const paginationModel = { page: 0, pageSize: 5 };

const Order = () => {
  return (
    <div>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
};

export default Order;
