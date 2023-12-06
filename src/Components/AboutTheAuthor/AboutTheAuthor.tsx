import { Box, Card, CardMedia, Divider, Grid, Typography } from '@mui/material';

const AboutTheAuthor = () => {
  return (
    <Grid item xs={12}>
      <Divider id='about-the-author' sx={{ margin: '20px' }}>
        ABOUT THE AUTHOR
      </Divider>
      <Grid
        item
        container
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Grid item xs={12} md={6} sx={{ margin: '30px' }}>
          <Typography variant='body1' sx={{ margin: '20px', fontSize: '30px' }}>
            Richard Finn was born in Manhattan and is a lifelong resident of the
            area. Started in 2020 as a pandemic shutdown project, Hildy’s
            Promise is his first full-length novel. A long and accomplished
            career as a sports journalist for many leading newspapers and news
            organizations, including USA Today, New York Times, Chicago Tribune
            and Associated Press, has honed a crisp and clear writing style.
            Being a fan from childhood of suspense, thriller, crime novels and
            movies has inspired this tale of greed, murder and duplicity.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              padding: '30px',
            }}
          >
            <Card
              sx={{
                height: '450px',
                width: '300px',
                bgcolor: 'black',
                border: '2px white solid',
              }}
            >
              <CardMedia
                component='img'
                image='https://asiede.github.io/hildy//AuthorPhoto.jpg' // TODO: update dynamic bas path so its /hildy/AuthorPhoto.jpg for prod
                alt='Richard Finn Photo'
              />
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutTheAuthor;
