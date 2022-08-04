import React, { FC } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

export interface ActionButtonWithLinkProps {
  isLoading?: boolean;
  text?: string;
  url?: string;
  classname?: string;
  width?: number;
}

export const ActionButtonWithLink: FC<ActionButtonWithLinkProps> = ({
  isLoading = false,
  text = '',
  url = '',
  classname = '',
  width = 0,
}) => {
  return (
    <a
      className={'action-button ' + classname}
      target="_blank"
      rel="noreferrer"
      href={url}
      style={{ width: width === 0 ? '100%' : `${width}px` }}
    >
      <div className="action-button-text">
        {isLoading ? <PulseLoader loading={isLoading} size={8} color="white" /> : text}
      </div>
    </a>
  );
};

export default ActionButtonWithLink;