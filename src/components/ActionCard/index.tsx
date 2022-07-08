import React, { FC } from "react";
import "../../common.css";
import { ActionButtonWithLink } from "../ActionButtonWithLink";
import "./ActionCard.css";

export interface ActionCardProps {
    title: string;
    text: string | JSX.Element;
    actionLink: string;
    actionButtonText: string;
}

export const ActionCard: FC<ActionCardProps> = ({
    title = "",
    text = "", 
    actionLink = "", 
    actionButtonText = ""
}) => {
    return (
        <div className="action-card">
            <div>
                <div className="action-card-title">{title}</div>
                <div className="action-card-text">{text}</div>
                <ActionButtonWithLink text={actionButtonText} url={actionLink} classname="action-card-button" width={180} />
            </div>
        </div>
    );
}