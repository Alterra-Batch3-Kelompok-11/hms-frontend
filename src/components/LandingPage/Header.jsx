import logo from "../../assets/logoText.svg";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={` ${style.bgHeader}`}>
      <div>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto mt-2 text-decoration-none"
            >
              <img
                className="img-fluid"
                src={logo}
                alt="img"
                style={{ marginBottom: "21px", marginTop: "33px" }}
              />
            </a>

            <ul
              className="nav col-12 col-lg-auto justify-content-center text-small"
            >
              <li>
                <Link to="/" className="nav-link mt-2 mx-4">
                  <h2 style={{ color: "#00395E", fontSize: "24px" }}>HOME</h2>
                </Link>
              </li>
              <li>
                <Link to="/aboutUs" className="nav-link mt-2 mx-4">
                  <h2 style={{ color: "#00395E", fontSize: "24px" }}>ABOUT</h2>
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link mt-2 mx-4">
                  <h2 style={{ color: "#00395E", fontSize: "24px" }}>
                    SERVICES
                  </h2>
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link mt-2 mx-4">
                  <h2 style={{ color: "#00395E", fontSize: "24px" }}>
                    DOWNLOAD
                  </h2>
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-link">
                  <div>
                    <h2
                      className="text-sm-start py-2 px-3 mx-4"
                      style={{
                        color: "#00395E",
                        fontSize: "24px",
                        // padding: "12px 33px",
                        border: "3px solid #00395E",
                        borderRadius: "8px",
                        // margin: "30px 0px",
                      }}
                    >
                      Login
                    </h2>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
