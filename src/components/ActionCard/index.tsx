import { Center, createStyles } from '@mantine/core';
import React, { FC } from 'react';
import '../../common.css';
import { ActionButtonWithLink } from '../ActionButtonWithLink';
import { Heading } from '../Heading';
import './ActionCard.css';

export interface ActionCardProps {
  title: string;
  text: string | JSX.Element;
  actionLink: string;
  actionButtonText: string;
}

const useStyles = createStyles((theme) => ({
  actionCard: {
    minHeight: "100px", 
    minWidth: "240px", 
    width: "100%", 
    color: "white", 
    fontFamily: "'Roboto'", 
    display: "flex", 
    justifyContent: "center", 
    borderRadius: "18px", 
    border: theme.colorScheme === 'dark' ? 'solid 1px #261d2b' : '1px solid rgb(153, 153, 153)',
    textAlign: "center", 
    position: "relative",
    paddingBottom: "25px"
  }
}));

export const ActionCard: FC<ActionCardProps> = ({ title = '', text = '', actionLink = '', actionButtonText = '' }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.actionCard}>
      <div>
        <Center sx={{paddingTop: '20px'}}><Heading text={title} size={28}/></Center>
        <div className="action-card-text">{text}</div>
        <ActionButtonWithLink text={actionButtonText} url={actionLink} classname="action-card-button" width={180} />
      </div>
    </div>
  );
};
