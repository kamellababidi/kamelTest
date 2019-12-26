import React from 'react';
import './_header.css';
import { useMediaQuery } from 'react-responsive'
import logo from '../../images/logo.png';
import avatar from '../../images/ic_avatar.png'
import men1 from '../../images/ic_menu1.svg'
import men1active from '../../images/ic_menu1_active.svg'
import men2 from '../../images/ic_menu2.svg'
import men2active from '../../images/ic_menu2_active.svg'
import men3 from '../../images/ic_menu3.svg'
import men3active from '../../images/ic_menu3_active.svg'
import men4 from '../../images/ic_menu4.svg'
import men4active from '../../images/ic_menu4_active.svg'
import alert from '../../images/ic_alert.svg'
import menue from '../../images/ic_menu.svg'
import search from '../../images/ic_search.svg'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

function Header() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
  <div>
    <Desktop>
      <div className='header-desktop'>
        <img src={logo} />
        <div className='avatar-container'>
          <img className='avatar' src={avatar} />
          <p className='avatar-text'>الاسم</p>
        </div>
        <div>
        <List component="nav" aria-label="contacts">
          <ListItem className={classes.listItemContainer} button
            classes={{
              selected: classes.selected
            }}
            selected={selectedIndex === 0}
            onClick={event => handleListItemClick(event, 0)}
          >
            <ListItemText className={classes.listText} classes={{ secondary: selectedIndex === 0? classes.whiteColor: classes.grayColor }} secondary="عنوان اول"/>
            <ListItemIcon className={classes.iconContainer}>
              <img className='icon' src={selectedIndex === 0 ? men1active: men1} />
            </ListItemIcon>
          </ListItem>
          <ListItem className={classes.listItemContainer} button
            classes={{
              selected: classes.selected
            }}
            selected={selectedIndex === 1}
            onClick={event => handleListItemClick(event, 1)}
          >
            <ListItemText className={classes.listText} classes={{ secondary: selectedIndex === 1? classes.whiteColor: classes.grayColor }} secondary="عنوان ثاني"/>
            <ListItemIcon className={classes.iconContainer}>
              <img className='icon' src={selectedIndex === 1 ? men2active: men2} />
            </ListItemIcon>
          </ListItem>
          <ListItem className={classes.listItemContainer} button
            classes={{
              selected: classes.selected
            }}
            selected={selectedIndex === 2}
            onClick={event => handleListItemClick(event, 2)}
          >
            <ListItemText className={classes.listText} classes={{ secondary: selectedIndex === 2? classes.whiteColor: classes.grayColor }} secondary="عنوان ثالث"/>
            <ListItemIcon className={classes.iconContainer}>
              <img className='icon' src={selectedIndex === 2 ? men3active: men3} />
            </ListItemIcon>
          </ListItem>
          <ListItem className={classes.listItemContainer} button
            classes={{
              selected: classes.selected
            }}
            selected={selectedIndex === 3}
            onClick={event => handleListItemClick(event, 3)}
          >
            <ListItemText className={classes.listText} classes={{ secondary: selectedIndex === 3? classes.whiteColor: classes.grayColor }} secondary="عنوان رابع"/>
            <ListItemIcon className={classes.iconContainer}>
              <img className='icon' src={selectedIndex === 3 ? men4active: men4} />
            </ListItemIcon>
          </ListItem>
        </List>
        </div>

      </div>
    </Desktop>
    <Tablet>
      <div className='header-tablet'>
        <img src={alert} className='alert' />
        <img src={logo} />
        <img src={menue} className='menue' />
      </div>
    </Tablet>
    <Mobile>
      <div className='header-mobile-container'>
        <div className='header-mobile'>
          <img src={alert} className='alert-small' />
          <img src={logo} className='logo-small'/>
          <img src={menue} className='menue-small' />
        </div>
        <div className='search-container'>
          <img src={search} className='search' />
          <p className='search-text'>بحث</p>
        </div>

      </div>
    </Mobile>
  </div>
  );
}

export default Header;



const useStyles = makeStyles({
  listItemContainer: {
    height: 40,
    paddingRight: 0,
    marginRight: 0,
    '&$selected': {
      backgroundColor: '#03a1fc'
    },
    borderRadius: 3
  },
  listText: {
    textAlign: 'right',
    color: 'red',
  },
  iconContainer: {
    justifyContent: 'flex-end',
  },
  icon: {
    width: 10,
  },
  highlight: {
    backgroundColor: 'red',
  },
  selected: {
    background: "#03a1fc"
  },
  whiteColor: {
    color: '#ffffff'
  },
  grayColor: {
    color: '#8f8f8f'
  },
});