import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSubCategory } from "../../features/sub category/subCategory";
import { getBrands } from "../../features/brands/brands";

const AddProduct = () => {
  const dispatch = useDispatch();
  const dataSub = useSelector((state) => state.subCategory.data);
  const dataBrand = useSelector((state) => state.brand.data);

  useEffect(() => {
    dispatch(getSubCategory());
    dispatch(getBrands());
  }, [dispatch]);
  return (
    <div>
      <section className="flex items-center justify-between">
        <h2 className="text-3xl flex gap-4 items-center font-bold">
          {
            <Link to={"/dashboard/products"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </Link>
          }{" "}
          Products / Add new
        </h2>
        <Link to={"/dashboard/products"}>
          <button className="border-1 py-2 px-7 rounded-[5px] border-blue-600 text-blue-600 cursor-pointer">
            Concel
          </button>
        </Link>
      </section>
      <section className="my-10">
        <aside className="w-[60%]">
          <h2 className="text-xl font-bold">Information</h2>
          <div className="flex my-3 justify-between">
            <input
              className="w-[65%] border-1 py-2 px-3 rounded-[5px] outline-0"
              type="text"
              placeholder="Product name"
            />
            <input
              className="border-1 py-2 px-3 rounded-[5px] outline-0"
              type="text"
              placeholder="Code"
            />
          </div>
          <textarea
            className="w-[100%] border-1 h-[200px] py-2 px-3 rounded-[5px] resize-none"
            placeholder="Description"
          ></textarea>
          <section className="my-5 flex justify-between items-center">
            <select className="py-2 px-3 outline-0 rounded-[5px] w-[47%] border-1">
              {dataSub?.map((e) => {
                return (
                  <option className="text-black" key={e.id} value={`${e.id}`}>
                    {e.subCategoryName}
                  </option>
                );
              })}
            </select>
            <select className="py-2 px-3 outline-0 rounded-[5px] w-[47%] border-1">
              {dataBrand?.map((e) => {
                return (
                  <option className="text-black" key={e.id} value={`${e.id}`}>
                    {e.brandName}
                  </option>
                );
              })}
            </select>
          </section>
          <section>
            <h2 className="text-xl font-bold">Price</h2>
            <div className="flex justify-between items-center my-2">
              <input
                type="number"
                className="py-2 px-2 border-1 rounded-[5px] outline-0"
                placeholder="Product price"
              />
              <input
                type="number"
                className="py-2 px-2 border-1 rounded-[5px] outline-0"
                placeholder="Discount price"
              />
              <input
                type="number"
                className="py-2 px-2 border-1 rounded-[5px] outline-0"
                placeholder="Count"
              />
            </div>
            <div className="flex justify-between items-center my-4">
              <aside>
                <h2 className="text-xl font-bold">Different Options</h2>
                <p>This product has multiple options</p>
              </aside>
              <input type="checkbox" className="size-5" />
            </div>
          </section>
          <section className="my-5">
            <h2 className="text-xl font-bold">Options</h2>
            <div className="flex gap-6 my-3">
              <fieldset className="border-1 p-3 rounded-[5px] w-[40%]">
                <legend className="px-2">Option 1</legend>
                <h2 className="text-xl">Size</h2>
              </fieldset>
              <fieldset className="border-1 p-3 rounded-[5px] w-[17%]">
                <legend className="px-2">Value</legend>
                <select className="py-2 px-3 outline-0 rounded-[5px]">
                  <option className="text-black" value="S">S</option>
                  <option className="text-black" value="M">M</option>
                  <option className="text-black" value="L">L</option>
                  <option className="text-black" value="XL">XL</option>
                  <option className="text-black" value="XXL">XXL</option>
                </select>
              </fieldset>
            </div>
            <div className="flex gap-6 my-3">
              <fieldset className="border-1 p-3 rounded-[5px] w-[40%]">
                <legend className="px-2">Option 2</legend>
                <h2 className="text-xl">Weight</h2>
              </fieldset>
              <fieldset className="border-1 p-3 rounded-[5px] w-[17%]">
                <legend className="px-2">Value</legend>
                <select className="py-2 px-3 outline-0 rounded-[5px]">
                  <option className="text-black" value="10">10</option>
                  <option className="text-black" value="20">20</option>
                  <option className="text-black" value="30">30</option>
                  <option className="text-black" value="40">40</option>
                  <option className="text-black" value="50">50</option>
                </select>
              </fieldset>
            </div>
          </section>
        </aside>
        <aside></aside>
      </section>
    </div>
  );
};

export default AddProduct;
