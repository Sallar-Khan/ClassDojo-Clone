import React from 'react';
import './box.css';

function Box(props) {
  return (
    <>
        <div className='card cards'>
            <img className='img-responsive img-circle mb-4 img-resize container' src={props.img_link} alt="heart" />
            <div className="card-body">
                <h4 className="card-title text-center fw-bold">{props.card_title}</h4>
                <p className="card-text  text-center">{props.card_text}</p>
            </div>
        </div>
    </>
    )
}

export default Box
