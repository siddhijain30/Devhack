const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views" , path.join(__dirname, "/views"));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("hello");
});

let port = 8080;
app.listen(port ,()=>{
    console.log(`app listening on port ${port}`);
});

