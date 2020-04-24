import React, { useContext } from 'react';
import { AuthContext } from "../App";

const Home = () => {
  const { state, dispatch } = useContext(AuthContext);
  console.log(useContext(AuthContext));
  console.log(state.user);

  return(
    <div>
    {
      state.user ?
      <div>
        <h1> Hello {state.user.firstName} </h1>
      </div>
      :
      <div>Welcome, please sign up for an account</div>
    }
    </div>
  );
}

export default Home;
