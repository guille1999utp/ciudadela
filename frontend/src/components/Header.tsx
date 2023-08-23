import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    '&:hover': { cursor: 'pointer' },
  },
  name: {
    '&:hover': { cursor: 'pointer' },
    margin:"auto"
  }
}));

const Header = () => {
  const classes = useStyles();


  return (
    <AppBar position="relative" style={{marginBottom:"40px"}}>
      <Toolbar>
        <Typography
          className={classes.name}
          variant="h6"
          color="inherit"
          noWrap
          
        >
          Rick and Morty (Human Character)
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;