import ReactApexChart from "react-apexcharts";
import muibox from "./img/div.MuiBox-root.png";
import cost from "./img/iconly-glass-discount.svg.png";
import profit from "./img/div.MuiBox-root (1).png";
import BestSell from "../../components/bestSellingBox/bestSell";
import Resent from "../../components/resentSale/resent";
import Product from "../../components/topProduct/product";

const options = {
  chart: { type: "line" },
  tooltip: { theme: "dark" },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
};

const series = [
  { name: "Orders", data: [10, 4, 16, 21, 15, 31, 20, 8, 5, 30, 10] },
];

const Dashboard = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between md:gap-0 gap-5">
        <section className="md:w-[60%]">
          <div className="flex justify-between md:flex-row flex-col">
            <div className="md:w-[30%] h-[100px] rounded-[5px] my-5 bg-[#FEF3F2] p-5 flex items-center justify-around text-black">
              <img src={muibox} alt="" />
              <aside>
                <p>Sales</p>
                <h2 className="text-3xl font-bold">$152k</h2>
              </aside>
            </div>
            <div className="md:w-[30%] h-[100px] rounded-[5px] my-5 bg-[#FFFAEB] p-5 flex items-center justify-around text-black">
              <img src={cost} alt="" />
              <aside>
                <p>Cost</p>
                <h2 className="text-3xl font-bold">$99.7k</h2>
              </aside>
            </div>
            <div className="md:w-[30%] h-[100px] rounded-[5px] my-5 bg-[#F0FDF9] p-5 flex items-center justify-around text-black">
              <img src={profit} alt="" />
              <aside>
                <p>Profit</p>
                <h2 className="text-3xl font-bold">$32.1k</h2>
              </aside>
            </div>
          </div>
          <div className="rounded-[5px] border-1 p-5">
            <h2 className="text-2xl font-bold">Sales Revenue</h2>
            <ReactApexChart
              options={options}
              series={series}
              type="line"
              height={350}
            />
          </div>
        </section>
        <section className="border-1 rounded-[5px] p-5 md:w-[35%]">
          <div className="flex justify-between">
            <h2 className="font-bold">Top selling products See All</h2>
            <p>See All</p>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <BestSell />
            <BestSell />
            <BestSell />
            <BestSell />
            <BestSell />
            <BestSell />
            <BestSell />
          </div>
        </section>
      </div>
      <section className="mt-5 flex justify-between md:flex-row flex-col md:gap-0 gap-5">
        <div className="p-5 border-1 md:w-[50%] rounded-[5px]">
          <h3 className="text-xl font-bold">Recent Transactions</h3>
          <table className="w-[100%]">
            <thead className="border-b-1">
              <tr>
                <th className="py-2 text-start">Name</th>
                <th className="py-2 text-start">Date</th>
                <th className="py-2 text-start">Amount</th>
                <th className="py-2 text-start">Status</th>
              </tr>
            </thead>
            <tbody>
              <Resent
                names={"Jagarnath S."}
                date={"24.05.2023"}
                price={"$124.97"}
                paid={"Paid"}
              />
              <Resent
                names={"Anand G."}
                date={"23.05.2023"}
                price={"$55.42"}
                paid={"Pending"}
              />
              <Resent
                names={"Kartik S."}
                date={"23.05.2023"}
                price={"$89.90"}
                paid={"Paid"}
              />
              <Resent
                names={"Rakesh S."}
                date={"22.05.2023"}
                price={"$144.94"}
                paid={"Pending"}
              />
              <Resent
                names={"Anup S."}
                date={"22.05.2023"}
                price={"$70.52"}
                paid={"Paid"}
              />
              <Resent
                names={"Jimmy P."}
                date={"22.05.2023"}
                price={"$70.52"}
                paid={"Paid"}
              />
            </tbody>
          </table>
        </div>
        <div className="md:w-[45%] p-5 border-1 rounded-[5px]">
          <h3 className="text-xl font-bold">Top Products by Units Sold</h3>
          <table className="w-[100%]">
            <thead className="border-b-1">
              <tr>
                <th className="py-2 text-start">Name</th>
                <th className="py-2 text-start">Price</th>
                <th className="py-2 text-start">Units</th>
              </tr>
            </thead>
            <tbody>
              <Product names={"Men Grey Hoodie"} price={'$49.90'} unit={'204'}/>
              <Product names={"Women Striped T-Shirt"} price={'$34.90'} unit={'155'}/>
              <Product names={"Wome White T-Shirt"} price={'$40.90'} unit={'120'}/>
              <Product names={"Wome White T-Shirt"} price={'$40.90'} unit={'120'}/>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
