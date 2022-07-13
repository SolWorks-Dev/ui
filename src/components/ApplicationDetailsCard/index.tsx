import React, { FC } from "react";
import "../../common.css";
import { Logo } from "../Logo";
import "./ApplicationDetailsCard.css";

export interface ApplicationDetailsCardProps {
    logoUrl: string;
    applicationName: string;
    tag: string;
    description: string;
};

export const ApplicationDetailsCard: FC<ApplicationDetailsCardProps> = ({
    logoUrl,
    applicationName,
    tag,
    description
}) => {
    return (
        <div className="adc-outline">
            <div className="adc-wrapper">
                <div className="adc-header">
                    <div className="adc-header-logo">
                        <Logo logoUrl={logoUrl} altText=""/>
                    </div>
                    <div className="adc-header-text">
                        {applicationName}
                    </div>
                    <div className="adc-header-tag">
                        {tag}
                    </div>
                </div>
                <div className="adc-description">
                    {description}
                </div>
            </div>
        </div>
    );
}