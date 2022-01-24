import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resumeAPI, startMonneyAPI, totalMoneyAPI, updateUser, userSelectAPI } from "../../redux/apiRequest";
import "./main.css";
import DevHandle from "./components/Dev/DevHandle";
import UserHandle from "./components/User/UserHandle";
import logo from "../../images/bct.png";
import logoText from "../../images/logo-text.png";

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.login?.currentUser);
  const monney_Real = useSelector((state) => state.main.totalMoney);
  const resume = useSelector((state) => state.main.resume);
  const amountAward = useSelector((state) => state.main.amountAward);
  const img = useSelector((state) => state.main.result);
  useEffect(()=>{
    if(!user) return navigate("/");
    startMonneyAPI(dispatch,user.others.monney)
    const initalMonney = -1*Number(user.others.monney)
    totalMoneyAPI(dispatch,initalMonney)
  },[])
  const resumeHandle = () => {
  resumeAPI(dispatch,false)
  userSelectAPI(dispatch,[0,0,0,0,0,0])
  updateUser(user.others._id,dispatch,{monney:monney_Real})
}
const handleLogout=()=>{
  return  navigate('/login')
}
  return (
    <div className="Main">
      <div className="header">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="user">
          <div className="info">{user?.others.username}</div>
          <div className="money">{new Intl.NumberFormat().format(monney_Real)}$</div>
          <p className="logout" onClick={handleLogout}>Đăng Xuất</p>
        </div>
      </div>
      <div className="logo-text">
        <img src={logoText}></img>
      </div>
      <div className="content">
        <UserHandle />
        <DevHandle />
      </div>
      {resume && (
        <div className="footer">
          <div className="footer_content">
            <div className="show_result">
              <img src={img[0]}></img>
              <img src={img[1]}></img>
              <img src={img[2]}></img>
            </div>
            <div className="notification">
              Chúc Mừng Bạn Nhận Được{" "}
              {new Intl.NumberFormat().format(amountAward)}$
            </div>
            <div className="resume-btn">
              <button onClick={resumeHandle}>Tiếp tục</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
