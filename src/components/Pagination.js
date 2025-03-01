import React, { useEffect, useState } from 'react';
import getData from '../utils/GetData';
import BackButton from '../utilityComponents/BackButton/BackButton';

const Pagination = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const getDataFromApi = async (page) => {
    const res = await getData(page);

    setData(res.data);
    setTotalPages(res.totalPages);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    getDataFromApi(page);
  }, [page]);

  return (
    <React.Fragment>
      <BackButton />
      <div>{JSON.stringify(data)}</div>
      <button onClick={prevPage} disabled={page === 1}>
        Prev Page
      </button>
      <button onClick={nextPage} disabled={page === totalPages}>
        Next Page
      </button>
      <p>{'Page: ' + page + ' of ' + totalPages + ' pages'}</p>
    </React.Fragment>
  );
};

export default Pagination;
