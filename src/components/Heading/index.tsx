import React, { CSSProperties, FC } from "react";

export interface HeadingProps {
    text: string;
    size?: number;
}

export const Heading: FC<HeadingProps> = ({
    text = "",
    size = 42
}) => {

    const HeadingStyles: CSSProperties = {
        color: '#fff',
        fontSize: `${size}px`,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textAlign: 'left'
    };

    return (
        <div style={HeadingStyles}>
            {text}
        </div>
    );
};