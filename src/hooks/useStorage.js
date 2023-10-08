import { useReducer } from "react";

const initialStore = {
    isLoggedIn: false,
    user:{
      name:'Full Name',
    },
    jwtToken:'',
    messages:[],
    inProgress:{
    },
    error:{
    }
};
  
const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        state.user = action.payload;
        state.jwtToken = action.payload.token;
        state.isLoggedIn = true;
      return state;
      default:
        return state;
    }
};
  

const useStorage = () => {
    const [store, dispatch] = useReducer(reducer, initialStore);
    return [store, dispatch];
};

export default useStorage;