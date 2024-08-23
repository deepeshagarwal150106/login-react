import "../css/LoginForm.css";
import { useState,useEffect } from "react";
import axios from "axios";
function LoginForm(){
  const [show,setShow] = useState(false);
  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [res,setRes] = useState(null);
  useEffect(
    ()=>{
        setTimeout(()=>{setShow(true);},1000);
    },
    []
);
    return (
        <form 
            className={`loginForm h-1/2 w-2/5 border border-black rounded-xl flex flex-col justify-evenly items-center bg-rose-100 loginPage ${show?"show":"notShow"}`}
            
        >
            <div className="flex flex-col justify-around items-center w-full h-3/5">
                 <input placeholder=" name" type="text" name="name" className={`h-8 w-4/5 border border-black rounded`} value={name} onChange={(e)=>{setName(e.target.value);}} required></input>
                 <input placeholder=" phoneNo" type="text" name="phone" className="h-8 w-4/5 border border-black rounded"  maxLength={10} minLength={10} value={phone} onChange={(e)=>{setPhone(e.target.value);}} pattern="^\d{0,10}$" required></input>
            </div>
            <div className="w-4/5 flex justify-between items-center">
                <button className="h-8 w-2/5 bg-rose-300 rounded flex justify-center items-center" 
                        onClick={
                            async (e)=>{
                                e.preventDefault();
                                try{
                                    const ress = await axios.post("http://localhost:5000/register",{name:name,phone:phone});
                                    setRes(ress.data);
                                }
                                catch(err){
                                    console.log(err);
                                }
                            }
                        }
                >Register</button>
                <button className="h-8 w-2/5 bg-rose-300 rounded flex justify-center items-center" 
                        onClick={
                            async (e)=>{
                                e.preventDefault();
                                try{
                                    const ress = await axios.post("http://localhost:5000/login",{name:name,phone:phone});
                                    setRes(ress.data);
                                }
                                catch(err){
                                    console.log(err);
                                }
                            }
                        }
                >Login</button>
            </div>
        </form>
    )
}
export default LoginForm