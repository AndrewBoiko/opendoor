import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

// const headerStyles = css`
//   height: 72px;
//   background-color: #333;
//   color: white;
//   text-align: center;
// `;

// export const Header = () => {
//   return (
//     // <Box component="header" css={headerStyles}>
//     //   <nav>
//     //     <ul>
//     //       <li>
//     //         <Link to="/">Home</Link>
//     //       </li>
//     //       <li>
//     //         <Link to="/page-2">Page 2</Link>
//     //       </li>
//     //     </ul>
//     //   </nav>
//     // </Box>
//     <AppBar css={headerStyles} position="static">
//       <Toolbar variant="dense">
//         <IconButton
//           edge="start"
//           color="inherit"
//           aria-label="menu"
//           sx={{ mr: 2 }}
//         >
//           <MenuIcon />
//         </IconButton>
//         <Typography variant="h6" color="inherit" component="div">
//           Photos
//         </Typography>
//       </Toolbar>
//     </AppBar>
//   );
// };

const pages = ['Page 1', 'Page 2', 'Page 3'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    // Perform login logic here
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Perform logout logic here
  };

  return (
    <AppBar position="static" sx={{ zIndex: 1001, backgroundColor: '#ffffff' }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ backgroundColor: '#ffffff', justifyContent: 'space-between' }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#000000',
              textDecoration: 'none',
            }}
          >
            OPENDOOR
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#000000',
              textDecoration: 'none',
            }}
          >
            OPENDOOR
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            {pages.map((page) => (
              <Button
                variant="text"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {!isLoggedIn && (
            <Button
              variant="text"
              key="login"
              onClick={handleLogin}
              sx={{ my: 2, display: 'block' }}
            >
              Log In
            </Button>
          )}
          {isLoggedIn && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center' }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: '#000000' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
