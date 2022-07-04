import React, { FC } from "react";
import "../../common.css";
import PulseLoader from "react-spinners/PulseLoader";
import './ActionButton.css';

interface ActionButtonProps {
    isLoading?: boolean;
    text?: string;
    onClick?: () => {};
}

export const ActionButton: FC<ActionButtonProps> = ({
    isLoading = false,
    text = "",
    onClick = () => {}
}) => {
    return (
        <div className="action-button" onClick={onClick}>
            <div className="action-button-text">
                {isLoading  ? <PulseLoader loading={isLoading} size={8} color="white" /> : text}
            </div>
        </div>
    );
}

interface ActionButtonWithLinkProps {
    isLoading?: boolean;
    text?: string;
    url?: string;
    classname?: string;
}

export const ActionButtonWithLink: FC<ActionButtonWithLinkProps> = ({
    isLoading = false,
    text = "",
    url = "",
    classname = ""
}) => {
    return (
        <a className={"action-button " + classname} target='_blank' rel="noreferrer" href={url}>
            <div className="action-button-text">
                {isLoading  ? <PulseLoader loading={isLoading} size={8} color="white" /> : text}
            </div>
        </a>
    );
}