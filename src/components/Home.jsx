import React, { useState, useEffect } from 'react';
import Product from './Product';
import LoadingSpinner from './Loading';

const Home = () => {
  const [selectedSlide, setSelectedSlide] = useState(0); // State to keep track of the selected slide index
  const [products, setProducts] = useState([]);
  const categories = ['jewelery', 'electronics', "men's clothing", "women's clothing"];
  const [isLoading, setIsLoading] = useState(false);
  let componentMounted = true
  useEffect(() => {
    const fetchSearchResults = async () => {
      setIsLoading(true)
        try {
            
            const response = await fetch('https://fakestoreapi.com/products');
            if (componentMounted) {
              const data = await response.json();
            setProducts(data);
            setIsLoading(false)
            }
          } catch (error) {
            console.error('Error fetching search results:', error);
          }
          return () => {
            componentMounted = false;
          }
        }
      fetchSearchResults();

  }, []);


  

  const handleSlideChange = (selectedIndex) => {
    
    if(selectedIndex == 4){
        selectedIndex = 0;
    }
    if(selectedIndex == -1){
        selectedIndex = 3;
    }

    
    setSelectedSlide(selectedIndex);
  };
  const Loading = () =>{
    return(
      <>
        <LoadingSpinner/>
      </>
    )
  }
  
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className={selectedSlide === 0 ? 'active' : ''}
            aria-current={selectedSlide === 0 ? 'true' : 'false'}
            aria-label="Slide 1"
            onClick={() => handleSlideChange(0)}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            className={selectedSlide === 1 ? 'active' : ''}
            aria-current={selectedSlide === 1 ? 'true' : 'false'}
            aria-label="Slide 2"
            onClick={() => handleSlideChange(1)}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            className={selectedSlide === 2 ? 'active' : ''}
            aria-current={selectedSlide === 2 ? 'true' : 'false'}
            aria-label="Slide 3"
            onClick={() => handleSlideChange(2)}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            className={selectedSlide === 3 ? 'active' : ''}
            aria-current={selectedSlide === 3 ? 'true' : 'false'}
            aria-label="Slide 4"
            onClick={() => handleSlideChange(3)}
          ></button>
        </div>
        <div className="carousel-inner">
          <div className={`carousel-item ${selectedSlide === 0 ? 'active' : ''}`}>
            <img
              src="https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className="d-block w-100"
              height="500px"
            />
          </div>
          <div className={`carousel-item ${selectedSlide === 1 ? 'active' : ''}`}>
            <img
              src="https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className="d-block w-100"
              height="500px"
            />
          </div>
          <div className={`carousel-item ${selectedSlide === 2 ? 'active' : ''}`}>
            <img
              src="https://images.pexels.com/photos/5264914/pexels-photo-5264914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100"
              height="500px"
            />
          </div>
          <div className={`carousel-item ${selectedSlide === 3 ? 'active' : ''}`}>
            <img
              src="https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100"
              height="500px"
              
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          onClick={() => handleSlideChange(selectedSlide - 1)}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          onClick={() => handleSlideChange(selectedSlide + 1)}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

       
      </div>

      {isLoading ? (
       <Loading/>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <Product products={products} category={categories[selectedSlide]} />
        </ul>
      )}
      
      
    </div>
  );
};

export default Home;

