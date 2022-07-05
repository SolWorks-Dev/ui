import React, { FC } from "react";
import "../../common.css";
import PulseLoader from "react-spinners/PulseLoader";

export interface ActionButtonWithLinkProps {
    isLoading?: boolean;
    text?: string;
    url?: string;
    classname?: string;
}

export const ActionButtonWithLink: FC<ActionButtonWithLinkProps> = ({
    isLoading = false, text = "", url = "", classname = ""
}) => {
    return (
        <a className={"action-button glow-on-hover " + classname} target='_blank' rel="noreferrer" href={url}>
            <div className="action-button-text">
                {isLoading ? <PulseLoader loading={isLoading} size={8} color="white" /> : text}
            </div>
        </a>
    );
};
