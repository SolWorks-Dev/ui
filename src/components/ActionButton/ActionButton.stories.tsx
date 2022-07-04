import React from "react";
import { ActionButton } from "./index";
import "../../common.css";

export default {
  title: "Action button",
  component: ActionButton,
};

export const Loading = () => <ActionButton isLoading={true} text="Learn more" />;

export const Normal = () => <ActionButton text="Learn more" />;
