import React from "react";

export const BlackBackground = ({child = <></>}) => 
    <div style={{
        backgroundColor: 'var(--background)', 
        width: '600px', 
        height: '800px', 
        display: 'flex', 
        textAlign: 'center',
        justifyContent: 'center', 
        alignItems: 'center'
    }}>
        {child}
    </div>;