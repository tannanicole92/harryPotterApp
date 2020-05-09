import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../App';
import ImageButton from '../components/widgets/ImageButton';
import { Grid } from '@material-ui/core';
import backgroundImage from "../assets/images/sorting-hat-2.jpg";
import SortingQuiz from '../components/quizzes/SortingQuiz';
import sortingQuestions from "../assets/jss/sortingQuestions";

const Quizzes = () => {
  const [house, setHouse] = useState('');
  const {state, dispatch} = useContext(AuthContext);
  var houseScore = {Gryffindor: 0, Slytherin: 0, Ravenclaw: 0, Hufflepuff: 0};
  const [sortingAnswers, setSortingAnswers] = useState({});
  const [showQuizzes, setShowQuizzes] = useState(true);
  const [showSortingQuiz, setShowSortingQuiz] = useState(true);
  const sortingImage = {
    url: backgroundImage,
    title: "Sorting Hat Quiz"
  };

  const clickedSorting = (event) => {
    event.preventDefault();
    setShowQuizzes(false);
    setShowSortingQuiz(true);
    console.log("clicked the sorting quiz button");
  };

  const onChangeProp = (event) => {
    setSortingAnswers({
      ...sortingAnswers,
      [event.target.name]: event.target.value
    });
  };

  const submitSortingProp = (event) => {
    var primaryColor;
    var secondaryColor;
    if (house === 'Gryffindor') {
      primaryColor = "#7F0909";
      secondaryColor = "#FFC500";
    } else if (house === 'Slytherin') {
      primaryColor = "#0D6217";
      secondaryColor = "#AAAAAA";
    } else if (house === 'Ravenclaw') {
      primaryColor = "#000A90";
      secondaryColor = "#946B2D";
    } else if (house === 'Hufflepuff') {
      primaryColor = "#EEE117";
      secondaryColor = "#000000";
    }

    axios.put('http://localhost:8000/api/users/edit/' + state.user._id, {house: house, primaryColor: primaryColor, secondaryColor: secondaryColor})
        .then((res) => {
          console.log(res.data);
          dispatch({
            type: "UPDATE",
            payload: res.data
          });
          setShowQuizzes(true);
          setShowSortingQuiz(false);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  return (
    <Grid container direction="column" alignItems="center">
    {showQuizzes ?
      <ImageButton image={sortingImage} clicked={clickedSorting} />
      :
      <div>
      { showSortingQuiz &&
        <SortingQuiz onChangeProp={onChangeProp} sortingQuestions={sortingQuestions} submitProp={submitSortingProp} />
      }
      </div>
    }

    </Grid>
  );
}

export default Quizzes;
