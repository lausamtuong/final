import { createSlice } from "@reduxjs/toolkit";
const mainSlice = createSlice({
    name:"main",
    initialState:{ 
        resume:false,
        disabled:false,
        totalMoney: null,
        amountAward: 0,
        isChoice: false,
        startMonney:null,
        result:[],
        userSelect:[
          0,
          0,
          0,
          0,
          0,
          0, //bau, cua , tom ,ca ,nai ,ga
        ],
      },
    reducers:{
        initalMain:(state)=>{
           state.totalMoney=0;
        },
        startMonney:(state,action)=>{
            state.startMonney=action.payload
        },
        totalMoney:(state,action)=>{
            state.totalMoney -=action.payload
        },
        recivePrice:(state,action)=>{
            state.totalMoney += action.payload
        },
        amountAward:(state,action)=>{
            state.amountAward = action.payload
         
        },
        userSelect:(state,action)=>{
            state.userSelect =action.payload
        },
        disabled:(state,action)=>{
            state.disabled = action.payload
        },
        resume:(state,action)=>{
            state.resume = action.payload
        },
        isChoice:(state,action)=>{
            state.isChoice = action.payload
        },
        result:(state,action)=>{
            state.result = action.payload
        }
    }
})

export const {totalMoney,
    recivePrice,
    amountAward,
    userSelect,
    disabled,
    resume,
    isChoice,
    startMonney,
    result,initalMain} = mainSlice.actions
export default mainSlice.reducer