onRegister = async (e)=>{
    e.preventDefault();
    try{
        const ress = await axios.post("http://localhost:5000/register",{name:name,phone:phone});
        setRes(ress.data);
    }
    catch(err){
        console.log(err);
    }
    
}
export default onRegister;