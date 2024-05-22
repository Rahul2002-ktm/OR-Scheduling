const express = require("express");
const { spawn } = require("child_process");
const { resolve } = require("path");
const { rejects } = require("assert");
const app = express();

const executePython = async (script, args) => {
  const argument = args.map((arg) => arg.toString());
  const py = spawn("python", [script, ...argument]);

  const result = await new Promise((resolve, reject) => {
    let output;
    // get the output from the python file
    py.stdout.on("data", (data) => {
      output = JSON.parse(data);
    });
    // Handle errors
    py.stderr.on("data", (data) => {
      console.error(`[python] Error Occured: ${data}`);
      reject(`Error occured in ${script}`);
    });

    py.on("exit", (code) => {
      console.log(`Chile process exited with code $(code)`);
      resolve(output);
    });
  });
  return result;
};

module.exports = executePython;
