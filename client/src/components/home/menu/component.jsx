import React from 'react'
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';


const MenuComponent=({
    handleClick,
    open
})=>(
    <Drawer
    type="temporary"
    open={open}
  >
    
    <List>
        <ListItem disableGutters={true} style={{display: 'block', margin:'0 auto', textAlign:'-webkit-center'}} >
              <Avatar size='100'
                 alt="Avatar" src="https://pbs.twimg.com/profile_images/425000350202867713/omeMN2VM.jpeg" />
        </ListItem>

      <ListItemText style={{textAlign:'center'}} primary="Yessica"/>
      <Divider light style={{marginBottom:'50px'}}/>
      
      <ListItem button  component="listado" style={{textAlign:'center'}}>
        <ListItemText primary="Listado de grietas" />
      </ListItem>
      <ListItem button component="publica" style={{textAlign:'center'}}>
        <ListItemText primary="Publica Tu Grieta" />
      </ListItem>
      <ListItem button component="revisa" style={{textAlign:'center'}}>
        <ListItemText primary="Revisa Grietas" />
      </ListItem>
      <ListItem button component="acerca" style={{textAlign:'center'}}>
        <ListItemText primary="Acerca" />
      </ListItem>
      <Button raised style={{margin:'15px', marginTop:'50px'}} onClick={handleClick}>
      Cerrar Menu
    </Button>
    </List>


    
  </Drawer>
)


export default MenuComponent;