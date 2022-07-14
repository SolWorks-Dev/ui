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
        <div className="" style={{...additionalStyles}}>
            <div className="mac-outline glow-on-hover bg px18">
                <div className="mac-logo">
                    <Logo logoUrl={logoUrl} altText={`${appName} logo`} />
                </div>
                <div className="mac-title">{appName}</div>
                <Tag tagColor={tagColor} tag={tag} />
                <div className="mac-divider" />
                <div className="mac-tap-text">Tap to open</div>
            </div>
        </div>
    );
};

export interface TagProps {
    tagColor: TagColor;
    tag: string;
}

export const Tag: FC<TagProps> = ({
    tagColor,
    tag
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
        <div className="mac-tag" style={{backgroundColor: tagColorHex}}>
            <div className="mac-tag-text">
                {tag.toUpperCase()}
            </div>
        </div>
    );
}
