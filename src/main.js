import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './components/App';
import './index.css';
import Pagination from './components/Pagination';
import Home from './components/Home';
import InfiniteScroll from './components/InfiniteScroll';
import ProgressBarContainer from './components/ProgressBar/ProgressBarContainer';
import StarRating from './components/StarRating/StarRating';
import SideBar from './components/Sidebar/SideBar';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inprogress" element={<App />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll />} />
        <Route path="/progress-bar" element={<ProgressBarContainer />} />
        <Route path="/star-rating" element={<StarRating />} />
        <Route path="/side-bar" element={<SideBar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
