import React from 'react';
import './Animal.css';


function Animal({name,species,age,image}) {
    return (
        <div className='Animal'>
            <div className='animals-cards'>
                <img className='animal-img' src={image} alt={name} />
                <div className='animal-description'>
                    <h3>{name}</h3>
                    <span>Espèces: {species}</span>
                    <span>Âge : {age}</span>

                </div>

            </div>


        </div>

    )
}

export default Animal
