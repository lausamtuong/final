import {
    loginFalse,
    loginStart,
    loginSuccess,
    registerFalse,
    registerSuccess,
    registerStart,
  } from "./authSlice";
import 
{
  updateStart,
  updateSuccess,
  updateError
} from "./userSlice";
const axios = require('axios');
export const loginUser = async(user,dispatch,navigate)=>{
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:30000/login",user)
        dispatch(loginSuccess(res.data));
            setTimeout(()=>{navigate('/main')},1000)
        console.log("dung")
    } catch (error) {
        dispatch(loginFalse())
        setTimeout(() => {
            alert("Tài khoản hoặc mật khẩu sai!")
        }, 2000);
    }
}
export const registerUser = async (user, dispath, navigate) => {
    dispath(registerStart());
    try {
      const res = await axios.post(
        "http://localhost:30000/register",
        user
      );
      dispath(registerSuccess());
      navigate("/login");
    } catch (error) {
      dispath(registerFalse());
    }
  };

  export const updateUser = async (id,dispath,monney) => {
    dispath(updateStart());
    try {
      console.log(id)
      const res = await axios.put(`http://localhost:30000/main/${id}`,monney)
      dispath(updateSuccess(res.data));
    } catch (error) {
      dispath(updateError(error.response.data));
    }
  };