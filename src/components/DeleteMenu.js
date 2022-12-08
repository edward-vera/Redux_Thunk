import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MoreVertIcon from '@mui/icons-material/MoreVert'


export default function MenuPopupState(props) {
  const handleClick = () => {
    props.deleteMake(props.index);
  };
  console.log(props);
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <MoreVertIcon variant="contained" {...bindTrigger(popupState)}>
          </MoreVertIcon>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={handleClick}>Delete</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}