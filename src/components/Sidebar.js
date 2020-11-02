import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';

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
  sidebarDarkBox: {
    minHeight: 400,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(6),
    backgroundColor:'rgba(0,0,0,.1)' ,
  },
  sidebarLightBox: {
    minHeight: 400,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(6),
    backgroundColor:'rgba(255,255,255,.1)' ,
  },
  sidebarSection: {
    marginTop: theme.spacing(6),
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { description, social, title } = props;
  const About = `blurred ${classes.sidebarDarkBox}`;
  const Services = `blurred ${classes.sidebarLightBox}`;
  return (
    <Container className={classes.section}>
    <Grid item xs={12} md={12}>
      <Paper elevation={0} className={About}>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Paper elevation={0} className={Services}>
        <Typography variant="h5" gutterBottom>
          Services
        </Typography>
        <Typography>{description}</Typography>
      </Paper>

      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
    </Container>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};