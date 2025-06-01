import { toast } from "react-toastify";
import Logo from "./img/Group 1116606595 (1).png";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../features/product/product";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  let token = localStorage.getItem("Admin")
  console.log(token);
  

  async function funAdmin() {
    let admin = {
      userName : name , 
      password : pass
    }
    try {
      const { data } = await axios.post(`${API}/Account/login` , admin);
      localStorage.setItem("Admin", data.data);
      toast.success("Login Successfully", { autoClose: 1000 });
      navigate('/dashboard')
    } catch (error) {
      console.error(error);
      toast.error("here is something wrong !!!", { autoClose: 1000 });
    }
  }
  useEffect(()=> {
    token != null ? navigate("/dashboard") : navigate("/") 
  } , [navigate , token])
  return (
    <div className="md:max-w-[1920px] m-auto md:flex-row flex-col flex items-center h-[100vh] md:gap-0 gap-5">
      <section className="md:w-[50%] w-[100%] md:h-[100%] p-10 bg-black flex md:flex-col flex-col-reverse items-start justify-center">
        <h2 className="text-white text-2xl">Welcome to admin panel</h2>
        <img className="w-[150px] md:w-[60%]" src={Logo} alt="" />
      </section>
      <section className="flex items-center justify-center md:w-[50%]">
        <div className="md:w-[70%] flex flex-col gap-5">
          <h2 className="text-3xl font-bold">Login</h2>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-[#E5E5E5] w-[100%] p-2 placeholder:text-xl rounded-[5px] outline-0 text-xl"
            type="text"
            placeholder="User Name"
          />
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="border-2 border-[#E5E5E5] w-[100%] p-2 placeholder:text-xl rounded-[5px] outline-0"
            type="password"
            placeholder="Password"
          />
          <div className="text-center">
            <button
              className="text-xl text-[#2563EB]"
              onClick={() =>
                toast.error("Maram namedonm !", { autoClose: 1000 })
              }
            >
              Forgot password?
            </button>
          </div>
          <button
            onClick={() => {
              funAdmin();
            }}
            className="text-2xl text-white bg-[#2563EB] w-[100%] py-2 rounded-[5px]"
          >
            Log in
          </button>
        </div>
      </section>
    </div>
  );
};

export default Login;
