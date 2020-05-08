import React, { useEffect, useState } from 'react'
import { CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: 'green',
  }
}));

const ForumHeading = (props) => {
  const { forum } = props;
  const classes = useStyles();
  const [owner, setOwner] = useState({});
  const [loaded, setLoaded] = useState(false);
  var created = new Date(forum.createdAt);
  created = created.toLocaleString();

  useEffect(() => {
      axios.get("http://localhost:8000/api/users/" + forum.ownerId)
        .then((res) => {
          setOwner(res.data);
          setLoaded(true);
        })
        .catch(err => console.log(err));
  }, [forum]);

  if (loaded) {
    return (
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {owner.firstName.charAt(0)}{owner.lastName.charAt(0)}
          </Avatar>
        }
        title={owner.firstName + ' ' + owner.lastName + "'s forum on " + forum.topic}
        subheader={created}
      />
    );
  } else {
    return(
      <CardHeader />
    );
  }
}

export default ForumHeading;
