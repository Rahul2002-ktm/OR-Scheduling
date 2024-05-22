const express = require("express"); // framework of node js
const mongoose = require("mongoose"); // use to connect with mongo database
const cors = require("cors"); // used to access backend side to the frontend-side
// nodemon - refresh our server whenever there is a change
const EmployeeModel = require("./models/Employee");
const FormDataModel = require("./models/FormData");
const executePython = require("./algorithm.js");

const app = express();
app.use(express.json()); //tranfer frontend data to backend in json format
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post("/SignIn", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Sucess");
        } else {
          res.json("the password is incorrect");
        }
      } else {
        res.json("No record existed");
      }
    })
    .catch((err) => res.json(err));
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is  running ");
});

app.post("/handleForm", async (req, res) => {
  try {
    const data = await FormDataModel.create(req.body);
    res.json("Success");
  } catch (err) {
    res.json(err);
  }
});

app.get("/Home/algorithm", async (req, res) => {
  try {
    // I want to divide a by b
    const data = await FormDataModel.findOne();
    const result = await executePython("python/script.py", [
      data.noOfDays,
      data.surgeriesWaiting,
      data.numberOfSurgeons,
      data.MaxNoOfIteration,
    ]);
    res.json({ result: result });
    console.log(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.get("/admin", async (req, res) => {
  try {
    const data = await EmployeeModel.find();
    res.json({ data: data });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

