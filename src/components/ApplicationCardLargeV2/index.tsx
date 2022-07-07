import React, { FC } from "react";
import "../../common.css";
import './ApplicationCardLargeV2.css';
import { Logo } from "../Logo";
import { ActionButton } from "../ActionButton";


export interface ApplicationCardLargeV2Props {
    logoUrl: string;
    appName: string;
    description: string;
    onClick?: () => {};
};

export const ApplicationCardLargeV2: FC<ApplicationCardLargeV2Props> = ({
    logoUrl,
    appName,
    description,
    onClick
}) => {

    return (
        <div className="lac-v2-outline glow-on-hover bg rise-on-hover-300">
            <div style={{display: 'flex'}}>
                <div className="lac-v2-logo">
                    <Logo logoUrl={logoUrl} altText={`${appName} logo`} />
                </div>
                <div className="lac-v2-title-desc-wrapper">
                    <div className="lac-v2-title">{appName}</div>
                    <div className="lac-v2-desc">{description}</div>
                </div>
            </div>
            <div className="lac-v2-divider" />
            <div className="lac-v2-tap-text">Tap to open</div>
        </div>
    );
};

