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
    res.render("index.ejs");
});

app.get("/login", (req, res)=>{
    res.render("login.ejs");
});

app.get("/options", (req, res)=>{
    res.render("options.ejs");
});

app.get("/moodtracker", (req, res)=>{
    res.render("mood.ejs");
});

app.get("/help", (req, res)=>{
    res.render("help.ejs");
});

app.get("/community", (req, res)=>{
    res.render("community.ejs");
});

app.get("/counselling", (req, res)=>{
    res.render("counselling.ejs");
});

let port = 8080;
app.listen(port ,()=>{
    console.log(`app listening on port ${port}`);
});

