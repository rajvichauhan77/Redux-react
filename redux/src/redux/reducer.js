import { DEC_COUNT, INC_COUNT, RESET_COUNT } from "./actionTypes";

const reducer = (state={count:0},action) => {

    switch(action.type)
    {
        case INC_COUNT : return {
            ...state,
            count: state.count+1
        }
        case DEC_COUNT : return {
            ...state,
            count: state.count-1
        }
        case RESET_COUNT: return {
            ...state,
            count: 0
        }

        default : return state
    }
}
export default reducer