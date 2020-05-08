import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Paper } from '@material-ui/core';
import Button from '../widgets/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 200,
  },
  input: {
    width: '100%',
  },
  button: {
    padding: '0px',
  }
}));


const ForumForm = (props) => {
  const { postForum, value, handleInput, disabled } = props;
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <Grid direction="column" container alignItems="flex-start">
        <Grid direction="row" container alignItems="center" justify="space-between">
          <h4 className={classes.title}> Start a Forum..</h4>
          <Button className={classes.button} disabled={disabled} color="transparent" onClick={postForum}>Post</Button>
        </Grid>

          <TextField
            className={classes.input}
            id="standard-textarea"
            multiline
            value={value}
            onChange={handleInput}
          />
        </Grid>
    </Paper>
  );
}

export default ForumForm;
