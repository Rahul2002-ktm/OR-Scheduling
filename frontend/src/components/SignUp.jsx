import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  const [city, setCity] = useState();
  const [phoneno, setPhoneNo] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", {
        name,
        email,
        password,
        city,
        phoneno,
      })
      .then((result) => {
        console.log(result);
        navigate("/SignIn");
        alert("Account Successful Created");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="container about-us">
        <div className="row">
          <div className="col-md-6">
            <h1>About Us</h1>
            <p>
              <h2>Thanks for choosing us.</h2>We are dedicated to providing
              top-notch healthcare services to our patients. Our operation rooms
              are equipped with state-of-the-art facilities and our team of
              experienced surgeons ensure safe and successful surgeries. If you
              have any questions or comments, please don't hesitate to contact
              us.
            </p>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h1 className="text-center mt-5">Register Account</h1>

                <form
                  onSubmit={handleSubmit}
                  method="post"
                  className="mt-5 p-3"
                >
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      name="fullname"
                      placeholder="Full Name"
                      className="form-control"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          className="form-control"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-12 col-md-6 ">
                      <div className="form-group">
                        <input
                          type="password"
                          name="confirm-password"
                          placeholder="Confirm Password"
                          className="form-control"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="form-group">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        className="form-control"
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <input
                      type="number"
                      name="phone_number"
                      placeholder="Phone Number"
                      className="form-control"
                      onChange={(e) => setPhoneNo(e.target.value)}
                    />
                  </div>

                  <div className="form-group text-center mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={password !== confirmpassword}
                    >
                      Register
                    </button>
                  </div>
                </form>
                <div className="text-center mt-4">
                  Already a Member? <Link to="/SignIn">Sign in</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
