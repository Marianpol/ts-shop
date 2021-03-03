import React from 'react';
import './index.scss';

type DetailsProps = {
    details: {[key: string]: string},
}

const Details = ({details}: DetailsProps) => {

    return (
        <div>
            <table className="details_table">
                {/* <thead>
                    <tr>
                        <th colSpan={2}>
                            Dane techniczne
                        </th>
                    </tr>
                </thead> */}
                <tbody>
                    {Object.entries(details).map(([key, value]) => {
                        return (
                            <tr
                                key={key}
                            >
                                <td>{key}</td>
                                <td>{value}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Details;