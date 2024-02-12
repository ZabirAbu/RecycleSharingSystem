import React, { useState, useEffect } from 'react';
import data from '../data.json';


function Recomendation({ currentImageId }) {
    const [randomImages, setRandomImages] = useState([]);



    useEffect(() => {
        const getRandomImages = () => {
            // Filter out the image corresponding to the currentImageId
            const filteredData = data.filter(image => image.id !== currentImageId);
    
            // Randomly select four unique images
            const selectedImages = getRandomSelection(filteredData, 4);
    
            setRandomImages(selectedImages);
        };
    
        getRandomImages();
    }, [currentImageId]);

    // Function to randomly select n items from an array
    const getRandomSelection = (array, n) => {
        const shuffled = array.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
    };

    return (
        <div className='rec-top'>
            <h1>Recomendations</h1>
            <div className='rec-item'>
                <div className='rec-container'>
                    {randomImages.map((image, index) => (
                        <a key={index} className='rec-box' href={`/item?id=${image.id}`}>
                            <img className='rec-img' src={image.image} alt={image.title} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Recomendation;
