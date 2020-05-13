import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../App';
import ImageButton from '../components/widgets/ImageButton';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from "../assets/images/sorting-hat-2.jpg";
import SortingQuiz from '../components/quizzes/SortingQuiz';
import sortQuestions from "../assets/jss/sortingQuestions";
import Dialog from '../components/Dialog';
import HouseResult from '../components/HouseResult';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    color: 'white'
  },
  content: {
    overflow: 'hidden'
  }
}));

const Quizzes = () => {
  const classes = useStyles();
  const {state, dispatch} = useContext(AuthContext);
  const [showQuizzes, setShowQuizzes] = useState(true);
  const [showSortingQuiz, setShowSortingQuiz] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('')
  const [house, setHouse] = useState('');
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

  const closeDialog = () => {
    setShowDialog(false);
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
    let favorite = sortingQuestions[12].value;
    let g = 0;
    let s = 0;
    let r = 0;
    let h = 0;
    sortingQuestions.forEach((item, i) => {
      if (item.value === "Gryffindor") {
        g++;
      } else if (item.value === "Slytherin") {
        s++;
      } else if (item.value === "Ravenclaw") {
        r++;
      } else if (item.value === "Hufflepuff") {
        h++;
      }
    });
    if (favorite) {
      if (favorite === "Gryffindor") {
        g++;
      } else if (favorite === "Slytherin") {
        s++;
      } else if (favorite === "Ravenclaw") {
        r++;
      } else if (favorite === "Hufflepuff") {
        h++;
      }
    }

    let highest = {name: '', percent: Math.max(g, s, r, h)};
    let second = {name: '', percent: 0};
    let third = {name: '', percent: 0};
    let fourth = {name: '', percent: 0};
    let myHouse;
    if (highest.percent === g) {
      myHouse = "Gryffindor";
      highest.name = "Gryffindor";
      second.percent = Math.max(s, r, h);
      if (second.percent === s) {
        second.name = "Slytherin";
        third.percent = Math.max(r, h);
        if (third.percent === r) {
          third.name = "Ravenclaw";
          fourth.percent = h;
          fourth.name = "Hufflepuff";
        } else {
          third.name = "Hufflepuff";
          fourth.percent = r;
          fourth.name = "Ravenclaw";
        }
      } else if (second.percent === r) {
        second.name = "Ravenclaw";
        third.percent = Math.max(s, h);
        if (third.percent === s) {
          third.name = "Slytherin";
          fourth.percent = h;
          fourth.name = "Hufflepuff";
        } else {
          third.name = "Hufflepuff";
          fourth.percent = s;
          fourth.name = "Slytherin";
        }
      } else if (second.percent === h) {
        second.name = "Hufflepuff";
        third.percent = Math.max(s, r);
        if (third.percent === s) {
          third.name = "Slytherin";
          fourth.percent = r;
          fourth.name = "Ravenclaw";
        } else {
          third.name = "Ravenclaw";
          fourth.percent = s;
          fourth.name = "Slytherin";
        }
      }
    } else if (highest.percent === s) {
      myHouse = "Slytherin";
      highest.name = "Slytherin";
      second.percent = Math.max(g, r, h);
      if (second.percent === g) {
        second.name = "Gryffindor";
        third.percent = Math.max(r, h);
        if (third.percent === r) {
          third.name = "Ravenclaw";
          fourth.percent = h;
          fourth.name = "Hufflepuff";
        } else {
          third.name = "Hufflepuff";
          fourth.percent = r;
          fourth.name = "Ravenclaw";
        }
      } else if (second.percent === r) {
        second.name = "Ravenclaw";
        third.percent = Math.max(g, h);
        if (third.percent === g) {
          third.name = "Gryffindor";
          fourth.percent = h;
          fourth.name = "Hufflepuff";
        } else {
          third.name = "Hufflepuff";
          fourth.percent = g;
          fourth.name = "Gryffindor";
        }
      } else if (second.percent === h) {
        second.name = "Hufflepuff";
        third.percent = Math.max(g, r);
        if (third.percent === g) {
          third.name = "Gryffindor";
          fourth.percent = r;
          fourth.name = "Ravenclaw";
        } else {
          third.name = "Ravenclaw";
          fourth.percent = g;
          fourth.name = "Gryffindor";
        }
      }
    } else if (highest.percent === r) {
      myHouse = "Ravenclaw";
      highest.name = "Ravenclaw";
      second.percent = Math.max(g, s, h);
      if (second.percent === g) {
        second.name = "Gryffindor";
        third.percent = Math.max(s, h);
        if (third.percent === s) {
          third.name = "Slytherin";
          fourth.percent = h;
          fourth.name = "Hufflepuff";
        } else {
          third.name = "Hufflepuff";
          fourth.percent = s;
          fourth.name = "Slytherin";
        }
      } else if (second.percent === s) {
        second.name = "Slytherin";
        third.percent = Math.max(g, h);
        if (third.percent === g) {
          third.name = "Gryffindor";
          fourth.percent = h;
          fourth.name = "Hufflepuff";
        } else {
          third.name = "Hufflepuff";
          fourth.percent = g;
          fourth.name = "Gryffindor";
        }
      } else if (second.percent === h) {
        second.name = "Hufflepuff";
        third.percent = Math.max(g, s);
        if (third.percent === g) {
          third.name = "Gryffindor";
          fourth.percent = s;
          fourth.name = "Slytherin";
        } else {
          third.name = "Slytherin";
          fourth.percent = g;
          fourth.name = "Gryffindor";
        }
      }
    } else if (highest.percent === h) {
      myHouse = "Hufflepuff";
      highest.name = "Hufflepuff";
      second.percent = Math.max(g, s, r);
      if (second.percent === g) {
        second.name = "Gryffindor";
        third.percent = Math.max(s, r);
        if (third.percent === s) {
          third.name = "Slytherin";
          fourth.percent = r;
          fourth.name = "Ravenclaw";
        } else {
          third.name = "Ravenclaw";
          fourth.percent = s;
          fourth.name = "Slytherin";
        }
      } else if (second.percent === s) {
        second.name = "Slytherin";
        third.percent = Math.max(g, r);
        if (third.percent === g) {
          third.name = "Gryffindor";
          fourth.percent = r;
          fourth.name = "Ravenclaw";
        } else {
          third.name = "Ravenclaw";
          fourth.percent = g;
          fourth.name = "Gryffindor";
        }
      } else if (second.percent === r) {
        second.name = "Ravenclaw";
        third.percent = Math.max(g, s);
        if (third.percent === g) {
          third.name = "Gryffindor";
          fourth.percent = s;
          fourth.name = "Slytherin";
        } else {
          third.name = "Slytherin";
          fourth.percent = g;
          fourth.name = "Gryffindor";
        }
      }
    }
    highest.percent = highest.percent/14;
    highest.percent = Math.round(highest.percent * 100);
    second.percent = second.percent/14;
    second.percent = Math.round(second.percent * 100);
    third.percent = third.percent/14;
    third.percent = Math.round(third.percent * 100);
    fourth.percent = fourth.percent/14;
    fourth.percent = Math.round(fourth.percent * 100);

    setDialogTitle("You are " + highest.percent + "% " + highest.name + ", " + second.percent + "% " + second.name + ", " + third.percent + "% " + third.name + ", " + fourth.percent + "% " + fourth.name + "!");

    var score = {Gryffindor: g/14, Slytherin: s/14, Ravenclaw: r/14, Hufflepuff: h/14};
    console.log(score.Ravenclaw);
    score.Gryffindor = Math.round(score.Gryffindor * 100);
    score.Slytherin = Math.round(score.Slytherin * 100);
    score.Ravenclaw = Math.round(score.Ravenclaw * 100);
    console.log(score.Ravenclaw);
    score.Hufflepuff = Math.round(score.Hufflepuff * 100);
    score.Gryffindor = score.Gryffindor.toString() + "%";
    score.Slytherin = score.Slytherin.toString() + "%";
    score.Ravenclaw = score.Ravenclaw.toString() + "%";
    console.log(score.Ravenclaw);
    score.Hufflepuff = score.Hufflepuff.toString() + "%";

    var primaryColor;
    var secondaryColor;

    if (myHouse === 'Gryffindor') {
      primaryColor = "#7F0909";
      secondaryColor = "#FFC500";
    } else if (myHouse === 'Slytherin') {
      primaryColor = "#0D6217";
      secondaryColor = "#AAAAAA";
    } else if (myHouse === 'Ravenclaw') {
      primaryColor = "#000A90";
      secondaryColor = "#946B2D";
    } else if (myHouse === 'Hufflepuff') {
      primaryColor = "#EEE117";
      secondaryColor = "#000000";
    }
    setHouse(myHouse);
    axios.put('http://localhost:8000/api/users/edit/' + state.user._id, {house: myHouse, primaryColor: primaryColor, secondaryColor: secondaryColor, score: {gryffindor: score.Gryffindor, slytherin: score.Slytherin, ravenclaw: score.Ravenclaw, hufflepuff: score.Hufflepuff}})
        .then((res) => {
          console.log(res.data);
          dispatch({
            type: "UPDATE",
            payload: res.data
          });
          setShowQuizzes(true);
          setShowSortingQuiz(false);
          setShowDialog(true);
          let sortingAnswers = [...sortingQuestions];
          sortingAnswers.forEach((item, i) => {
            item.value = '';
          });
          setSortingQuestions(sortingAnswers);
          console.log(sortingQuestions);
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
    { showDialog &&
      <Dialog classes={{root: classes.root}} maxWidth='md' open={showDialog} handleClose={closeDialog} title={dialogTitle} content={
        <HouseResult classes={{root: classes.content}} house={house} />
      } />
    }
    </Grid>
  );
}

export default Quizzes;
