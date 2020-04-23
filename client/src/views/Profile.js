import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import AuthContext from '../App';

const Profile = (props) => {
  const { id } = props;
  const {state, dispatch} = useContext(AuthContext);
  const [user, setUser] = useState('');
  const [loaded, setLoaded] = useState(false);

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

  return (
    <div>
    </div>
  );
}

export default Profile;
