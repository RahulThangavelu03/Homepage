
import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "./ThemeContext";

const BRAND_COLOR = "#8DDCDC";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const { dark, toggleTheme } = useContext(ThemeContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const navItems = [
    { label: "Home", type: "link" },
    {
      label: "Services",
      type: "dropdown",
      items: [
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "Cloud Solutions",
        "AI & Automation",
      ],
    },
    {
      label: "Technologies",
      type: "dropdown",
      items: [
        "Open Source",
        "Microsoft Skills",
        "Native Mobile App Development",
        "Hybrid Mobile App Development",
        "QA Automation",
      ],
    },
    { label: "Careers", type: "link" },
    { label: "Contact Us", type: "link" },
  ];

  const toggleDrawer = (value) => () => setOpen(value);

  const openMenu = (event, menuName) => {
    clearTimeout(hoverTimeout);
    setAnchorEl(event.currentTarget);
    setActiveMenu(menuName);
  };

  const closeMenu = () => {
    setHoverTimeout(
      setTimeout(() => {
        setAnchorEl(null);
        setActiveMenu(null);
      }, 120)
    );
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: dark ? "#1b1b1b" : "#ffffff",
          color: dark ? "#f5f5f5" : "#111",
          boxShadow: "none",
          borderBottom: dark ? "1px solid #333" : "1px solid #eee",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>



            
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                letterSpacing: "0.2px",
                fontFamily: "Arial, sans-serif",
                cursor: "pointer",
                transition: "0.2s ease",
                "&:hover": { color: BRAND_COLOR },
              }}
            >
              Vedhanthi Technologies
            </Typography>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 4,
                alignItems: "center",
              }}
            >
              {navItems.map((item) =>
                item.type === "link" ? (
                  <Typography
                    key={item.label}
                    sx={{
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: 500,
                      letterSpacing: "0.2px",
                      color: dark ? "#e6e6e6" : "#333",
                      transition: "0.2s ease",
                      fontFamily: "Arial, sans-serif",
                      "&:hover": { color: BRAND_COLOR },
                    }}
                  >
                    {item.label}
                  </Typography>
                ) : (
                  <Box
                    key={item.label}
                    onMouseEnter={(e) => openMenu(e, item.label)}
                    onMouseLeave={closeMenu}
                  >
                    <Typography
                      sx={{
                        cursor: "pointer",
                        fontSize: "14px",
                        fontWeight: 500,
                        letterSpacing: "0.2px",
                        color: dark ? "#e6e6e6" : "#333",
                        transition: "0.2s",
                        fontFamily: "Arial, sans-serif",
                        "&:hover": { color: BRAND_COLOR },
                      }}
                    >
                      {item.label}
                    </Typography>

                    <Menu
                      anchorEl={anchorEl}
                      open={activeMenu === item.label}
                      onClose={closeMenu}
                      MenuListProps={{
                        onMouseEnter: () => clearTimeout(hoverTimeout),
                        onMouseLeave: closeMenu,
                      }}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      {item.items.map((submenu) => (
                        <MenuItem
                          key={submenu}
                          onClick={closeMenu}
                          sx={{
                            fontFamily: "Arial, sans-serif",
                            fontSize: "14px",
                            "&:hover": {
                              color: BRAND_COLOR,
                              background: dark
                                ? "rgba(255,255,255,0.08)"
                                : "rgba(10,92,255,0.06)",
                            },
                          }}
                        >
                          {submenu}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                )
              )}
            </Box>
          </Box>

          {/* Theme Toggle */}
          <IconButton color="inherit" onClick={toggleTheme} sx={{ mr: 1 }}>
            {dark ? (
              <LightModeIcon style={{ fontSize: 26 }} />
            ) : (
              <Brightness4Icon style={{ fontSize: 26 }} />
            )}
          </IconButton>

          {/* Drawer Button */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: BRAND_COLOR,
            }}
          >
            <IconButton
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ color: "black", ml: 1 }}
              size="large"
            >
              <MenuIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: isMdUp ? 360 : 300,
            display: "flex",
            flexDirection: "column",
            padding: 0,
            fontFamily: "Arial, sans-serif",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
            borderBottom: "1px solid #eee",
          }}
        >
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon sx={{ fontSize: 26 }} />
          </IconButton>
        </Box>

        <Box sx={{ p: 3 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, fontFamily: "Arial, sans-serif" }}
          >
            Vedhanthi Technologies
          </Typography>

          <Typography
            sx={{
              fontWeight: 500,
              color: "#444",
              mb: 1,
              fontFamily: "Arial, sans-serif",
            }}
          >
            WE ARE HERE
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              color: "#555",
              mb: 3,
              fontFamily: "Arial, sans-serif",
            }}
          >
            47A Anandha Bhavanam,
            <br />
            Sasthri Street, LIC Colony,
            <br />
            Selvapuram, Coimbatore - 26.
          </Typography>

          <Typography
            sx={{
              fontWeight: 500,
              color: "#444",
              mb: 1,
              fontFamily: "Arial, sans-serif",
            }}
          >
            CALL & MAIL
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography sx={{ fontSize: "14px", fontFamily: "Arial" }}>
              (91) - 63693 11519
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <EmailIcon sx={{ mr: 1 }} />
            <Typography sx={{ fontSize: "14px", fontFamily: "Arial" }}>
              info@vedhanthitechnologies.com
            </Typography>
          </Box>

          <Typography
            sx={{
              fontWeight: 500,
              color: "#444",
              mb: 1,
              fontFamily: "Arial, sans-serif",
            }}
          >
            FOLLOW US
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton size="small">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                width="26"
                height="26"
                alt="facebook"
              />
            </IconButton>

            <IconButton size="small">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg"
                width="26"
                height="26"
                alt="x-logo"
              />
            </IconButton>

            <IconButton size="small">
              <LinkedInIcon sx={{ fontSize: 26 }} />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

