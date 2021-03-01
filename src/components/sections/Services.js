import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Ar from '../../imgs/AR.svg'
import Game from '../../imgs/Game.svg'
import Vr from '../../imgs/VR.svg'

const useStyles = makeStyles((theme) => ({
  alignContainer:{
    // alignItems: 'center',
    // justifyContent: 'center',
    // position: 'relative',
    
  },
  image:{
  maxWidth:'60%'    
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
    { title: 'AR', desc: 'Expand your reality', imge:Ar },
    { title: 'VR', desc: 'Warp to other universes', imge:Vr},
    { title: 'Games', desc: 'Interact through space and time', imge:Game },  
  ];
  return (
    <Grid   container  justify="center" alignItems="center" className={classes.alignContainer} xs={12} md={12}>
    {
    sevices.map((sevice , index)=>(
      <React.Fragment>
        <Grid xs={12} md={6}   className={classes.RowContainerLeft}>
          <img className={classes.image} alt="service" src={sevice.imge}></img>
          <Grid className={classes.alignContent} item xs={12} md={12}>
          <Typography variant='h5' gutterBottom>{sevice.title}</Typography>
          </Grid>
          <Grid className={classes.alignContent} item xs={12} md={12}>
          <Typography variant='h6' gutterBottom>{sevice.desc}</Typography>
          </Grid>
        </Grid>
      </React.Fragment>

    ))}
    </Grid>
  );
}
