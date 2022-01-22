import React from "react";
import tet3 from "../../images/tet3.gif";
import dangki from "../../images/dangki.gif";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/apiRequest";
import "./Register.css";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirm: "",
      email: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Yêu cầu nhập tài khoản")
        .min(6, "Tài khoản yêu cầu tối thiểu 6 kí tự"),
      password: Yup.string()
        .min(10, "Mật khẩu yêu cầu tối thiểu 10 kí tự")
        .required("Yêu cầu nhập mật khẩu")
        .matches(/[a-zA-Z]/, "Yêu cầu gồm tối thiểu 1 chữ cái a-Z"),
      confirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Nhập lại mật khẩu không chính xác")
        .required("Yêu cầu nhập lại mật khẩu"),
      email: Yup.string()
        .required("Vui lòng nhập email")
        .min(8, "Vui lòng nhập email chính xác")
        .matches(
          /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          "Vui lòng nhập email chính xác"
        ),
    }),
    onSubmit: (values) => {
      const newUser = {
        username: values.username,
        password: values.password,
        email: values.email,
      };
      registerUser(newUser, dispatch, navigate);
      setTimeout(() => {
        formik.setSubmitting(false);
      }, 2000);
    },
  });

  return (
    <div className="container">
      <div>
        <img src={tet3} alt="tet3" />
      </div>

      <form className="register" onSubmit={formik.handleSubmit}>
        <div className="title">Đăng Ký</div>
        <TextField
          style={{ marginBottom: "10px" }}
          label="Tên đăng nhập"
          placeholder="addmin123"
          multiline
          variant="filled"
          name="username"
          id="username"
          value={formik.values.username}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="error_msg">{formik.errors.username}</div>
        ) : null}
        <TextField
          style={{ marginBottom: "10px" }}
          label="Email"
          placeholder="addmin123@gmail.com"
          multiline
          variant="filled"
          name="email"
          id="email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error_msg">{formik.errors.email}</div>
        ) : null}
        <TextField
          style={{ marginBottom: "10px" }}
          label="Mật khẩu"
          placeholder="Nhập mật khẩu"
          type="password"
          autoComplete="current-password"
          variant="filled"
          name="password"
          id="password"
          value={formik.values.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error_msg">{formik.errors.password}</div>
        ) : null}
        <TextField
          style={{ marginBottom: "10px" }}
          id="filled-textarea"
          label="Nhập lại mật khẩu"
          placeholder="Nhập lại mật khẩu"
          type="password"
          variant="filled"
          name="confirm"
          id="confirm"
          value={formik.values.confirm}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.confirm && formik.errors.confirm ? (
          <div className="error_msg">{formik.errors.confirm}</div>
        ) : null}
        <button type="submit" >
          <div className="dangki">
            <img src={dangki} alt="tet3" />
          </div>
        </button>
      </form>
      {formik.isSubmitting ? (
        <div className="loading">
          <div className="double-loading">
            <div className="c1"></div>
            <div className="c2"></div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Register;
