import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/SignIn", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data == "Sucess") {
          navigate("/Home");
          alert("Login successful");
        } else {
          alert("Please enter a valid email and password");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container about-us">
      <div className="row">
        <div className="col-md-6">
          <h1>About Us</h1>
          <p>
            <h2>Thanks for choosing us.</h2>We are dedicated to providing
            top-notch healthcare services to our patients. Our operation rooms
            are equipped with state-of-the-art facilities and our team of
            experienced surgeons ensure safe and successful surgeries. If you
            have any questions or comments, please don't hesitate to contact us.
          </p>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center mt-5">Sign in</h1>
              <form onSubmit={handleSubmit} method="post" className="mt-5 p-3">
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div
                  className="form-group"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </form>
              <div className="col-12 text-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Sign In
                </button>
              </div>
              <div className="text-center mt-4">
                {" "}
                Not a Member Yet <Link to="/SignUp"> Register </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
