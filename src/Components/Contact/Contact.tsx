import { Email } from '@mui/icons-material';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        my: '30px',
      }}
    >
      <Divider id='contact'>CONTACT</Divider>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
        <Button
          variant='contained'
          size='large'
          href='mailto:richardfinn57@gmail.com'
          startIcon={<Email />}
        >
          Email the Author
        </Button>
      </Box>
    </Grid>
  );
};

export default Contact;
