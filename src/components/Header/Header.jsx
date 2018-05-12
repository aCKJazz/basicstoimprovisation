import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1
  }
};

export class Header extends React.PureComponent {
  toggleDrawer (side, open) {
    this.setState({
      [side]: open
    });
  }

  render () {
    const {
      classes
    } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position='static' color='default'>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color='inherit'
              aria-label='Menu'
              onClick={this.toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
            <Button>
              Home
            </Button>
            <Button>
              Lessons
            </Button>
            <Button>
              Tracks
            </Button>
            <Button>
              About
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.PropTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
