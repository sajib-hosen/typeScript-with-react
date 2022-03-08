import React, { useReducer } from 'react';

type countState = {
    count: number
}
type updateAction = {
    type: 'inc' | 'dec', 
    payload: number
}
type resetAct = {

    type: 'reset', 

}
type countAction = updateAction | resetAct ;

const initialState = { count: 0 };

function reducer ( state : countState, action: countAction) {
    switch(action.type){
        case 'inc': return { count : state.count + action.payload };
        case 'dec': return { count : state.count - action.payload };
        case 'reset': return initialState;
        default: return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer( reducer, initialState)
    return (
        <div>
            Count: { state.count } <br />
            <button onClick={()=>{dispatch({type: 'inc', payload: 10 })}}>Increase by 10</button>
            <button onClick={()=>{dispatch({type: 'dec', payload: 10 })}}>decrease by 10</button>
            <button onClick={()=>{dispatch({type: 'reset'})}}>reset</button>
        </div>
    );
};

export default Counter;