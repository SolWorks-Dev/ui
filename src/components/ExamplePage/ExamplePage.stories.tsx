import React from "react";
import { ExampleApplicationPage, ExampleHomePage } from "./index";

export default {
  title: "Components/Example pages",
  component: ExampleHomePage,
};

export const Home = () => <ExampleHomePage />;
export const Application = () => <ExampleApplicationPage />;
