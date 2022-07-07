import React, { FC } from "react";
import "../../common.css";
import PulseLoader from "react-spinners/PulseLoader";

export interface ActionButtonProps {
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
        <div className="action-button glow-on-hover pink-bg" onClick={onClick}>
            <div className="action-button-text">
                {isLoading  
                    ? <PulseLoader loading={isLoading} size={8} color="white" /> 
                    : text}
            </div>
        </div>
    );
}

