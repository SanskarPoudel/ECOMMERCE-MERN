import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(undefined);
  const [errorData, setErrorData] = useState({});
  const handleName = (event) => {
    const fullName = event.target.value;
    setName((_) => {
      return fullName;
    });
  };
  const handleEmail = (event) => {
    const email = event.target.value;
    setEmail((_) => {
      return email;
    });
  };
  const handlePassword = (event) => {
    const password = event.target.value;
    setPassword((_) => {
      return password;
    });
  };
  const handleCheckbox = (event) => {
    const checkedValue = event.target.checked;
    setIsChecked((_) => {
      return checkedValue;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let userObj = {
      name: name,
      email: email,
      password: password,
      termsChecked: isChecked,
    };
    fetch("http://localhost:8000/api/v1/signup", {
      method: "POST",
      body: JSON.stringify(userObj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setErrorData(data))
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(errorData);
  return (
    <div>
      <section className="vh-100 pt-2 pb-4" style={{ background: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "10px" }}>
                <div className="card-body p-md-2">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="user-icon mr-2 mb-4">
                            {<FaUser size={25} />}
                          </div>

                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="name"
                              className="form-control"
                              value={name}
                              onChange={handleName}
                            />
                            <label className="form-label" htmlFor="name">
                              Your Name
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="user-icon mr-2 mb-4">
                            {<MdEmail size={25} />}
                          </div>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="email"
                              className="form-control"
                              value={email}
                              onChange={handleEmail}
                            />
                            <label className="form-label" htmlFor="email">
                              Your Email
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="user-icon mr-2 mb-4">
                            {<FaLock size={25} />}
                          </div>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              className="form-control"
                              value={password}
                              onChange={handlePassword}
                            />
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="form-check d-flex  mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            onChange={handleCheckbox}
                            id="checkbox"
                            value={isChecked}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        {errorData.email && (
                          <div class="alert alert-warning" role="alert">
                            {errorData.email}
                          </div>
                        )}
                        {errorData.password && (
                          <div class="alert alert-warning" role="alert">
                            {errorData.password}
                          </div>
                        )}
                        {errorData.termsChecked && (
                          <div class="alert alert-warning" role="alert">
                            {errorData.termsChecked}
                          </div>
                        )}
                        <div className="d-flex flex-column justify-content-center align-items-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg px-4"
                          >
                            Register
                          </button>
                          <p className="small fw-bold mt-2 pt-1 mb-0">
                            Already have an Account?
                            <Link to="/login" className="link-danger pl-1">
                              Login
                            </Link>
                          </p>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        alt="signup img"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
