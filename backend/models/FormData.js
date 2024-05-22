const mongoose = require("mongoose");

const FormDataSchema = new mongoose.Schema({
  surgeriesWaiting: Number,
  maxOperatingTimeSurgeon: Number,
  operatingDuration: Number,
  deadline: String,
  sumOperatingTimesSurgeon: Number,
  operatingRoomsAvailable: Number,
  regOpeningTime: String,
  maxPermissibleOvertime: Number,
  sumOfOperatingTimes: Number,
  operatingCost: Number,
  costRatio: Number,
  noOfDays: Number,
  numberOfSurgeons: Number,
  noOfPopulation: Number,
  maxNoOfExploration: Number,
  maxNoOfEliteSolutions: Number,
  MaxNoOfIteration: Number,
});

const FormDataModel = mongoose.model("FormData", FormDataSchema);
module.exports = FormDataModel;
