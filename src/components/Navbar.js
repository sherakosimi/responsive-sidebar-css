import React, { useState, useEffect } from "react";
import logo from "./images/euphorie.jpg";
import home from "./images/home.jpg";
import clients from "./images/clients.jpg";
import employers from "./images/employers.jpg";
import analytics from "./images/analytics.jpg";
import portrait from "./images/portrait.jpg";
import Axios from "axios";
import TextField from "@mui/material/TextField";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    message();
  }, []);

  const message = async () => {
    try {
      let res = await Axios.get(
        "http://api.programmatic.ru/api/v1/users/openapi.json"
      );
      let result = res.data;
      setResult(result);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(result);
  return (
    <>
      <body>
        <div className="navbar">
          <input
            className={sidebar ? "searchBar onHover" : "searchBar"}
            type="text"
            placeholder="Поиск . . ."
          />
          <TextField name="site" label="Введите ссылку на сайт" />
          <div className="accountContainer">
            <span className="accountText">Петрова О. П</span>
            <div className="accountPhoto">
              <img alt="accountlogo" src={portrait} className="accountLogo" />
            </div>
          </div>
        </div>
        <nav
          class="main-menu"
          onMouseEnter={() => setSidebar(true)}
          onMouseLeave={() => setSidebar(false)}
        >
          <ul style={{ paddingLeft: 4 }}>
            <li>
              <a>
                <div class="fa fa-2x">
                  <img alt="logo" src={logo} className="imageLogo" />
                </div>
                <span class="nav-text">EUPHORIA</span>
              </a>
            </li>
            <li style={{ marginTop: "10px" }}>
              <a>
                <div class="fa fa-2x">
                  <img alt="logo" src={home} className="imageLogo" />
                </div>
                <span class="nav-text">Главная</span>
              </a>
            </li>
            <li>
              <a>
                <div class="fa fa-2x">
                  <img alt="logo" src={clients} className="imageLogo" />
                </div>
                <span class="nav-text">Клиенты</span>
              </a>
            </li>
            <li>
              <a>
                <div class="fa fa-2x">
                  <img alt="logo" src={employers} className="imageLogo" />
                </div>
                <span class="nav-text">Поддержка</span>
              </a>
            </li>
            <li>
              <a>
                <div class="fa fa-2x">
                  <img alt="logo" src={analytics} className="imageLogo" />
                </div>
                <span class="nav-text">Аналитика</span>
              </a>
            </li>
          </ul>
          <ul class="logout">
            <li>
              <a href="#">
                <i class="fa fa-power-off fa-2x"></i>
                <span class="nav-text">Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </body>
    </>
  );
}

export default Navbar;
