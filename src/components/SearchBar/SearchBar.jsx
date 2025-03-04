/* eslint-disable react-hooks/exhaustive-deps */
// Auto Complete Search Bar

// Features
//  show search results from api
//  Debouncing
//  Cache
//  Keydown functionality

import React, { useEffect, useState } from 'react';
import BackButton from '../../utilityComponents/BackButton/BackButton';
import './SearchBar.css';

const recipeeURL = 'https://dummyjson.com/recipes/search?q=';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);

  //caching
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (!input.trim()) {
      setResults([]);
      return;
    }

    if (cache[input]) {
      setResults(cache[input]);
      return;
    }

    const data = await fetch(recipeeURL + input);
    const json = await data.json();
    console.log(json.recipes);
    setResults(json?.recipes);
    setCache((prev) => ({ ...prev, [input]: json?.recipes }));
  };

  useEffect(() => {
    //debouncing
    const timer = setTimeout(fetchData, 300);

    return () => {
      clearTimeout(timer);
      setSelectedResult(null);
    };
  }, [input]);

  return (
    <React.Fragment>
      <BackButton />
      <div className="search-container">
        <h1>Auto Complete Search Bar</h1>
        <input
          className="search-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => {
            setShowResults(true);
            setSelectedResult(null);
          }}
          onBlur={() => {
            setShowResults(false);
            setSelectedResult(null);
          }}
          onKeyDown={(e) => {
            e.key === 'ArrowDown' &&
              setSelectedResult((prev) =>
                prev === null || prev >= results.length - 1 ? 0 : prev + 1
              );
            e.key === 'ArrowUp' &&
              setSelectedResult((prev) =>
                prev === null || prev <= 0 ? 0 : prev - 1
              );
          }}
        />
        {showResults && results.length ? (
          <div className="search-result-list">
            {results.map((result, key) => {
              return (
                <span
                  style={
                    selectedResult === key
                      ? { backgroundColor: 'burlywood' }
                      : {}
                  }
                  className="search-result-item"
                  key={key}
                >
                  {result.name}
                </span>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
