import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import "./Login.css";
import tet3 from "../../images/tet3.png";
import bct from "../../images/bct.png";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/apiRequest";
import { loginInitUser,initalMainUser } from "../../redux/apiRequest";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
useEffect(() => {
  loginInitUser(dispatch)
  initalMainUser(dispatch)
}, []);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      const newUser = {
        username: values.username,
        password: values.password,
      };
      loginUser(newUser, dispatch, navigate);
      setTimeout(() => {
        formik.setSubmitting(false);
      }, 2000);
    },
  });
  return (
    <div className="container">
      <div>
        <div
          className="home"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={bct} alt="" />
          <p>Trang Chủ</p>
        </div>
        <div className="img-wrap">
          <img src={tet3} alt="" />
        </div>
      </div>
      <div className="wrap-login">
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="Title">Đăng nhập tài khoản</div>
          <TextField
            id="username"
            label="Tài Khoản"
            variant="outlined"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          <TextField
            label="Mật Khẩu"
            type="password"
            autoComplete="current-password"
            style={{
              marginBottom: "20px",
            }}
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <button type="submit" className="login__button">
            Đăng nhập ngay
          </button>
          <p
            className="option"
            onClick={() => {
              document.querySelector(".overlay").classList.remove("hide");
            }}
          >
            Quên mật khẩu? Nhấn tại đây!
          </p>
        </form>

        <Link to="/register" className="button btn">
          {" "}
          Đăng kí{" "}
        </Link>
      </div>
      {formik.isSubmitting ? (
        <div className="loading">
          <div className="double-loading">
            <div className="c1"></div>
            <div className="c2"></div>
          </div>
        </div>
      ) : null}
      <div className="overlay hide">
        <div className="overlay__box">
          <p>
            Có thể do áp lực khiến bạn không nhớ mật khẩu, Hãy thư giãn và thử
            lại lần sau, xin cảm ơn!
          </p>
          <button
            className="close"
            onClick={() => {
              document.querySelector(".overlay").classList.add("hide");
            }}
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
