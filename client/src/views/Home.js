import React, {useContext, useState, useEffect} from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import { AuthContext } from "../App";
import ActionButton from '../components/widgets/ActionButton';
import UserCredsForm from '../components/forms/UserCredsForm';

const Home = () => {
  const { state, dispatch } = useContext(AuthContext);
  console.log(useContext(AuthContext));
  console.log(state.user);
  const [userInputs, setUserInputs] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  useEffect(() => {
    if (state.user) {
      setUserInputs({
        firstName: state.user.firstName,
        lastName: state.user.lastName,
        email: state.user.email
      });
    }
  },[state])

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

  const editUser = (event) => {
    event.preventDefault();
    axios.put('http://localhost:8000/api/users/edit/' + state.user._id, userInputs)
        .then((res) => {
          console.log(res.data);
          dispatch({
            type: "UPDATE",
            payload: res.data
          });
          navigate('/');
        })
        .catch((err) => {
          console.log(err);
        });
  }

  const onInputChange = (event) => {
    setUserInputs({
      ...userInputs,
      [event.target.name]: event.target.value
    });
  }

  return(
    <div>
    {
      state.user ?
      <div>
      <ActionButton action={logout} text="Logout" />
        <h1> Hello {state.user.firstName} </h1>
        <UserCredsForm userInputs={userInputs} onSubmitProp={editUser} onChangeProp={onInputChange} submitText="Save" />
      </div>
      :
      <div><Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link></div>
    }
    </div>
  );
}

export default Home;
