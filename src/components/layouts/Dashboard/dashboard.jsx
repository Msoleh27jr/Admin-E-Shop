import { extendTheme } from "@mui/material";
import { AppProvider, DashboardLayout, PageContainer } from "@toolpad/core";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NAVIGATION = [
  { kind: "header", title: "Main items" },
  { segment: "dashboard", title: "Dasboard", icon: <DashboardIcon /> },
  { segment: "dashboard/orders", title: "Orders", icon: <ShoppingCartIcon /> },
  { segment: "dashboard/products", title: "Products", icon: <LayersIcon /> },
  { segment: "dashboard/other", title: "Other", icon: <BarChartIcon /> },
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
