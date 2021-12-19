const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const res = require("express/lib/response");

// bodyparser binded to app 
app.use(bodyParser.urlencoded({extended: true}));

// get data from the user
app.get("/", (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

// send data by user to the backend
app.post('/',(req, res)=>{ 
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("The result is " + result );
});

// get data input from the user & send back the html page
app.get("/bmiCalculator.html", (req, res)=>{
    res.sendFile(__dirname + "/bmiCalculator.html");
});

// calculate the code in backend and send back the result
app.post("/bmiCalculator.html", (req, res)=>{

    var weight = parseFloat(req.body.weightCalc)*2;
    var height = parseFloat(req.body.heightCalc);

    var bmiCalcResult = weight / (height * height);
    res.send("Your BMI is " + bmiCalcResult);
});



// start server on port 3000
app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
});