import React from "react";
import { ExampleApplicationPage, ExampleHomePage } from "./index";

export default {
  title: "Example pages",
  component: ExampleHomePage,
};

export const Home = () => <ExampleHomePage />;
export const Application = () => <ExampleApplicationPage />;
