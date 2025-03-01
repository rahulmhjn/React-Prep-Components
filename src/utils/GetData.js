import data from '../data/data';

const getData = (page) => {
  const pageSize = 10;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const slicedData = data.slice(startIndex, endIndex);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: slicedData,
        totalPages: Math.ceil(data.length / pageSize),
      });
    }, 1000);
  });
};

export default getData;
