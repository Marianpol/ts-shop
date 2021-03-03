import React, { useState } from 'react';
import './index.scss';

type GalleryProps = {
    name: string,
    photos: string[],
}

const Gallery = ({name, photos}: GalleryProps) => {

    const [photoID, setPhotoID] = useState(0);

    const handleNextPhoto = () => {
        if (photoID < photos.length - 1){
            setPhotoID(photoID + 1);
        }
        else {
            setPhotoID(0);
        }
    }
    const handlePreviousPhoto = () => {
        if (photoID > 0){
            setPhotoID(photoID - 1);
        }
        else {
            setPhotoID(photos.length - 1);
        }
    }

    return (
        <div className="gallery">
            <div className="gallery__displayed_photo_wrapper">
                <div 
                    className="gallery__arrow gallery__arrow_left"
                    onClick={() => handlePreviousPhoto()}/>
                <img
                    className="gallery__displayed_photo"
                    src={photos[photoID]}
                    alt={name + '_' + photoID}
                />
                <div 
                    className="gallery__arrow gallery__arrow_right"
                    onClick={() => handleNextPhoto()}/>
            </div>
            <div className="gallery__photos_list">
                {photos.map((href, i) => {
                    return (
                        <img
                            key={href}
                            className="gallery__photos_list__item"
                            src={href}
                            alt={name + '_' + i}
                            onClick={() => setPhotoID(i)}
                            style={{border: i === photoID ? '1px solid black': 'none'}}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery;