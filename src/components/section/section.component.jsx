import './section.styles.css';
import background from "../../assets/images/stranger-things.png";


const Section = ({placeholder, onChangeHandler}) => {

  return (
    <div className='section-container' style={{ backgroundImage: `url(${background})` }}>
        <span className='secondary-text'> 
            Millions of movies, TV shows and people to discover. Explore now.
        </span>
        <input
            className='search-box'
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    </div>
  )
  
};

export default Section;