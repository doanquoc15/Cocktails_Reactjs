import React from 'react';
import {Link} from 'react-router-dom'

const Cocktail = ({...rest}) => {
    return (
        <article className='cocktail'>
            <div className="img-container">
                <img src={rest.image} alt={rest.name} />
            </div>

            <div className="cocktail-footer">
                <h3>{rest.name}</h3>
                <h4>{rest.glass}</h4>
                <p>{rest.info}</p>
                <Link to={`/cocktail/${rest.id}`} className="btn btn-purple">Detail</Link>
            </div>
        </article>
    );
};

export default Cocktail;