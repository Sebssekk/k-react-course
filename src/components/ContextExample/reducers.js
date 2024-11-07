export const initState = {
    countMsg: 'Count',
    incDecValue: 1,
    count: 0
}

export const ADD = 'add'
export const SUB = 'sub'
export const MSG_CHANGE = "msgChange"
export const VALUE_CHANGE = 'valueChange'

export const reducer = (state,action) => {
    switch(action.type){
        case ADD: 
            return {
                ...state,
                count: state.count + state.incDecValue,
            };    
        case SUB:
            return {
                ...state,
                count: state.count - state.incDecValue,
            };
        case MSG_CHANGE:
            return {
                ...state,
                countMsg: action.payload
            }  
        case VALUE_CHANGE:
            return {
                ...state,
                incDecValue: action.payload
            }
        default:
            return state;
    }
}