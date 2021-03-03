import React from 'react';

type DescriptionProps = {
    description: string[],
}

const Description = ({description}: DescriptionProps) => {

    return (
        <div>
            {description.map((paragraph) => {
                return <p key={paragraph}>{paragraph}</p>
            })}
        </div>
    )
}

export default Description;