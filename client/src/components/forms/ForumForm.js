import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 600,
  },
  input: {
    width: '100%',
  }
}));


const ForumForm = (props) => {
  const classes = useStyles();
  return (
    <Paper component="form" className={classes.root}>
      <Grid direction="column" container alignItems="flex-start">
        <h4> Start a Forum..</h4>
          <TextField
            className={classes.input}
            id="standard-textarea"
            multiline
          />
        </Grid>
    </Paper>
  );
}

export default ForumForm;
