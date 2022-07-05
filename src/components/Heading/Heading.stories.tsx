import React from "react";
import { Heading } from "./index";
import "../../common.css";

export default {
  title: "Heading",
  component: Heading,
};

const BlackBackground = ({child = <></>}) => 
    <div style={{backgroundColor: 'black'}}>
        {child}
    </div>;

export const Curated = () => <BlackBackground  child={<Heading text="Curated" />} />;
export const AMMs = () => <BlackBackground  child={<Heading text="AMMs" />} />;
