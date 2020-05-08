import React, { useContext } from 'react';
import Navigation from '../components/Navigation';
import { AuthContext } from '../App';
import { navigate } from '@reach/router';
import axios from 'axios';

const NavBar = (props) => {
  const { state, dispatch } = useContext(AuthContext);

  const logout = () => {
    axios.post('http://localhost:8000/api/logout')
        .then((res) => {
          console.log(res);
          dispatch({
            type: "LOGOUT"
          });
          navigate('/');
        })
        .catch((err) => {
          console.log(err);
        });
  }

  return (
    <div>
    {state.user ?
      <Navigation currentUser={state.user} logout={logout} />
      :
      <Navigation />
    }
    </div>
  );
}

export default NavBar;
