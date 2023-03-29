import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";

import "./navbar.css";

// import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack";

import { ThemeProvider } from "@emotion/react";
import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../utils/constants";
import Navitem from "./Navitem";

import SideModals from "../Side_Modal/SideModals";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";


const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: red["500"],
    },
    secondary: {
      // This is green.A700 as hex.
      main: red["A700"],
    },
  },
});



const NavBar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const quantityItems = useSelector((state: RootState) => state.cart.items)
  // const [countLabel, setCountLabel] = useState(quantityItems.length)


  return (
    <div className="navbar">
      <div className="logo">
        <img className="logoImg" src="./assets/Logo.png" alt="navLogo" />
        <b>Space Shoes</b>
      </div>
      <Stack
        spacing={4}
        direction="row"
        className="navLists"
        aria-label="text button group"
      >
        <ThemeProvider theme={theme}>
          {navItems.map((item) => (
            <Navitem key={item.route} item={item} />
          ))}
        </ThemeProvider>
      </Stack>
      <div className="navIcons">
        <div className="navSearch">
          <IconButton color="inherit" className="navSearchIcon">
            <SearchIcon />
          </IconButton>
          <input
            type="search"
            placeholder="Search"
            className="navSearchInput"
          />
        </div>
        <IconButton color="inherit" className="navIcon">
          <FavoriteBorderIcon />
        </IconButton>

        <IconButton
          color="inherit"
          className={`cartIcon ${cartOpen ? "active" : null}`}
          onClick={() => setCartOpen((!cartOpen))}
        >
          <ShoppingCartOutlinedIcon />
          {/* {countLabel > 0 ? <label className="navCartLabel">{quantityItems.length}</label> : null} */}
          <label className="navCartLabel">{quantityItems.length}</label>
        </IconButton>

        {
          cartOpen
            ?
            <SideModals
              setCartOpen={setCartOpen}
              cartOpen={cartOpen}
            />
            :
            null
        }

        <IconButton
          color="inherit"
          className={`cartIcon ${accountOpen ? "active" : null}`}
          onClick={() => setAccountOpen((!accountOpen))}
        >
          <AccountCircleIcon />
        </IconButton>

        {accountOpen ? (
          <div className="window_account">
            <Link to="/log in" className="log_in">
              Log In
            </Link>
            <Link to="/sign up" className="sign_up">
              Sign up
            </Link>
          </div>
        )
          :
          null
        }
      </div>
    </div>
  );
};

export default NavBar;
