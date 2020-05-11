import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../App';
import ImageButton from '../components/widgets/ImageButton';
import { Grid } from '@material-ui/core';
import backgroundImage from "../assets/images/sorting-hat-2.jpg";
import SortingQuiz from '../components/quizzes/SortingQuiz';
import sortQuestions from "../assets/jss/sortingQuestions";

const Quizzes = () => {
  const {state, dispatch} = useContext(AuthContext);
  const [showQuizzes, setShowQuizzes] = useState(true);
  const [showSortingQuiz, setShowSortingQuiz] = useState(true);
  const [sortingQuestions, setSortingQuestions] = useState(sortQuestions);
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
    let sortingAnswers = [...sortingQuestions];
    sortingAnswers.forEach((item, i) => {
      if (item.name === event.target.name) {
        item.value = event.target.value;
        console.log(item.value);
      }
    });
    setSortingQuestions(sortingAnswers);
    console.log(sortingQuestions);
  };

  const submitSortingProp = (event) => {
    event.preventDefault();
    let g = 0;
    let s = 0;
    let r = 0;
    let h = 0;
    let house;
    sortingQuestions.forEach((item, i) => {
      if (item.value === "Gryffindor") {
        g++
      } else if (item.value === "Slytherin") {
        s++
      } else if (item.value === "Ravenclaw") {
        r++;
      } else if (item.value === "Hufflepuff") {
        h++;
      }
    });
    let highest = Math.max(g, s, r, h);
    if (highest === g) {
      house = "Gryffindor";
    } else if (highest === s) {
      house = "Slytherin";
    } else if (highest === r) {
      house = "Ravenclaw";
    } else if (highest === h) {
      house = "Hufflepuff";
    }
    console.log(highest);
    console.log(house);
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
