import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LoadingSpinner from './Loading';


const ResultsComponent = () => {
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchResults();
  }, []);


  
  const fetchResults = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setResults(data);
      setTotalPages(Math.ceil(data.length / 4));
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching results:', error);
    }
  };

 

  const renderResults = () => {
    const startIndex = (currentPage - 1) * 4;
    const endIndex = startIndex + 4;
    const paginatedResults = results.slice(startIndex, endIndex);

    return (
      <div className="row justify-content-center">
        {paginatedResults.map((result) => (
          <div key={result.id} className="col-md-3 col-lg-3 col-xl-3 mb-5" style={{ display: 'flex', justifyContent: 'center', width: '700px', height: '450px' }}>
            <div className="card h-100" style={{ width: '300px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <img src={result.image} className="card-img-top" alt={result.title} style={{ width: '100%', height: '50%', objectFit: 'scale-down' }} />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{result.title}</h5>
                <p className="card-text">${result.price}</p>
                <div className="mt-auto">
                  <NavLink to={`/products/${result.id}`} className="btn btn-primary">
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
    
    
    
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h1>EXPLORE THE SEASON</h1>
      <br></br>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="results-container">{renderResults()}</div>
      )}
      <div className="pagination d-flex justify-content-center mt-4">
        <button className="btn btn-secondary mr-2" onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button className="btn btn-secondary" onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ResultsComponent;




