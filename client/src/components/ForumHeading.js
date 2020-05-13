import React, { useEffect, useState } from 'react'
import { CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  subHeader: {
    color: 'white',
    opacity: .5,
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

  const getStyle = (owner) => {
    return {
      backgroundColor: owner.primaryColor || 'grey',
      color: owner.secondaryColor || 'black'
    };
  };

  if (loaded) {
    return (
      <CardHeader
        avatar={
          <Avatar style={getStyle(owner)} aria-label="recipe">
            {owner.firstName.charAt(0)}{owner.lastName.charAt(0)}
          </Avatar>
        }
        title={owner.firstName + ' ' + owner.lastName + "'s forum on " + forum.topic}
        subheader={
          <span className={classes.subHeader}>{created}</span>
        }
      />
    );
  } else {
    return (
      <CardHeader />
    );
  }
}

export default ForumHeading;
