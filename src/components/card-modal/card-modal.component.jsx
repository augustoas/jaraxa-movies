import './card-modal.styles.css';
import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { useSelector } from 'react-redux';


const Modal = ({onClose, show }) => {

    const movie = useSelector(
        (state) => state.setModalMovie.movie
    );
    const baseImageURL = 'https://image.tmdb.org/t/p/w220_and_h330_face'

    return ReactDOM.createPortal(
        <CSSTransition
        in={show}
        unmountOnExit
        timeout={{ enter: 0, exit: 300 }}
        >
        <div className="modal" onClick={onClose}>
            <div 
                className="modal-content"
                onClick={e => e.stopPropagation()}
                style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}')` }}
                
            >
                
                <div className="modal-left">
                    <h1 className='modal-title'>{movie.original_title}</h1>
                    <div>
                        <img className='movie-image'
                            src={`${baseImageURL}${movie.poster_path}`}
                        />
                    </div>
                    
                    <div className='ranking'>{movie.vote_average}</div>
                    <div className='realease_date'>{movie.release_date}</div>

                </div>
                <div className="modal-right">
                    <h1>Overview</h1>
                    <div className='movie-overview'>{movie.overview}</div>
                </div>
                
            </div>
        </div>
        </CSSTransition>,
        document.getElementById("root")
    );
};

export default Modal;
