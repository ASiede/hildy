import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';

const pages = [
  { name: 'ABOUT THE BOOK', ref: '#about-the-book', showExcerpt: false },
  { name: 'ABOUT THE AUTHOR', ref: '#about-the-author', showExcerpt: false },
  { name: 'CONTACT', ref: '#contact', showExcerpt: false },
  { name: 'EXCERPT', showExcerpt: true },
];

const NavBar = ({ toggleShowExcerpt }: { toggleShowExcerpt: any }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    console.log('open nav');
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleClick = (show: boolean) => {
    toggleShowExcerpt(show);
  };

  return (
    <AppBar
      id='nav-bar'
      position='static'
      color='primary'
      sx={{ height: '125px', display: 'flex', justifyContent: 'center' }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Button href={'#nav-bar'} onClick={() => handleClick(false)}>
            <Typography
              variant='h4'
              noWrap
              component='a'
              color='secondary'
              sx={{
                mr: 2,
                display: { xs: 'none', lg: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
                fontSize: '2rem',
              }}
            >
              RICHARD M. FINN
            </Typography>
          </Button>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', lg: 'none' },
            }}
          >
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
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
              sx={{
                display: { xs: 'block', lg: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Button
                    href={page.ref}
                    onClick={() => handleClick(page.showExcerpt)}
                  >
                    <Typography textAlign='center'>{page.name}</Typography>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            href={'#nav-bar'}
            onClick={() => toggleShowExcerpt(false)}
            variant='h4'
            noWrap
            component='a'
            color='secondary'
            sx={{
              mr: 2,
              display: { xs: 'flex', lg: 'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              fontSize: '2rem',
            }}
          >
            R.M. Finn
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', lg: 'flex' },
              justifyContent: 'space-around',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  fontSize: '20px',
                }}
                href={page.ref}
                onClick={() => handleClick(page.showExcerpt)}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
