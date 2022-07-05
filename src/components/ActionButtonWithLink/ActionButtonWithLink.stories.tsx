import React from "react";
import { ActionButtonWithLink } from "./index";

export default {
  title: "Action button with link",
  component: ActionButtonWithLink,
};

export const Loading = () => <ActionButtonWithLink isLoading={true} text="Learn more" />;

export const Normal = () => <ActionButtonWithLink text="Learn more" />;
