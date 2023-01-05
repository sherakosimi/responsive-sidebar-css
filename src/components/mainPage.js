import React from "react";
import "./Navbar.css";
import TextField from "@mui/material/TextField";

function MainPage() {
  return (
    <div className="home">
      <h1>Home</h1>
      <TextField name="site" label="Введите ссылку на сайт" />
    </div>
  );
}

export default MainPage;
