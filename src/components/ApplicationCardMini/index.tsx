import React, { FC } from "react";
import "../../common.css";
import './ApplicationCardMini.css';
import { Logo } from "../Logo";

export type TagColor = 'light-blue' | 'orange' | 'purple';

export interface ApplicationCardMiniProps {
    logoUrl: string;
    appName: string;
    tag: string;
    tagColor: TagColor;
    additionalStyles?: any;
};

export const ApplicationCardMini: FC<ApplicationCardMiniProps> = ({
    logoUrl,
    appName,
    tag,
    tagColor,
    additionalStyles = undefined
}) => {

    let tagColorHex = '';
    switch (tagColor) {
        case 'light-blue':
            tagColorHex = '#71adff';
            break;
        case 'orange':
            tagColorHex = '#f89a3d';
            break;
        case 'purple':
            tagColorHex = '#461183';
            break;
    }

    return (
        <div className="glow-on-hover bg" style={{...additionalStyles, display: 'inline-flex'}}>
            <div className="mac-outline">
                <Logo logoUrl={logoUrl} altText={`${appName} logo`} />
                <div className="mac-title">{appName}</div>
                <div className="mac-tag" style={{backgroundColor: tagColorHex}}>
                    <div className="mac-tag-text">
                        {tag.toUpperCase()}
                    </div>
                </div>
                <div className="mac-divider" />
                <div className="mac-tap-text">Tap to open</div>
            </div>
        </div>
    );
};

