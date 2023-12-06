import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

const Book = () => {
  return (
    <Grid item xs={12}>
      <Grid
        item
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Button
          variant='contained'
          size='large'
          color='secondary'
          sx={{
            margin: '30px',
            // color: '#A71D31',
            fontSize: '20px',
          }}
        >
          Coming Soon!
        </Button>
      </Grid>
      <Divider id='about-the-book' sx={{ margin: '20px' }}>
        ABOUT THE BOOK
      </Divider>
      <Grid
        item
        container
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Grid item xs={12} md={4} sx={{ margin: '30px' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Card sx={{ maxWidth: '500px' }}>
              <CardMedia
                component='img'
                image='/BookCover.jpg'
                alt="Hildy's Promise Cover Art"
              />
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ margin: '20px' }}>
            <Typography variant='h3'>
              Birdies, Bogeys and Blood flow in this Crime Novel Debut
            </Typography>
            <Typography
              variant='body1'
              sx={{ fontSize: '30px', marginTop: '25px' }}
            >
              Hildy Swanson, a wealthy Westchester County socialite and
              community benefactor, is kidnapped at gunpoint in her home in the
              New York suburbs on a beautiful spring day. After leaving a ransom
              note on the kitchen counter, the two masked kidnappers roughly
              throw her into the trunk of their car and drive to a deserted
              farmhouse. Hildy is locked in the cellar alone and fearful of the
              men’s intentions.
            </Typography>
            <Typography
              variant='body1'
              sx={{ fontSize: '30px', marginTop: '25px' }}
            >
              Because she inherited a considerable fortune after her first
              husband died, Hildy is a tempting mark for the kidnappers. She has
              been generous with her money with local causes, including funding
              an area hospital department. The unit is dedicated to her sister
              who died as a teenager and whom she still mourns.
            </Typography>
            <Typography
              variant='body1'
              sx={{ fontSize: '30px', marginTop: '25px' }}
            >
              When RG Cassidy, Hildy’s husband, returns home, the former golf
              champion finds the strange ransom note ordering him to meet the
              kidnappers for 18 holes of golf to win Hildy’s freedom. The note
              also includes a large cash demand. The next day at the first tee
              Cassidy is told of an unnerving set of rules for the game.
            </Typography>
            <Typography
              variant='body1'
              sx={{ fontSize: '30px', marginTop: '25px' }}
            >
              The case is a challenge for a fast-growing suburban town that has
              drawn two upstate New York cops to its expanding force. But there
              is bad blood between the two lead Swanson case investigators, a no
              nonsense Captain Charlotte McBain and Samuel Garrett, a detective
              with a bad gambling habit. Their tension underlies and complicates
              the case that goes well beyond the rural and suburban boundaries
              of Westchester County.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Book;
