import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  alignContainer:{
    // alignItems: 'center',
    // justifyContent: 'center',
    // position: 'relative',
    
  },
  RowContainerLeft:{
    alignSelf:'flex-start',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    
  },
  RowContainerRight:{
    alignSelf:'flex-end',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),

    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },

  },
  alignContent:{
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const sevices = [
    { title: 'AR', desc: 'Expand your reality Interactive experience where objects appear in the real world' },
    { title: 'VR', desc: 'Warp to other universes Simulated experience that can be either similar or complete different form the real world' },
    { title: 'Games', desc: 'Interact through space and time A game is a structured fun experience no matter the medium or form of play.' }  
  ];
  return (
    <Grid   container direction="column" justify="center" alignItems="center" className={classes.alignContainer} xs={12} md={12}>
    {
    sevices.map((sevice , index)=>(
      <React.Fragment>

      { index%2 ==0 ? 
        <Grid xs={12} md={6}   className={classes.RowContainerLeft}>
          <Grid className={classes.alignContent} item xs={12} md={12}>
          <Typography variant='h5' gutterBottom>{sevice.title}</Typography>
          </Grid>
          <Grid className={classes.alignContent} item xs={12} md={12}>
          <Typography variant='h6' gutterBottom>{sevice.desc}</Typography>
          </Grid>
        </Grid>

        :
        <Grid xs={12} md={6}   className={classes.RowContainerRight}>
          <Grid className={classes.alignContent} item xs={12} md={12}>
          <Typography variant='h5' gutterBottom>{sevice.title}</Typography>
          </Grid>
          <Grid className={classes.alignContent} item xs={12} md={12}>
          <Typography variant='h6' gutterBottom>{sevice.desc}</Typography>
          </Grid>
        </Grid>
      }
      </React.Fragment>

    ))}
    </Grid>
  );
}
