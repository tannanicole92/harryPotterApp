import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../App";
import Forums from './Forums';
import { navigate } from '@reach/router';
import axios from 'axios';
import ForumForm from '../components/forms/ForumForm';

const Home = () => {
  const { state } = useContext(AuthContext);
  const [forums, setForums] = useState([]);
  const [value, setValue] = useState('');
  const [disabled, setDisabled] = useState(true);
  console.log(useContext(AuthContext));
  console.log(state.user);

  useEffect(() => {
    axios.get('http://localhost:8000/api/forums')
      .then((res) => {
        setForums(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
    if (value !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const postForum = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/forums/new', {
      ownerId: state.user._id,
      topic: 'Harry Potter',
      message: value,
      tags: ["harry potter", "movies"]
    })
        .then((res) => {
          console.log(res);
          setValue('');
          navigate('/');
        })
        .catch((err) => {
          console.log(err);
    });
  };

  return(
    <div>
    <div className="fixedPost">
      <ForumForm postForum={postForum} value={value} handleInput={handleChange} disabled={disabled} />
    </div>
    <Forums forums={forums} />
    </div>
  );
}

export default Home;
