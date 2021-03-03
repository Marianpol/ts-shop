import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

type ItemThumbnailProps = {
    id: string,
    image: string,
    name: string,
    price: number,
}

const ItemThumbnail = ({id, image, name, price}: ItemThumbnailProps) => {

    return (
        <Link
            to={`/products/${id}`} 
            style={{
                textDecoration: 'none',
                color: 'black'
        }}
            >
            <div className="thumbnail">
                <div className="thumbnail__image_wrapper">
                    <img 
                        className="thumbnail__image_wrapper__image"
                        src={image}
                        alt={name}
                    />
                </div>
                <div className="thumbnail__name">
                    {name}
                </div>
                <div className="thumbnail__wrapper">
                    <div className="thumbnail__wrapper__price">
                        {`${price.toFixed(2)} zł`}
                    </div>
                    <button className="thumbnail__wrapper__button">
                        DO KOSZYKA
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default ItemThumbnail;