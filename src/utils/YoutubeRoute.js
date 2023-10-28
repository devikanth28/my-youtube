import React from 'react';
import { Route, RouterProvider } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const YoutubeRoute = ({ component: Component, ...rest }) => {
  return (
      <React.Fragment>
        <Header {...rest} />
        <section className="d-flex">
          <Sidebar {...rest} />
          <div className='flex-grow-1'>
            <Component/>
          </div>
        </section>
      </React.Fragment>
    
  );
};

export default YoutubeRoute;
