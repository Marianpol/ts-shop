import React, { useState } from 'react';
import Details from '../Details/Details';
import './ItemInfoBox.scss';

type ItemInfoBoxProps = {
    info: {
        infoNames: {[key: string]: string},
        infoItems: {
            description?:  string[],
            details?: {[key: string]: string}
        }
    }
}

const ItemInfoBox = ({info}: ItemInfoBoxProps) => {

    const [selectedInfo, setSelectedInfo] = useState('description');

    return (
        <div className="description-wrapper">
            <div className="description-wrapper__navigation">
                {Object.entries(info.infoNames).map(([key, name]) => {
                    return (
                        <button 
                            style={
                                key === selectedInfo ? {
                                    backgroundColor: '#A07855',
                                    color: 'white',
                                }:{}}
                            key={key}
                            className="description-wrapper__button"
                            onClick={() => setSelectedInfo(key)}
                            >
                                {name}
                            </button>
                    )
                })}
            </div>
            <div className="description-wrapper__displayed-info">
                <div
                    style={{display: selectedInfo === 'description' ? 'initial' : 'none'}}>
                    {info.infoItems.description?.map((paragraph) => {
                            return <p key={paragraph}>{paragraph}</p>
                        })}
                </div>
                <div style={{display: selectedInfo === 'details' ? 'initial' : 'none'}}>
                    <Details
                        details={info.infoItems.details || {}}
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemInfoBox;