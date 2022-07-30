import Card from '../card/card.component';
import './carrousel-list.styles.css';
import { useDispatch } from 'react-redux';
import { setMovie, openModal } from '../../app/slices/movieSlice';



const CarrouselList = ({ movies }) => {

  const dispatch = useDispatch();

  const openCardModal = (movie) => {
    dispatch(setMovie(movie))
    dispatch(openModal())
  }

  return (
    <div className='carrousel-list'>
      {movies.map((movie) => {
        return <Card key={movie.id} movie={movie} openModal={() => openCardModal(movie)}/>;
      })}
    </div>
  )
  
};

export default CarrouselList;
