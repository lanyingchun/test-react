import { createStore} from 'redux'

function reducer(state,action){
 if(action.type ==='change-name'){
     return {...state,username:action.val};
 }
 return state;
}

const state = {
    username:'zhangsan',
    id:'dssdds'
}

export default createStore(reducer,state);