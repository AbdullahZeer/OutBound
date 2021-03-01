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
import background from '../imgs/background.svg'
import {  Parallax } from 'react-parallax';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(0),
    justifyContent:'center'
  },
  background: {
    position:'absolute',
    justifyContent:'center',
    alignContent:'center',

    // height: 1000,
    [theme.breakpoints.down('sm')]: {
      // height: 1000,
      },
    // width:'90%',
    // left:"0"
  },
  screnHeigt:{
    height: 900,
    [theme.breakpoints.up('sm')]: {
    height: 1080,
    },
    [theme.breakpoints.up('xl')]: {
      height: 1444,
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
  { title: 'Services', url: 'Services' },
  { title: 'How Do We Work', url: 'HowDoWeWork' },
  { title: 'Contact Us', url: 'ContactUs' },

];

const mainFeaturedPost = {
  title: 'OUTBOUND',
  slogan : 'INTERACTIVE',
  description:
    "Outbound  is a game development and consultation studio located in Riyadh Saudi Arabia, striving to create well crafted games and immersive experiences",
};


const sidebar = {
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();
  var ParallaxNum = 150;
  if (window.innerWidth<400){
    ParallaxNum = 400;
  }
  // console.log(ParallaxNum);
  return (
    <React.Fragment>

      <StarfieldAnimation
        className={classes.screnHeigt}
        numParticles = '200'
        style={{
          position: 'fixed',
          width: '100%',
          backgroundColor: 'rgba(0,0,0,.5)',
        }}
      />
      <CssBaseline />
      <Container maxWidth="xl">

        <Container>
          <Header title="Blog" sections={sections} />
        </Container>
        <Container maxWidth="xl">
        <Parallax className={classes.background} bgImage={background} strength={ParallaxNum}>
            <Grid container className={classes.mainGrid}>
            {/* <img className={classes.background} src={background} alt="Canvas background"></img> */}
            <MainFeaturedPost post={mainFeaturedPost} />
            </Grid>
        </Parallax>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Sidebar
              title={sidebar.title}
              sections={sections}
              description={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
        </Container>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}