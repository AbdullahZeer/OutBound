import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    marginTop:theme.spacing(14),
    marginBottom:theme.spacing(24),
    [theme.breakpoints.up('sm')]: {
      marginTop:theme.spacing(24),
      marginBottom:theme.spacing(28),
    }
  },
  description:{
    // marginRight: theme.spacing(1),
    // marginTop: theme.spacing(14),
    // [theme.breakpoints.up('sm')]: {
    //   marginTop: theme.spacing(10),
    //   marginRight: theme.spacing(12),
    // },
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(34),
      marginTop: theme.spacing(3),

    }
  },
  subSection:{

    textAlign:'left',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',    
  },
  outbound:{
    fontWeight:400,
  },
  maintextO:{
    marginLeft: theme.spacing(0),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',    
    letterSpacing:'12px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(32),
      letterSpacing:'24px',
    }
    },
  maintextI:{
    marginLeft: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',    
    letterSpacing:'12px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(34),
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
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1),
    },
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  const slogan = `glow ${classes.maintextI}`;
  const title = `${classes.maintextO} ${classes.outbound}`
  
  return (
    <Container className={classes.mainFeaturedPost}   >
      {/* Increase the priority of the hero background image */}
      <Grid container>
        <Grid item xs={12} md={12}>
          <div className={classes.mainFeaturedPostContent}>
          {/* <img className={classes.logo} src={logo} alt="Canvas Logo"></img> */}
            <Typography className={title}  component="h2" variant="h2" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography className={slogan} component="h5" variant="h5" color="inherit" gutterBottom>
              {post.slogan}
            </Typography>
            <container className={classes.subSection}>
            <Grid item xs={12} md={8}>
            <Typography className={classes.description} subtitle1="h2" color="inherit" paragraph>
              {post.description}
            </Typography>
            </Grid>
            </container>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};