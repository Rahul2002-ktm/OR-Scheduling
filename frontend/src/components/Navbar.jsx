import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="../../public/Images/Logo.png"
              alt="RTB Hospital Logo"
              className="img-fluid"
              style={{ maxHeight: "40px", marginRight: "10px" }}
            />
            RTB Hospital
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Doctors
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Patients
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Departments
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Surgery
                    </a>
                  </li>
                  <hr class="dropdown-divider" />
                  <li>
                    <a class="dropdown-item" href="#">
                      Anesthesia
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Cardiology
                    </a>
                  </li>
                  <hr class="dropdown-divider" />
                  <li>
                    <a class="dropdown-item" href="#">
                      Neurology
                    </a>
                  </li>
                  <hr class="dropdown-divider" />
                  <li>
                    <a class="dropdown-item" href="#">
                      Plastic Surgery
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <Link
              to="/SignIn"
              className="btn btn-outline-success"
              type="submit"
            >
              Sign in
            </Link>

            <Link
              to="/SignUp"
              className="btn btn-outline-success"
              type="submit"
            >
              Sign up
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
