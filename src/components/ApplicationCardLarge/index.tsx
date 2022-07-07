import React, { FC } from "react";
import "../../common.css";
import './ApplicationCardLarge.css';
import { Logo } from "../Logo";


export interface ApplicationCardLargeProps {
    logoUrl: string;
    appName: string;
    description: string;
};

export const ApplicationCardLarge: FC<ApplicationCardLargeProps> = ({
    logoUrl,
    appName,
    description
}) => {

    return (
        <div className="lac-outline">
            <Logo logoUrl={logoUrl} altText={`${appName} logo`} />
            <div className="lac-title">{appName}</div>
            <div className="lac-divider" />
            <div className="lac-tap-text">Tap to open</div>
        </div>
    );
};

