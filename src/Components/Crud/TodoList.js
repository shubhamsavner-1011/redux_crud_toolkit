import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../Crud/todoList.css'
import { AddItem } from './AddItem';
import { ShowItem } from './ShowItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    marginTop:'30px',
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
    width: 700
  },
}));

export default function TodoList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container  className='mainDiv'>
      <Paper className={classes.paper}>
        <Grid item xs={6} className='addItem'>
          
          <AddItem/>
         
        </Grid>
        <Grid container  className='mainDiv' >
        <Grid item xs={6}>
              <ShowItem/>
        </Grid>
        </Grid>
        </Paper>
      </Grid>

     
    </div>
  );
}
