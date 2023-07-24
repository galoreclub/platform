require("dotenv").config()
const express= require('express')
const User= require('./models/user')
const bcrypt=require('bcryptjs');
const app =express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("<h1>Hello from auth system</h1>")
})

app.post("/register", (req,res)=> {
    const {firstName,lastName,email,password}= res.body;

    if(!(email && password && firstName && lastName)){
        res.status(400).send('All fields are required')
    }

    const existingUser = User.findOne({email})

    if(existingUser){
        res.status(401).send("User already exists")
    }

    const myEncryptpassword=bcrypt.hash(password ,10);

    const user= User.create({
        firstName,
        lastName,
        email:email.toLowercase(),
        password:myEncryptpassword,
    })
})
 
module.exports=app; 