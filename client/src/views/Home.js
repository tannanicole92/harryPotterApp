import React, { useContext } from 'react';
import { AuthContext } from "../App";
import Forums from '../components/Forums';

const Home = () => {
  const { state, dispatch } = useContext(AuthContext);
  console.log(useContext(AuthContext));
  console.log(state.user);

  return(
    <Forums user={state.user} />
  );
}

export default Home;
