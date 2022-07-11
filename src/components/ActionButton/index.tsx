import React, { FC } from "react";
import "../../common.css";
import PulseLoader from "react-spinners/PulseLoader";

export interface ActionButtonProps {
  isLoading?: boolean;
  text?: string;
  onClick?: () => {};
  width?: number;
}

export const ActionButton: FC<ActionButtonProps> = ({
  isLoading = false,
  text = "",
  onClick = () => {},
  width = 0,
}) => {
  return (
    <div
      className="action-button"
      onClick={onClick}
      style={{ width: width === 0 ? "100%" : `${width}px` }}
    >
      <div className="action-button-text">
        {isLoading ? (
          <PulseLoader loading={isLoading} size={8} color="white" />
        ) : (
          text
        )}
      </div>
    </div>
  );
};
