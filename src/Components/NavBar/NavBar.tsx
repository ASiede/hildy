import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from '@mui/material';

const pages = [
  { name: 'ABOUT THE BOOK', ref: '/#about-the-book' },
  { name: 'ABOUT THE AUTHOR', ref: '/#about-the-author' },
  { name: 'CONTACT', ref: '/#contact' },
  { name: 'EXCERPT', ref: '/excerpt' },
];

const NavBar = () => {
  return (
    <AppBar
      position='static'
      color='primary'
      sx={{ height: '125px', display: 'flex', justifyContent: 'center' }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Link href={'/'}>
            <Typography
              variant='h4'
              noWrap
              component='a'
              color='secondary'
              sx={{
                mr: 2,
                display: { md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
              }}
            >
              RICHARD FINN
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.name}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  fontSize: '20px',
                }}
                href={page.ref}
              >
                {page.name}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
