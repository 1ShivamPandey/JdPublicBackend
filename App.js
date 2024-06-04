const express = require('express')
const app = express();

const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path")
const { MongoClient } = require("mongodb");
const connectDB = require("./config/db")
const Dashboard = require("./routes/Dashboard")
const DashboardPDF = require("./routes/DashboardPDF")
const MandatoryDisclosure = require("./routes/MandatoryDisclosure")
const Youtube = require("./routes/youtube")
const SchoolActivities = require("./routes/SchoolActivities")
const SchoolAdventure = require("./routes/SchoolAdventure")


dotenv.config();
connectDB();
app.use(express.json());
app.use(express.static("public"));

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors());

app.use("/api/Dashboard",Dashboard);
app.use("/api/Dashboard/PDF",DashboardPDF);
app.use("/api/Dashboard/MandatoryDisclosure",MandatoryDisclosure);
app.use("/api/Dashboard/youtube",Youtube);
app.use("/api/Dashboard/school",SchoolActivities);
app.use("/api/Dashboard/school",SchoolAdventure);



app.get("/",(req,res)=>{
res.send("Hey ")
//res.send("bro")
})

app.use("/GalleryImages", express.static(path.join(__dirname, "GalleryImages")));
app.use("/ExaminationDatesheet", express.static(path.join(__dirname, "ExaminationDatesheet")));
app.use("/MandatoryDisclosure", express.static(path.join(__dirname, "MandatoryDisclosure")));
app.use("/SchoolActivities", express.static(path.join(__dirname, "SchoolActivities")));
app.use("/SchoolAdventure", express.static(path.join(__dirname, "SchoolAdventure")));


app.use(express.urlencoded({ extended: false }));

app.listen(5000,console.log('The port is 5000'));