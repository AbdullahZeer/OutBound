import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import logo from '../imgs/logo.svg'

const useStyles = makeStyles((theme) => ({
  logo : {
    maxHeight: '50px',
    margin: theme.spacing(3),
    marginLeft: theme.spacing(0)
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingLeft: theme.spacing(0),
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-around',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections } = props;

  return (
    <React.Fragment>.
      <Toolbar className={classes.toolbar}>
      <img className={classes.logo} src={logo} alt="Canvas Logo"></img>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};