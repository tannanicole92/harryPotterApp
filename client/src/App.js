import React, {useReducer} from 'react';
import './App.scss';
import { Router } from '@reach/router';
import Home from './views/Home.js';
import LoginSignUp from './views/LoginSignUp';
import Profile from './views/Profile';
export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    case "UPDATE":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{state,dispatch}}>
      <div className="App">
        <Router>
          <Home path="/" />
          <LoginSignUp path="/login" />
          <LoginSignUp path="/:signup" />
          <Profile path="/profile/:id" />
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
