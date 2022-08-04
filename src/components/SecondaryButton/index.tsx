import React, { FC } from 'react';
import Link from 'next/link';

export interface SecondaryButtonProps {
  text?: string;
  classname?: string;
  onClick?: () => void;
  url?: string;
  additionalStyles?: any;
}

export const SecondaryButton: FC<SecondaryButtonProps> = ({
  text = '',
  classname = undefined,
  onClick = undefined,
  url = undefined,
  additionalStyles = undefined,
}) => {
  if (url !== undefined) {
    return (
      <Link
        className={'secondary-button glow-on-hover bg colors-only ' + classname}
        href={url}
        style={additionalStyles}
      >
        <div className="secondary-button-text">{text.toUpperCase()}</div>
      </Link>
    );
  } else if (onClick) {
    return (
      <div
        className={'secondary-button glow-on-hover bg colors-only ' + classname}
        onClick={onClick}
        style={additionalStyles}
      >
        <div className="secondary-button-text">{text.toUpperCase()}</div>
      </div>
    );
  } else {
    return (
      <div className={'secondary-button glow-on-hover bg colors-only ' + classname} style={additionalStyles}>
        <div className="secondary-button-text">{text.toUpperCase()}</div>
      </div>
    );
  }
};

export default SecondaryButton;