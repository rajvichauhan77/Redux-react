import { INC_COUNT, DEC_COUNT, RESET_COUNT } from "./actionTypes";

export const incCount = () => {
    return{type : INC_COUNT}
}

export const decCount = () => {
    return{type : DEC_COUNT}
}

export const resetCount = () => {
    return{type : RESET_COUNT}
}