import React from "react";
import { BlackBackground } from "../../BlackBackground";
import { SocialsCard } from "./index";

export default {
    component: SocialsCard
};

export const Example = () => <BlackBackground
    child={
        <SocialsCard
            twitter={[
                {
                    text: "@Raydium", 
                    url: "https://twitter.com/raydium"
                },
                {
                    text: "@RaydiumIo", 
                    url: "https://twitter.com/raydiumio"
                }
            ]}
            discord={[
                {
                    text: "discord.gg/areallylonglink",
                    url: "https://discord.gg/areallylonglink"
                }
            ]}
        />
    }
/>