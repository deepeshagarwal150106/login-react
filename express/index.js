const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;
const path = require('path');
const methodOverride = require('method-override');


main()
.then(()=>{console.log("Connected to database")})
.catch((err)=>{console.log(err)});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/sih",{useNewUrlParser:true,useUnifiedTopology:true});
}


app.use(cors());
app.use(express.json());
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"public")));



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/login', (req, res) => {
        let {name,phone} = req.body;
    }
);

app.post("/register",(req,res)=>{
        let {name,phone} = req.body;
    }    
);
