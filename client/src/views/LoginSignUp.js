import React, { useState, useEffect, useContext } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import UserCredsForm from '../components/forms/UserCredsForm';
import { AuthContext } from "../App";

const LoginSignUp = (props) => {
  const { signup } = props;
  const { dispatch } = useContext(AuthContext);
  const [submitText, setSubmitText] = useState('Login');
  const [userCreds, setUserCreds] = useState({});

  useEffect(() => {
    if (signup) {
      setSubmitText("Sign Up");
      setUserCreds({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } else {
      setUserCreds({
        email: '',
        password: ''
      });
    }
  },[signup])

  const onChange = (e) => {
    setUserCreds({
      ...userCreds,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (signup) {
      axios.post('http://localhost:8000/api/register', userCreds)
          .then((res) => {
            console.log(res.data);
            dispatch({
              type: "LOGIN",
              payload: res.data
            });
            setUserCreds(res.data);
            navigate('/');
          })
          .catch((err) => {
            console.log(err);
          });
    } else {
      axios.post('http://localhost:8000/api/login', userCreds)
          .then((res) => {
            console.log(res.data);
            dispatch({
              type: "LOGIN",
              payload: res.data
            });
            setUserCreds(res.data);
            navigate('/');
          })
          .catch((err) => {
            console.log(err);
          });
    }
  };
  return(
    <div>
      <UserCredsForm onChangeProp={onChange} submitText={submitText} onSubmitProp={onSubmit} userInputs={userCreds} />
    </div>
  );
}

export default LoginSignUp;
