import logo from "../../assets/LandingPage/CleanicLogo.svg";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";

function footer() {
  return (
    <div class="" style={{backgroundColor:"#E2F3F0"}}>
      <footer class="py-5">
        <div class="row">
          <div class="col-6 col-md-2 mb-3">
            <h4 style={{ color: "#001726" }}>
              QUICK <span style={{ color: "#0071BC" }}>LINK</span>
            </h4>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <Link to="/" class="nav-link p-0 text-dark">
                  Home
                </Link>
              </li>
              <li class="nav-item mb-2">
                <Link href="#" class="nav-link p-0 text-dark">
                  About
                </Link>
              </li>
              <li class="nav-item mb-2">
                <Link href="#" class="nav-link p-0 text-dark">
                  Services
                </Link>
              </li>
              <li class="nav-item mb-2">
                <Link href="#" class="nav-link p-0 text-dark">
                  Download
                </Link>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <h4 style={{ color: "#001726" }}>
              CONTACT <span style={{ color: "#0071BC" }}>US</span>
            </h4>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <Link href="#" class="nav-link p-0 text-dark">
                  Home
                </Link>
              </li>
              <li class="nav-item mb-2">
                <Link href="#" class="nav-link p-0 text-dark">
                  Features
                </Link>
              </li>
              <li class="nav-item mb-2">
                <Link href="#" class="nav-link p-0 text-dark">
                  Pricing
                </Link>
              </li>
              <li class="nav-item mb-2">
                <Link href="#" class="nav-link p-0 text-dark">
                  FAQs
                </Link>
              </li>
              <li class="nav-item mb-2">
                <Link href="#" class="nav-link p-0 text-dark">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div class="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                ></input>
                <button class="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 ">
          <p>© 2022 Company, Inc. All rights reserved.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3">
              <Link class="link-dark" href="#">
                <svg class="bi" width="24" height="24">
                  <use href="#twitter"></use>
                </svg>
              </Link>
            </li>
            <li class="ms-3">
              <Link class="link-dark" href="#">
                <svg class="bi" width="24" height="24">
                  <use href="#instagram"></use>
                </svg>
              </Link>
            </li>
            <li class="ms-3">
              <Link class="link-dark" href="#">
                <svg class="bi" width="24" height="24">
                  <use href="#facebook"></use>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default footer;
