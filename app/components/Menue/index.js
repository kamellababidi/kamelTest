import React from 'react';
import './_menue.css';
import men1 from '../../images/ic_menu1.svg'
import men1active from '../../images/ic_menu1_active.svg'
import men2 from '../../images/ic_menu2.svg'
import men2active from '../../images/ic_menu2_active.svg'
import men3 from '../../images/ic_menu3.svg'
import men3active from '../../images/ic_menu3_active.svg'
import men4 from '../../images/ic_menu4.svg'
import men4active from '../../images/ic_menu4_active.svg'
import men5 from '../../images/ic_logout.svg'
import men5active from '../../images/ic_logout_active.svg'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';

function Menue() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(0);
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
  return (
    <div className='menue-container'>
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
          <ListItem className={classes.listItemContainer} button
            classes={{
              selected: classes.selected
            }}
            selected={selectedIndex === 4}
            onClick={event => handleListItemClick(event, 4)}
          >
            <ListItemText className={classes.listText} classes={{ secondary: selectedIndex === 4? classes.whiteColor: classes.grayColor }} secondary="عنوان خامس"/>
            <ListItemIcon className={classes.iconContainer}>
              <img className='icon' src={selectedIndex === 4 ? men5active: men5} />
            </ListItemIcon>
          </ListItem>
        </List>
    </div>
  );
}

export default Menue;


const useStyles = makeStyles({
    listItemContainer: {
      height: 40,
      width: '97%',
      paddingRight: 20,
      marginRight: 30,
      '&$selected': {
        backgroundColor: '#03a1fc'
      },
      borderRadius: 3,
      marginTop:10,
      marginLeft: 10,
      marginRight: 10,
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
      color: '#ffffff',
    },
    grayColor: {
      color: '#8f8f8f'
    },
  });