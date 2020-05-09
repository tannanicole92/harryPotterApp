import React from 'react';
import { Grid } from "@material-ui/core";
import SearchForm from '../components/forms/SearchForm';

import ForumList from '../components/ForumList';

const ForumsView = (props) => {
  const { forums } = props;
  return (
    <Grid direction="column" container alignItems="center">
      <SearchForm />
      <Grid direction="column" container alignItems="center">
        { forums ?
          <ForumList forums={forums} />
          :
          <div>There are no matching forums. Please try again.</div>
        }
      </Grid>
    </Grid>
  );
}

export default ForumsView;
