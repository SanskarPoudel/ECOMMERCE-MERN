import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail((_) => {
      return event.target.value;
    });
  };
  const handlePassword = (event) => {
    setPassword((_) => {
      return event.target.value;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let loginObj = {
      email: email,
      password: password,
    };
    console.log(loginObj);
  };
  return (
    <div>
      <section className="vh-100 py-5" style={{ backgroundColor: "#eee" }}>
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className=" card col-md-8 col-lg-6 col-xl-4 p-4 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">
                    <b>Login in</b> with
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-2"
                  >
                    <FaFacebook />
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <FaTwitter />
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <FaLinkedin />
                  </button>
                </div>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    value={email}
                    onChange={handleEmail}
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    value={password}
                    onChange={handlePassword}
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="/signup" className="link-danger">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
