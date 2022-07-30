import './card.styles.css';

const Card = ({ movie, openModal }) => {
  const { poster_path, original_title, email } = movie;
  const baseImageURL = 'https://image.tmdb.org/t/p/w220_and_h330_face'

  return (
    <div className='card-container' onClick={openModal}>
      <img
        alt={`movie ${original_title}`}
        src={`${baseImageURL}${poster_path}`}
      />
      <div className='card-title'>{original_title}</div>
      <p>{email}</p>
    </div>
  );
};

export default Card;
