import React, { useEffect, useState } from 'react';
import getData from '../utils/GetData';
import BackButton from '../utilityComponents/BackButton/BackButton';

const InfiniteScroll = () => {
  const [loadedData, setLoadedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [moreData, setMoreData] = useState(true);

  const getDataFromApi = async (page) => {
    try {
      setLoading(true);
      const res = await getData(page);
      if (Array.isArray(res.data) && res.data.length > 0) {
        setLoadedData((prevData) => [...prevData, ...res.data]);
        setPage((prev) => prev + 1);
      } else {
        setMoreData(false);
      }
    } catch (err) {
      console.log(err);
      setMoreData(false);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (moreData && !loading) getDataFromApi(page);
  }, [page, moreData, loading]);

  return (
    <React.Fragment>
      <BackButton />
      <div>
        {loadedData.map((item) => (
          <>
            <div key={item.id} className="infiniteScroll">
              <h3>ID : {item.id}</h3>
              <hr />
              <h4>Title : {item.name}</h4>
            </div>
            <br />
          </>
        ))}
        {loading && <div>Loading...</div>}
        {!loading && !moreData && <div>No more data</div>}
      </div>
    </React.Fragment>
  );
};

export default InfiniteScroll;
