import React, {useState, useEffect} from 'react';
import ItemThumbnail from '../../Components/ItemThumbnail/ItemThumbnail';
import './index.scss';

type ItemsListProps = {
    category: string,
}

const ItemsList = ({category}: ItemsListProps) => {

    const [items, setItems] = useState<any[]>([]);

    async function handleItemsDownload(category: string) {
        const result = await fetch('/api/items/' + category, {
            mode: 'cors',
            method: 'GET',
        })
        const response = result.json();
        response.then((items) => {
            setItems(items);
        })
    }

    useEffect(() => {
        handleItemsDownload(category);
    }, [category])

    return (
        <div>
            <div className="items_list">
                {items.map((item, i) => {
                    return (
                        <ItemThumbnail
                            key={item._id}
                            id={item._id}
                            name={item.weaponName}
                            image={item.weaponPhotos[0]}
                            price={item.price}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ItemsList;