import React, { useState } from "react";
import "./devhandle.css";
import dia from "../../../../images/dia.png";
import diaup from "../../../../images/diaup.png";
import bau from "../../../../images/bau.png";
import cua from "../../../../images/cua.png";
import tom from "../../../../images/tom.png";
import ca from "../../../../images/ca.png";
import nai from "../../../../images/nai.png";
import ga from "../../../../images/ga.png";
import { useSelector, useDispatch } from "react-redux";
import shakesound from "../../../../Music/shake.mp3"
import { amountAwardAPI, disabledAPI, isChoiceAPI, recivePriceAPI, resultAPI, resumeAPI } from "../../../../redux/apiRequest";
import ReactAudioPlayer from "react-audio-player";
function DevHandle() {
  const [active, setActive] = useState("diaup");
  const [disabled, setDisabled] = useState(false);
  const userSelect = useSelector(state => state.main.userSelect)
  const isChoice = useSelector((state) => state.main.isChoice);
  const dispatch = useDispatch();

  let a = Math.floor(Math.random() * 6);
  let b = Math.floor(Math.random() * 6);
  let c = Math.floor(Math.random() * 6);

  const listImg = [nai, bau, ga, ca, cua, tom];

  const [img, setImg] = useState([listImg[a], listImg[b], listImg[c]]);
  const shakeClick = () => {
    document.querySelector(".shaking").play()
    if (!isChoice) alert("Vui lòng đặt tiền");
    else {
      setDisabled(true);
      setActive("diaup active");
      disabledAPI(dispatch,true)
      setTimeout(() => {
        a = Math.floor(Math.random() * 6);
        b = Math.floor(Math.random() * 6);
        c = Math.floor(Math.random() * 6);
        const listItem = [a, b, c];
        let total = listItem.reduce(
          (prev, cur) => prev + 2 * 1000 * userSelect[cur],
          0
        )
        setActive("diaup");
        setDisabled(false)   
        recivePriceAPI(dispatch,total)
        amountAwardAPI(dispatch,total)
        disabledAPI(dispatch,false)
        setImg([listImg[a], listImg[b], listImg[c]]);
        resumeAPI(dispatch,true)
        isChoiceAPI(dispatch,false)
        resultAPI(dispatch,[listImg[a], listImg[b], listImg[c]])
      }, 3000);
    }
    
  };
  return (
    <div className="dev__handle">
     <ReactAudioPlayer src={shakesound} className="shaking" controls volume={1}/>
      <div className="random-shake">
        <img src={dia}></img>
        <div className="item">
          <img src={img[0]}></img>
          <img src={img[1]}></img>
          <img src={img[2]}></img>
        </div>
        <div className={active}>
          <img src={diaup}></img>
        </div>
      </div>
      <div className="btn-shake">
        <button disabled={disabled} onClick={shakeClick}>
          Lắc
        </button>
      </div>
    </div>
  );
}

export default DevHandle;
