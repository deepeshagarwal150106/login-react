onLogin = async (e,name,phone,setRes)=>{
    e.preventDefault();
    try{
        const ress = await axios.post("http://localhost:5000/login",{name:name,phone:phone});
        setRes(ress.data);
    }
    catch(err){
        console.log(err);
    }
}
export default onLogin;
