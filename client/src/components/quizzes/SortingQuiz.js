import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormHelperText, FormLabel, Grid } from '@material-ui/core';
import Button from '../widgets/Button';

const useStyles = makeStyles((theme) => ({
  heading: {
    color: 'white',
    fontWeight: 600,
    textShadow: '#000000 1px 0 5px',
    marginTop: '0em'
  },
  questionContainer: {
    margin: theme.spacing(2),
    width: "600px",
    backgroundColor: 'black',
    padding: '1em 2em 1em 2em'
  },
  question: {
    color: 'white',
    margin: '0em',
    fontSize: '20px',
    lineHeight: '40px',
    "&.Mui-focused": {
      color: 'white'
    },
  },
  options: {
    paddingTop: '.5em',
    color: 'white'
  },
  radioButtons: {
    color: 'white',
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

const SortingQuiz = (props) => {
  const { submitProp, onChangeProp, sortingQuestions } = props;
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');

  return (
    <form onSubmit={submitProp}>
    <Grid container direction="column" alignItems="center">
      <h2 className={classes.heading}>Sorting Hat Quiz</h2>
      { sortingQuestions.map((item, i) => (
        <Grid key={'questions'+i} className={classes.questionContainer} container direction="row">
        <FormControl component="fieldset" error={error}>
          <FormLabel component="legend" className={classes.question}>{item.question}</FormLabel>
            <RadioGroup aria-label="quiz" name={item.name} value={item.value} onChange={onChangeProp}>
            { item.values.map((itemVal, idx) => (
              <FormControlLabel className={classes.options} key={'values'+idx} value={itemVal.point} control={<Radio className={classes.radioButtons} color="white" />} label={itemVal.value} />
              ))}
            </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        </Grid>
      ))}

      <Button type="submit" variant="outlined" color="primary" className={classes.button}>
        Submit
      </Button>
      </Grid>
    </form>

  );
}

export default SortingQuiz;
