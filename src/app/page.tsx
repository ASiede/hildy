'use client';
import AboutTheAuthor from '@/Components/AboutTheAuthor/AboutTheAuthor';
import Book from '@/Components/Book/Book';
import Contact from '@/Components/Contact/Contact';
import { Grid } from '@mui/material';
import { useRef } from 'react';

const Home = () => {
  return (
    <Grid container>
      <Book></Book>
      <AboutTheAuthor></AboutTheAuthor>
      <Contact></Contact>
    </Grid>
  );
};

export default Home;
