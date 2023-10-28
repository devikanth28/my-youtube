import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage';
import WatchPage from '../components/WatchPage';
import YoutubeRoute from './YoutubeRoute';

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<YoutubeRoute component={HomePage} />} />
        <Route  path='/watch' element={<YoutubeRoute component={WatchPage}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterPage;
