import React, { useEffect, useState } from 'react';
import Gallery from '../../Components/ItemPage/Gallery/Gallery';
import ItemInfoBox from '../../Components/ItemPage/ItemInfoBox/ItemInfoBox';
import MainInfo from '../../Components/ItemPage/MainInfo/MainInfo';

import './index.scss';

type ItemProps = {
    id: string,
}

const Item = ({id}: ItemProps) => {

    const [item, setItem] = useState({
        name: '',
        photos: [],
        description: [],
        info: {
            infoNames: {},
            infoItems: {
                details: {},
                description: [],
            },
        },
        price: 0,
        isCutPrice: false,
        category: '',
    });

    const [itemQuantity, setItemQuantity] = useState<any>(1);
    const [stringCount, setStringCount] = useState<number>(0);

    const handleItemDownload = async (id: string) => {
        const result = await fetch('/api/product/' + id, {
            mode: 'cors',
            method: 'GET',
        })

        const response = result.json();
        response.then((item) => {
            setItem({
                ...item,
                price: Number.parseFloat(item.price).toFixed(2),
            });
        })
    }

    const changeItemQuantity = (operation: string, quatity: any = 0) => {
        switch (operation) {
            case '+':
                if (typeof itemQuantity === "string"){
                    setItemQuantity(1);
                }
                else {
                    setItemQuantity(parseInt(itemQuantity) + 1);
                }
                break;
            case '-':
                if (itemQuantity > 1) {
                    setItemQuantity(itemQuantity - 1);
                }
                break;
            default:
                if (quatity > 0) {
                    setItemQuantity(parseInt(quatity));
                }
                else {
                    setStringCount(stringCount + 1);
                    setItemQuantity('');
                }
            if (stringCount > 2 ) {
                setItemQuantity(1);
                setStringCount(0);
            }
        }
    }

    useEffect(() => {
        handleItemDownload(id);
    }, [id])

    return (
        <>
            <div>
                <div className="main_info_wrapper">
                    <Gallery
                        name={item.name}
                        photos={item.photos}
                    />
                    <MainInfo
                        id={id}
                        name={item.name}
                        photo={item.photos[0]}
                        price={item.price}
                        itemQuantity={itemQuantity}
                        changeItemQuantity={changeItemQuantity}
                    />
                </div>
                <ItemInfoBox
                    info={item.info}
                />
            </div>

        </>
    )
}

export default Item;