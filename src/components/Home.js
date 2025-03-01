import React from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();

  const goToPagination = () => {
    navigate('/pagination');
  };

  const goToInProgress = () => {
    navigate('/inprogress');
  };

  const goToInfiniteScroll = () => {
    navigate('/infinite-scroll');
  };

  const goToProgressBar = () => {
    navigate('/progress-bar');
  };

  const goToStarRating = () => {
    navigate('/star-rating');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <div style={{ display: 'flex', gap: '50px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50px',
            width: '200px',
            backgroundColor: 'grey',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
          onClick={goToPagination}
        >
          Pagination
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50px',
            width: '200px',
            backgroundColor: 'grey',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
          onClick={goToInfiniteScroll}
        >
          Infinite Scroll
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50px',
            width: '200px',
            backgroundColor: 'grey',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
          onClick={goToInProgress}
        >
          In Progress Work
        </div>
      </div>
      <div style={{ display: 'flex', gap: '50px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50px',
            width: '200px',
            backgroundColor: 'grey',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
          onClick={goToProgressBar}
        >
          Progress Bar
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50px',
            width: '200px',
            backgroundColor: 'grey',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
          onClick={goToStarRating}
        >
          Star Rating
        </div>
      </div>
    </div>
  );
};

export default Home;
