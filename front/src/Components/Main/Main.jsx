import React from "react";
import { useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../redux/apiRequest";


const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.login?.currentUser);
  const [monney,setMonney] = useState({
    monney:0
    })
    useEffect(() => {
      if (!user) {
         return navigate("/login");
      }
      setMonney(prev => {
        return {
          ...prev,
          monney:user.others.monney
        }
      })
    }, []);
    const handleClick = () => {
      setMonney(prev => { 
        return {
          ...prev,
          monney:prev.monney+1000
        }
      })
    }
    if(user)
    updateUser (user.others._id,dispatch,monney) 
  return (
    <div>
      <button onClick={handleClick}>Add 1000</button>
      <p>{monney.monney}</p>
    </div>
  );
};

export default Main;
