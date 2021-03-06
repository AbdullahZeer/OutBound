import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Services from './sections/Services';
import HowDoWeWork from './sections/HowDoWeWork';
import Contactus from './sections/Contactus';

const useStyles = makeStyles((theme) => ({
  section:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1),
    },
  },
  headers:{
    fontWeight:'bolder',
    marginTop: theme.spacing(6),
  },
  sidebarDarkBox: {
    minHeight: 400,
    padding: theme.spacing(3),
    paddingRight: theme.spacing(0),
    paddingLeft: theme.spacing(0),
    marginBottom: theme.spacing(8),
    marginTop: theme.spacing(0),
    backgroundColor:'rgba(0,0,0,0)' ,
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(14),
      padding: theme.spacing(6),
    },
  },
  sidebarSection: {
    marginTop: theme.spacing(6),
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { sections,social } = props;
  const darkBlurr = `blurred ${classes.sidebarDarkBox}`;
  
  return (
    <Container className={classes.section}>
    <Grid item xs={12} md={12}>
      {
        sections.map((section)=>(
            
          <section id={section.url}>
              <Typography  className={classes.headers} variant="h4" gutterBottom>
                {section.title}
              </Typography>
            <Paper elevation={0} className={darkBlurr}>
                {(() => {
                    switch(section.url) {
                      case 'Services':
                        return <Services/>
                        break;
                      case 'HowDoWeWork':
                        return <HowDoWeWork/>
                        break;
                      case 'ContactUs':
                        return <Contactus/>
                        break;
                      default:
                  }
                })()}
            </Paper>
          </section>

        ))
      }
      {/* {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))} */}
    </Grid>
    </Container>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  sections: PropTypes.array,
  title: PropTypes.string,
};