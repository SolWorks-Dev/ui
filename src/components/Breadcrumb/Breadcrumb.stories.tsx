import React from "react";
import { BlackBackground } from "../../BlackBackground";
import { Breadcrumb } from "./index";

export default {
  title: "Breadcrumb",
  component: Breadcrumb,
};

export const Home = () => <BlackBackground child={<Breadcrumb />} />;

export const Application = () => (
  <BlackBackground child={<Breadcrumb currentPageName="Raydium" />} />
);
