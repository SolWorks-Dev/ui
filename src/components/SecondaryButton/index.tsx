import React, { FC } from "react";
import "../../common.css";

export interface SecondaryButtonProps {
    text?: string;
    classname?: string;
    onClick?: () => void;
    url?: string;
}

export const SecondaryButton: FC<SecondaryButtonProps> = ({
    text = "", 
    classname = undefined,
    onClick = undefined,
    url = undefined
}) => {

    if (url !== undefined) {
        return (
            <a 
                className={"secondary-button " + classname}
                target='_blank' 
                rel="noreferrer" 
                href={url}
            >
                <div className="secondary-button-text">
                    {text.toUpperCase()}
                </div>
            </a>
        );
    } else if (onClick) {
        return (
            <div className={"secondary-button " + classname} onClick={onClick}>
                <div className="secondary-button-text">
                    {text.toUpperCase()}
                </div>
            </div>
        );
    } else {
        return (
            <div className={"secondary-button " + classname}>
                <div className="secondary-button-text">
                    {text.toUpperCase()}
                </div>
            </div>
        );
    }
};
