import { extendTheme } from "@mui/material";
import { AppProvider, DashboardLayout, PageContainer } from "@toolpad/core";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logo from "../../../pages/login/img/Group 1116606595 (1).png";

const NAVIGATION = [
  { kind: "header", title: "Main items" },
  { segment: "dashboard", title: "Dasboard", icon: <DashboardIcon /> },
  { segment: "dashboard/orders", title: "Orders", icon: <ShoppingCartIcon /> },
  { segment: "dashboard/products", title: "Products", icon: <LayersIcon /> },
  { segment: "dashboard/other", title: "Other", icon: <BarChartIcon /> },
  {
    kind: "/",
    title: (
      <button
        className="cursor-pointer"
        onClick={() => {
          localStorage.removeItem("Admin");
          window.location = "/";
        }}
      >
        Logout
      </button>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        onClick={() => {
          localStorage.removeItem("Admin");
          window.location = "/";
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
        />
      </svg>
    ),
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter() {
  const location = useLocation();
  const navigate = useNavigate();

  return {
    pathname: location.pathname,
    searchParams: new URLSearchParams(location.search),
    navigate,
  };
}

const Dashbord = () => {
  const navigate = useNavigate();
  const router = useDemoRouter("/dashboard");

  const demoWindow = typeof window !== "undefined" ? window : undefined;
  useEffect(() => {
    const token = localStorage.getItem("Admin");
    if (!token) navigate("/");
    console.log(token);
  }, [navigate]);
  return (
    <AppProvider
      branding={{
        logo: <img src={logo} />,
        title: "",
      }}
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
};

export default Dashbord;
