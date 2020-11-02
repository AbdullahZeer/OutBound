import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import logo from '../imgs/logo.svg'

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    marginTop:theme.spacing(13),
    marginBottom:theme.spacing(24),
    [theme.breakpoints.up('sm')]: {
      marginTop:theme.spacing(24),
      marginBottom:theme.spacing(28),
    }
  },
  maintext:{
    justifyContent: 'space-around',
    letterSpacing:'12px',
    [theme.breakpoints.up('sm')]: {
      letterSpacing:'24px',
    }
  },
  logo:{
    maxHeight:'200px',
    marginBottom:theme.spacing(6),

  },
  mainFeaturedPostContent: {
    justifyContent: 'center',
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1),
    },
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Container className={classes.mainFeaturedPost}   >
      {/* Increase the priority of the hero background image */}
      <Grid container>
        <Grid item xs={12} md={12}>
          <div className={classes.mainFeaturedPostContent}>
          {/* <img className={classes.logo} src={logo} alt="Canvas Logo"></img> */}
            <Typography className={classes.maintext} component="h2" variant="h2" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography className={classes.maintext} component="h5" variant="h5" color="inherit" gutterBottom>
              {post.slogan}
            </Typography>
            <Typography subtitle1="h2" color="inherit" paragraph>
              {post.description}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};