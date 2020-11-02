import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';
import StarfieldAnimation from 'react-starfield-animation';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    justifyContent:'center'
  },
  screnHeigt:{
    height: 900,
    [theme.breakpoints.up('sm')]: {
    height: 1080,
    },
  },
  "@global": {
    html: {
      fontSize: '0.8em',
      [theme.breakpoints.up("sm")]: {
        fontSize: '1.4em'
      },
    }
  }
}));

const sections = [
  { title: 'About Us', url: '#' },
  { title: 'Sevices', url: '#' },
  { title: 'Goals', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Contact Us', url: '#' },

];

const mainFeaturedPost = {
  title: 'OUTBOUND',
  slogan : 'INTERACTIVE',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
};


const sidebar = {
  title: 'About Us',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();
  
  return (
    <React.Fragment>

      <StarfieldAnimation
        className={classes.screnHeigt}
        numParticles = '200'
        style={{
          position: 'fixed',
          width: '100%',
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <CssBaseline />
      <Container maxWidth="lg">
        <Container maxWidth="md">
          <Header title="Blog" sections={sections} />
        </Container>
        <Container maxWidth="xl">
          <Grid container className={classes.mainGrid}>
          <MainFeaturedPost post={mainFeaturedPost} />
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </Container>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}