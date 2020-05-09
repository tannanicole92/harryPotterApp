import React from 'react';
import { navigate } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from '../components/widgets/Button';
import Header from '../components/Header';
import styles from "../assets/jss/components/navigationStyle.js";

const Navigation = (props) => {
  const { currentUser, logout } = props;
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div className={classes.section}>
    <div id="navbar" className={classes.navbar}>
      <div className={classes.navigation}>
        <Header fixed changeColorOnScroll={{
          height: 100,
          color: "dark"
        }} brand="Potterheads" color="transparent" rightLinks=
            {
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                {
                  currentUser ?
                  <div>
                    <Button className={classes.navLink} onClick={()=> navigate("/quizzes")} color="transparent">Quizzes</Button>
                    <Button className={classes.navLink} onClick={()=> navigate("/profile/" + currentUser._id)} color="transparent">Profile</Button>
                    <Button className={classes.navLink} onClick={logout} color="transparent">Logout</Button>
                  </div>
                :
                  <div>
                    <Button className={classes.navLink} onClick={()=> navigate("/login")} color="transparent">Login</Button>
                    <Button className={classes.navLink} onClick={()=> navigate("/signup")} color="transparent">Sign Up</Button>
                  </div>
                }
                </ListItem>
              </List>
            }
        />
      </div>
    </div>
    </div>
  );
}

export default Navigation;
