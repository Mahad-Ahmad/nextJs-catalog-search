import React, { useState } from "react";
import {
  IOSSwitch,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./Header.styles";
import Mobile from "./HeaderMobileMenu";
import {
  AppBar,
  FormControlLabel,
  Box,
  Toolbar,
  Switch,
  Slider,
  Typography,
  Badge,
  Menu,
  IconButton,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { data } from "../../../pages/api/dummyBackendData";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchRange,
  setSearchRange,
} from "../../store/searchRange/searchRangeSlice";
import {
  selectSearchInput,
  setSearchInput,
} from "../../store/searchInput/searchInputSlice";
import {
  selectSearchBoolean,
  setSearchBoolean,
} from "../../store/searchBoolean/searchBooleanSlice";

export default function Header() {
  const _searchRange = useSelector(selectSearchRange);
  console.log(_searchRange);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState([120, 400]);
  const [checked, setChecked] = useState(false);
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  function valuetext(value) {
    return `$${value}`;
  }

  const handleInput = (e) => {
    dispatch(setSearchInput(e));
  };

  const handleRange = (event, newValue) => {
    dispatch(setSearchRange(newValue));
    setValue(newValue);
  };

  const handleSwitch = (event, newValue) => {
    dispatch(setSearchBoolean(newValue));
    setChecked(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ py: 1 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Catalog App
          </Typography>
          <Search sx={{ mr: 5 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={(e) => handleInput(e.target.value)}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* <Typography sx={{ mr: 2 }} variant="h6" noWrap component="div">
              In Stock
            </Typography> */}
            <FormControlLabel
              control={
                <IOSSwitch
                  sx={{ mr: 2 }}
                  checked={checked}
                  onChange={handleSwitch}
                />
              }
              label="In Stock"
            />
          </Box>

          <Box sx={{ flexGrow: { xs: 1, md: 0 } }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Typography variant="paragrapgh" noWrap component="div">
              Price Range
            </Typography>
            <Slider
              sx={{ ml: 3, maxWidth: 300 }}
              color="secondary"
              max={400}
              getAriaLabel={() => "Price Range"}
              value={value}
              onChange={handleRange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={Mobile.mobileMenuId}
              aria-haspopup="true"
              onClick={Mobile.handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* {Mobile.renderMobileMenu} */}
      {/* {Mobile.renderMenu} */}
    </Box>
  );
}
