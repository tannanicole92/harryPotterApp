import React, {useReducer} from 'react';
import './App.scss';
import "./assets/scss/material-kit-react.scss";
import { Router } from '@reach/router';
import NavBar from './views/NavBar.js';
import Home from './views/Home.js';
import LoginSignUp from './views/LoginSignUp';
import Profile from './views/Profile';
import Quizzes from './views/Quizzes';
import backgroundImage from "./assets/images/harrypotterbackground.jpg";

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
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{state,dispatch}}>
      <div className="App fullHeight" style={{ backgroundImage: "url(" + backgroundImage + ")" }}>
        <NavBar />
        <Router>
          <Home path="/" />
          <LoginSignUp path="/login" />
          <LoginSignUp path="/:signup" />
          <Profile path="/profile/:id" />
          <Quizzes path="/quizzes" />
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
