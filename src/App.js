import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.component';
import Section from './components/section/section.component';
import CarrouselList from './components/carrousel-list/carrousel-list.component';
import Modal from './components/card-modal/card-modal.component';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from './app/slices/movieSlice';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilterMovies] = useState(movies);

  const dispatch = useDispatch();
  const showModal = useSelector(
      (state) => state.setModalMovie.open
  );
  
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?' + new URLSearchParams({
      api_key:'bf62f8e705dfa887f81f57c4d118d7a0',
      sort_by: 'popularity.desc'
    }))
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies.results)
      });
  }, []);

  useEffect(() => {
    if (searchField) {
      fetch('https://api.themoviedb.org/3/search/movie?' + new URLSearchParams({
        api_key:'bf62f8e705dfa887f81f57c4d118d7a0',
        sort_by: 'popularity.desc',
        query: searchField
      }))
        .then((response) => response.json())
        .then((movies) => {
          setFilterMovies(movies.results)
        });
    }
    else {
      setFilterMovies(movies)
    }
  }, [movies, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='app-container'>
      <Navbar/>
      <Section
        onChangeHandler={onSearchChange}
        placeholder='Search movies ...'
      />
      <Modal 
        onClose={() => dispatch(closeModal())} 
        show={showModal}
      />

      <CarrouselList movies={filteredMovies} />
    </div>
  );
};

export default App;
