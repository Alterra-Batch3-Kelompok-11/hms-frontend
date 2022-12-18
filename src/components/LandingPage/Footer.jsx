import logo from "../../assets/LandingPage/CleanicLogo.svg";
import LogoTelp from "../../assets/LandingPage/LogoTelp.svg";
import LogoMessage from "../../assets/LandingPage/LogoMessage.svg";
import IconFacebook from "../../assets/LandingPage/IconFacebook.svg";
import IconInstagram from "../../assets/LandingPage/IconInstagram.svg";
import IconTwitter from "../../assets/LandingPage/IconTwitter.svg";
import IconLinkedin from "../../assets/LandingPage/IconLinkedin.svg";
import Copyright from "../../assets/LandingPage/Copyright.svg";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";

function footer() {
  return (
    <div className="" style={{ backgroundColor: "#E2F3F0" }}>
      <footer className="py-5 container">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h4
              style={{
                color: "#001726",
                fontSize: "24px",
                marginBottom: "20px",
              }}
            >
              QUICK <span style={{ color: "#0071BC" }}>LINK</span>
            </h4>
            <ul className="nav flex-column" style={{ fontSize: "20px" }}>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-dark">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0 text-dark">
                  About
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0 text-dark">
                  Services
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0 text-dark">
                  Download
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3" style={{ width: "370px" }}>
            <h4 style={{ color: "#001726", marginBottom: "20px" }}>
              CONTACT <span style={{ color: "#0071BC" }}>US</span>
            </h4>
            <ul className="nav flex-column">
              <li
                className="nav-item mb-2"
                style={{ fontSize: "20px", color: "#001726" }}
              >
                Jalan Teuku Cik Ditiro 41 10310 Special Capital Region of
                Jakarta
              </li>
              <li
                className="nav-item mb-2 list-group list-group-horizontal"
                style={{ marginTop: "10px", marginLeft: "-5px" }}
              >
                <img src={LogoTelp} alt="img" />
                <p style={{ fontSize: "16px", margin: "20px 20px" }}>
                  (404) 899 - 886
                </p>
              </li>
              <li
                className="nav-item mb-2 list-group list-group-horizontal"
                style={{ marginTop: "-10px", marginLeft: "-5px" }}
              >
                <img src={LogoMessage} alt="img" />
                <p style={{ fontSize: "16px", margin: "20px 20px" }}>
                  malasngoding@gmail.com
                </p>
              </li>
              <li className="nav-item mb-2" style={{ marginLeft: "-20px" }}>
                <ul class="list-group list-group-horizontal ">
                  <li class="list-group-item bg-transparent border-0">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="Facebook.com"
                    >
                      <img src={IconFacebook} alt="img" />
                    </a>
                  </li>
                  <li class="list-group-item bg-transparent border-0">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/affannnn.ats/"
                    >
                      <img src={IconInstagram} alt="img" />
                    </a>
                  </li>
                  <li class="list-group-item bg-transparent border-0">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="Twitter.com"
                    >
                      <img src={IconTwitter} alt="img" />
                    </a>
                  </li>
                  <li class="list-group-item bg-transparent border-0">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/affan-h-336845140/"
                    >
                      <img src={IconLinkedin} alt="img" />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="col-md-5 container" style={{ width: "552px" }}>
            <form>
              <img
                className="img-fluid col align-self-start"
                src={logo}
                alt="img"
                style={{ marginBottom: "24px" }}
              />
              <p style={{ color: "#001726", fontSize: "16px" ,width:"552px", marginLeft:"30px" }}>
                If you want to ask us, please type a message and send it in the
                form below!
              </p>
              <div className=" flex-sm-row w-100 gap-2">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control shadow"
                    id="floatingInput"
                    placeholder="name@example.com"
                    style={{ width:"552px"}}
                  ></input>
                  <label for="floatingInput">Type your email</label>
                </div>
                <div class="form-floating">
                  <textarea
                    class="form-control shadow"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: "100px", width:"552px" }}
                  ></textarea>
                  <label className="text-mute" for="floatingTextarea2">
                    Type your message here
                  </label>
                  <button
                    style={{
                      marginTop: "24px",
                      padding: "12px 36px",
                      backgroundColor: "#0071BC",
                      color: "white",
                    }}
                    type="button"
                    class="btn"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 " >
          <ul class="list-group list-group-horizontal" style={{marginBottom:"-50px", marginTop:"20px"}}>
            <li
              class="list-group-item bg-transparent border-0"
              style={{ marginRight: "-20px" }}
            >
              <img src={Copyright} alt="" />
            </li>
            <li class="list-group-item bg-transparent border-0">
              <p style={{ color: "#0071BC" }}>
                Copyright 2022 .Malas Ngoding. All Right Reserved.
              </p>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default footer;
