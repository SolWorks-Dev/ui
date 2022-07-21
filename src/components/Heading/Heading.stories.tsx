import React from "react";
import { Heading } from "./index";
import "../../common.css";
import { BlackBackground } from "../../BlackBackground";

export default {
  component: Heading,
};

export const Curated = () => <BlackBackground  child={<Heading text="Curated" />} />;
export const AMMs = () => <BlackBackground  child={<Heading text="AMMs" />} />;
