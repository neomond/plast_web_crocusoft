import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Select,
  MenuItem,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import search from "../assets/icons/search.svg";
import logo from "../assets/icons/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const handleLanguageChange = (language: any) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setDrawerOpen(false)}
      onKeyDown={() => setDrawerOpen(false)}
    >
      <List>
        {[
          { label: "home", path: "/" },
          { label: "buy", path: "/webuy" },
          { label: "products", path: "/ourproducts" },
          { label: "instruments", path: "/instruments" },
          { label: "about", path: "/aboutus" },
          { label: "contact", path: "/contact" },
        ].map((item) => (
          <ListItem key={item.label} component={Link} to={item.path}>
            <ListItemText primary={t(item.label)} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="absolute" style={styles.appBar} elevation={0}>
      <Toolbar
        style={{
          ...styles.navbarItem,
          padding: isMobile ? "20px 20px" : "40px 100px",
        }}
      >
        <Box>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </Box>
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          {drawerList()}
        </Drawer>
        <Box
          style={{ ...styles.navMiddle, display: isMobile ? "none" : "flex" }}
        >
          {[
            { label: "home", path: "/" },
            { label: "buy", path: "/webuy" },
            { label: "products", path: "/ourproducts" },
            { label: "instruments", path: "/instruments" },
            { label: "about", path: "/aboutus" },
            { label: "contact", path: "/contact" },
          ].map((item, index, array) => (
            <Box sx={styles.inlineSpanStyle} key={item.label}>
              <Link to={item.path}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: 14, textTransform: "uppercase" }}
                >
                  {t(item.label)}
                </Typography>
              </Link>
              {index !== array.length - 1 && (
                <span style={styles.spandots}></span>
              )}
            </Box>
          ))}
        </Box>
        <Box>
          <Box style={styles.buttonContainer}>
            <Link to="/search">
              <Button>
                <img src={search} alt="Search" />
              </Button>
            </Link>
            <Select
              value={selectedLanguage}
              onChange={(event) => handleLanguageChange(event.target.value)}
              sx={styles.select}
            >
              <MenuItem value="en">En</MenuItem>
              <MenuItem value="az">Az</MenuItem>
            </Select>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const styles: any = {
  appBar: {
    backgroundColor: "transparent",
    gap: 10,
  },
  navbarItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "40px 100px",
  },
  navMiddle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    columnGap: 24,
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    columnGap: 16,
  },
  btn: {
    backgroundColor: "#00AD33",
    color: "#fff",
    borderRadius: 8,
  },
  select: {
    color: "#fff",
    backgroundColor: "#00AD33",
    "&:before": {
      borderBottom: "1px solid #fff",
    },
    "&:after": {
      borderBottom: "2px solid #00AD33",
    },
  },
  spandots: {
    backgroundColor: "white",
    borderRadius: "100%",
    width: 4,
    height: 4,
    display: "inline-block",
    margin: "0 5px",
  },
  inlineSpanStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
};

export default Header;
