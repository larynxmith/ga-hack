import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

const Home = props => {
    const classes = useStyles();
  return (
    <div>
      <header className="App-header">
        <div className="head-title">
          <h1>Welcome Adventurer</h1>
        </div>
      </header>
      <div className="home-container">
        <div className="text-box">
                <Paper className={classes.root}>
                    <Typography variant="h5" component="h3">
                        Create Your Group
                    </Typography>
                    <Typography component="p">
                          Make a guild for all adventurers to join and add their Heroes
                    </Typography>
                </Paper>
                <br />
                <Paper className={classes.root}>
                    <Typography variant="h5" component="h3">
                          Create Your Hero
                    </Typography>
                    <Typography component="p">
                        Use our list of presets from 5th edition to form your character, and add a backstory
                </Typography>
                </Paper>
                <br />
                <Paper className={classes.root}>
                    <Typography variant="h5" component="h3">
                          Access During Your Adventure
                    </Typography>
                    <Typography component="p">
                        Look at your Hero to remind yourself why you adventure
                </Typography>
                </Paper>
        </div>
      </div>
    </div>
  )
}

export default Home
