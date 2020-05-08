import React from 'react';
import { Container, Grid } from "@material-ui/core";
import SearchForm from './forms/SearchForm';
import ForumForm from './forms/ForumForm';

const Forums = (props) => {
  const { user } = props
  return (
    <div className="fullHeight">
    <Container maxWidth="md">
    <Grid direction="column" container alignItems="center">
      
        <ForumForm />

      <SearchForm />
      <Grid direction="column" container alignItems="center">
        <div className="bigbackground"></div>
        <div className="bigbackground"></div>
      </Grid>
    </Grid>

    </Container>
    </div>
  );
}

export default Forums;
