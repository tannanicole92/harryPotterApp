import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
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
      <h2>Sorting Hat Quiz</h2>
      { sortingQuestions.map((item, i) => (
        <FormControl key={'questions'+i} component="fieldset" error={error} className={classes.formControl}>
          <FormLabel component="legend">{item.question}</FormLabel>
            <RadioGroup aria-label="quiz" name={item.name} onChange={onChangeProp}>
            { item.values.map((itemVal, idx) => (
              <FormControlLabel key={'values'+idx} value={itemVal.point} control={<Radio />} label={itemVal.value} />
              ))}
            </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      ))}

      <Button type="submit" variant="outlined" color="primary" className={classes.button}>
        Submit
      </Button>
    </form>

  );
}

export default SortingQuiz;
