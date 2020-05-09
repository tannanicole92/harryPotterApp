import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import ForumHeading from './ForumHeading';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 600,
    backgroundColor: '#3f414e',
    color: 'white',
    marginBottom: '1em',
  },
  content: {
    paddingTop: '0px',
    paddingLeft: '72px',
  }
}));

const ForumList = (props) => {
  const { forums } = props;
  const classes = useStyles();

  return (
    <Grid direction="column" container alignItems="center">
      { forums.map((forum, i) => (

        <Card key={i} className={classes.root}>
          <Grid direction="column" container alignItems="flex-start" justify="space-around">
            <ForumHeading forum={forum} />
            <CardContent className={classes.content}>
              <Typography variant="body2" color="initial" component="p">
                {forum.message}
              </Typography>
            </CardContent>
          </Grid>
        </Card>
      ))}
    </Grid>
  );


}

export default ForumList;
