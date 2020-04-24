import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import AuthContext from '../App';
import ActionButton from '../components/widgets/ActionButton';
import UserCredsForm from '../components/forms/UserCredsForm';

const Profile = (props) => {
  const { id } = props;
  const {state, dispatch} = useContext(AuthContext);
  const [user, setUser] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const [userInputs, setUserInputs] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  useEffect(() => {
    if (id) {
      axios.get('http://localhost:8000/api/users/' + id)
        .then((res) => {
          setUser(res.data);
          setLoaded(true);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [id])

  const updatingUser = (event) => {
    event.preventDefault();
    axios.put('http://localhost:8000/api/users/edit/' + state.user._id, userInputs)
        .then((res) => {
          console.log(res.data);
          dispatch({
            type: "UPDATE",
            payload: res.data
          });
          setEditUser(false);
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
  return (
    <div>
      { state.user._id === user._id ?
        <div>
        { (editUser === false) ?
          <ActionButton action={() => setEditUser(true)} text="Edit Profile" />
          :
          <UserCredsForm userInputs={userInputs} onSubmitProp={updatingUser} onChangeProp={onInputChange} submitText="Save" />
        }
        </div>
        :
        <div></div>
      }

    </div>
  );
}

export default Profile;
