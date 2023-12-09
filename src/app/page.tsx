'use client';
import AboutTheAuthor from '@/Components/AboutTheAuthor/AboutTheAuthor';
import Book from '@/Components/Book/Book';
import Contact from '@/Components/Contact/Contact';
import Excerpt from '@/Components/Excerpt/Excerpt';
import NavBar from '@/Components/NavBar/NavBar';
import { Box, Grid } from '@mui/material';
import { useRef, useState } from 'react';

const Home = () => {
  const [showExcerpt, setShowExcerpt] = useState(false);
  const toggleShowExcerpt = (show: boolean) => {
    setShowExcerpt(show);
  };
  return (
    <Box>
      <NavBar toggleShowExcerpt={toggleShowExcerpt}></NavBar>
      {showExcerpt ? (
        <Excerpt></Excerpt>
      ) : (
        <Grid container>
          <Book></Book>
          <AboutTheAuthor></AboutTheAuthor>
          <Contact></Contact>
        </Grid>
      )}
    </Box>
  );
};

export default Home;
