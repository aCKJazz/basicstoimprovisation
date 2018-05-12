import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List, {ListItem} from 'material-ui/List';

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
};

export class Sidebar extends React.PureComponent {
  render () {
    const {
      classes
    } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem primary='Home' />
          <ListItem primary='Lessons' />
          <ListItem primary='Media' />
          <Divider />
          <ListItem primary='About' />
        </List>
      </div>
    );

    return (
      <div>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role='button'
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(Sidebar);
