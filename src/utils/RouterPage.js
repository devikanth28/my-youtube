import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage';
import WatchPage from '../components/WatchPage';
import UseMemo from '../hooks/UseMemo';
import YoutubeRoute from './YoutubeRoute';

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<YoutubeRoute component={HomePage} />} />
        <Route  path='/watch' element={<YoutubeRoute component={WatchPage}/>}/>
        <Route exact path='/useMemo' element={<YoutubeRoute component={UseMemo}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterPage;
