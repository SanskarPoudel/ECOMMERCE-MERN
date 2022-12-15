import React from "react";
import {
  FaPhone,
  FaPrint,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaGoogle,
  FaGithub,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start  ">
        <section className="d-flex justify-content-center align-items-center p-4 border-bottom">
          <div className=" pb-2 me-5 d-none d-lg-block">
            <span>Get connected with us on social networks :</span>
          </div>

          <div className="social-media-icons px-2">
            <Link to className="px-2">
              <FaFacebook />
            </Link>

            <Link to className="px-2">
              <FaGoogle />
            </Link>
            <Link to className="px-2">
              <FaInstagram />
            </Link>
            <Link to className="px-2">
              <FaLinkedinIn />
            </Link>
            <Link to className="px-2">
              <FaGithub />
            </Link>
          </div>
        </section>

        <section className>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />
                  E-Commerce
                </h6>
                <p className="text-muted">
                  "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit..."
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto  mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Company</h6>
                <p>
                  <Link to="/about" className="text-muted">
                    About us
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-muted">
                    Service
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-muted">
                    Case Studies
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-muted">
                    Blog
                  </Link>
                </p>
                <p>
                  <Link to="/contact" className="text-muted">
                    Contact
                  </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Account</h6>
                <p>
                  <Link to="/login" className="text-muted">
                    Login
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-muted">
                    View Cart
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-muted">
                    My Wishlist
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-muted">
                    Track My Order
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <FaHome /> Pokhara, Nepal
                </p>
                <p>
                  <FaEnvelope className="mr-1 " />
                  ecomnp@gmail.com
                </p>
                <p>
                  <FaPhone /> + 01 234 567 88
                </p>
                <p>
                  <FaPrint /> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4 border-top">
          © 2022 Copyright: Sanskar Paudel
        </div>
      </footer>
    </div>
  );
}
