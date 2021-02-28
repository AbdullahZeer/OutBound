import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    // position: 'relative',
    // backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(2, 0),
    backgroundColor:'rgba(0,0,0,.6)' ,

  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const footerStyle = `blurred ${classes.footer}`;
  return (
    <footer className={footerStyle}>
      <Container maxWidth="lg">
        {/* <Typography variant="h6" align="left" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="left" color="textSecondary" component="p">
          {description}
        </Typography> */}
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};