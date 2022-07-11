import React, { FC } from "react";

export interface LogoProps {
    logoUrl: string;
    altText: string;
};

export const Logo: FC<LogoProps> = ({logoUrl, altText}) => {
    return (
        <div className="mac-logo">
            <img
                src={logoUrl}
                width="78px"
                height="78px"
                alt={`${altText} logo`}
                style={{borderRadius: '40px'}}
            />
        </div>
    );
};
