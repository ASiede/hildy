import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button, Link } from '@mui/material';
import { useRouter } from 'next/navigation';

const pages = [
  { name: 'ABOUT THE BOOK', ref: '#about-the-book' },
  { name: 'ABOUT THE AUTHOR', ref: '#about-the-author' },
  { name: 'CONTACT', ref: '#contact' },
];

// router.push(`/account/${subNav}`);

const NavBar = ({ toggleShowExcerpt }: { toggleShowExcerpt: any }) => {
  const router = useRouter();

  return (
    <AppBar
      id='nav-bar'
      position='static'
      color='primary'
      sx={{ height: '125px', display: 'flex', justifyContent: 'center' }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Button href={'#nav-bar'} onClick={() => toggleShowExcerpt(false)}>
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
          </Button>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
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
                onClick={() => toggleShowExcerpt(false)}
              >
                {page.name}
              </Button>
            ))}
            <Button
              key={'excerpt'}
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                fontSize: '20px',
              }}
              onClick={() => toggleShowExcerpt(true)}
            >
              {'EXCERPT'}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
