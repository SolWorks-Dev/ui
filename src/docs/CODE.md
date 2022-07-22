# Creating a new component

1. Create folder in components dir with component name
2. Create 2 files: `index.tsx` and `[COMPONENT NAME].stories.tsx` where `[COMPONENT NAME]` matches the dir name created in step 1.
3. Add scaffolding to `index.tsx`:

```
import React, { FC } from "react";
import "../../common.css";

export interface Props {

};

export const Component: FC<Props> = ({

}) => {
    return (
        <></>
    );
}
```

4. Add scaffolding to `[COMPONENT NAME].stories.tsx`

```
import React from "react";
import { Component } from "./index";

export default {
  title: "Component",
  component: Component,
};

export const Default = () => <Component />
```
