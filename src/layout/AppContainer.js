import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MenuItem from 'material-ui/MenuItem';
import HomeIcon from 'material-ui/svg-icons/action/home';
import AssessmentIcon from 'material-ui/svg-icons/action/assessment';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import AppBar from 'material-ui/AppBar';
import { orange500, lightBlueA400, white, lightBlack, black } from 'material-ui/styles/colors';

require('../styles/App.scss');

const theme = getMuiTheme({
  palette: {
    primary1Color: orange500,
    accent1Color: lightBlueA400,
    textColor: lightBlack
  },
  tabs: {
    backgroundColor: white,
    textColor: lightBlack,
    selectedTextColor: black
  },
  toolbar: {
    backgroundColor: white
  },
  inkBar: {
    backgroundColor: orange500
  }
});

const styles = {
  fab: {
    bottom: 20,
    left: 'auto',
    margin: 0,
    right: 20,
    top: 'auto',
    position: 'fixed',
    zIndex: 999
  }
};

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openDrawer: false
    };
  }

  handleDrawerItemTouch = (route) => {
    browserHistory.replace(`/${route}`);
    this.setState({ openDrawer: false });
  }

  handleMenuItemTouch = (route) => {
    window.location = route;
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div className="app">
          <AppBar
            iconElementRight={
              <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              >
                <MenuItem onTouchTap={() => this.handleMenuItemTouch('https://github.com/dipernaa')} primaryText="Github"/>
                <MenuItem onTouchTap={() => this.handleMenuItemTouch('http://www.linkedin.com/in/anthonyjdiperna')} primaryText="LinkedIn"/>
              </IconMenu>
            }
            onLeftIconButtonTouchTap={() => this.setState({ openDrawer: !this.state.openDrawer })}
            title="Tony DiPerna"
          />
          <Drawer
            docked={false}
            open={this.state.openDrawer}
            onRequestChange={(openDrawer) => this.setState({ openDrawer })}
          >
            <MenuItem leftIcon={<HomeIcon/>} onTouchTap={() => this.handleDrawerItemTouch('')}>Home</MenuItem>
            <MenuItem leftIcon={<AssessmentIcon/>} onTouchTap={() => this.handleDrawerItemTouch('resume')}>Resume</MenuItem>
          </Drawer>
          {this.props.children}
          <FloatingActionButton href="mailto:dipernaa531@gmail.com" secondary style={styles.fab}>
            <EmailIcon/>
          </FloatingActionButton>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default AppContainer;

/* const AppContainer = (props) => (
  <MuiThemeProvider muiTheme={theme}>
    <div className="app">
      <div className="app-content">
        {props.children}
      </div>
      <BottomNavigation className="bottom-nav">
        <BottomNavigationItem
          label="Home"
          icon={<HomeIcon />}
          onTouchTap={() => browserHistory.replace('/')}
        />
        <BottomNavigationItem
          label="Resume"
          icon={<AssessmentIcon />}
          onTouchTap={() => browserHistory.replace('/resume')}
        />
      </BottomNavigation>
    </div>
  </MuiThemeProvider>
); */
