import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';
import LocalDrinkOutlinedIcon from '@mui/icons-material/LocalDrinkOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'grey' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function CustomizedMenus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedItem, setSelectedItem] = React.useState('Units');
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setSelectedItem(event.currentTarget.innerText);
    props.setProduct((prevState) => {
      return {...prevState, type: event.currentTarget.innerText}
    })
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {selectedItem}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple id="demo-customized-button" style={{ color: "#80bdd2" }}>
          <CookieOutlinedIcon />
          pcs
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple id="demo-customized-button" style={{ color: "#80bdd2" }}>
          <ScaleOutlinedIcon />
          kg
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple id="demo-customized-button" style={{ color: "#80bdd2" }}>
          <ScaleOutlinedIcon />
          grams
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />  
        <MenuItem onClick={handleClose} disableRipple id="demo-customized-button" style={{ color: "#80bdd2" }}>
          <LocalDrinkOutlinedIcon />
          liters
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple id="demo-customized-button" style={{ color: "#80bdd2" }}>
          <LocalDrinkOutlinedIcon />
          ml
        </MenuItem>
      </StyledMenu>
    </div>
  );
}