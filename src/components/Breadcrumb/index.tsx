import React, { FC } from "react";
import "../../common.css";
import './Breadcrumb.css';

export interface BreadcrumbProps {
    textSizePx?: number;
    hideHomeEmoji?: boolean;
    currentPageName?: string;
    onHomeClick?: () => void;
}

export const Breadcrumb: FC<BreadcrumbProps> = ({
    textSizePx = 18,
    hideHomeEmoji = false,
    currentPageName = undefined,
    onHomeClick = () => {}
}) => {

    return (
        <div className="breadcrumb-wrapper" style={{fontSize: `${textSizePx}px`}}>
            <div className="breadcrumb-link" onClick={onHomeClick}>
                {hideHomeEmoji ? '' : '🏡'} <u>Home</u>
            </div>
            <text className="breadcrumb-current-page">
                {currentPageName ? `/ ${currentPageName}` : ''}
            </text>  
        </div>
    );
}