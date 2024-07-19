import React from 'react';
import MyImage from '../assets/desk1.jpg';

function Card() {
    return (
        <>
            <div className='card'>
                <img src={MyImage} alt='myImage'></img>
                <h2>Header</h2>
                <p>Paragraph</p>
            </div>
        </>
    )
}

export default Card;