import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import logo from '../imgs/logo.svg'
editimport AnchorLink from 'react-anchor-link-smooth-scroll'

const useStyles = makeStyles((theme) => ({
  logo : {
    maxHeight: '30px',
    margin: theme.spacing(3),
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(5),
      maxHeight: '50px',
    },
  },
  toolbar: {
    // borderBottom: `1px solid ${theme.palette.divider}`,
    paddingLeft: theme.spacing(0),
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-around',
  },
  toolbarLink: {
    color:'#fff',
    textDecoration:'none',
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections } = props;

  return (
    <React.Fragment>.
      {/* <Toolbar className={classes.toolbar}>
      </Toolbar> */}
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      <img className={classes.logo} src={logo} alt="Canvas Logo"></img>
        {sections.map((section) => (
          <AnchorLink
            offset='100'
            href={`#${section.url}`}
            className={classes.toolbarLink}
          >
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
          
          >

            {section.title}
          </Link>
          </AnchorLink>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};